# Authentication System Overview

## 📂 Project Structure
- **configs/**
  - `dbConnecting.ts` → MongoDB connection setup.
  - `mailTransporter.ts` → Nodemailer transporter configuration.
- **endpoints/**
  - `controllers/authControllers.ts` → Registration, login, OTP verification.
  - `routes/authRoute.ts` → Express routes for auth endpoints.
- **models/**
  - `user.model.ts` → User schema with fields for email, password, OTP, tokens.
- **types/**
  - `express.ts` → Typed `ExpressRequest` and `ExpressResponse`.
  - `models/` → Interfaces for user data and other models.
- **utils/**
  - `controllerResponse.ts` → Standardized JSON response format.
  - `controllerCatchingError.ts` → Centralized error handling.
  - `PasswordFunctionalities.ts` → Password hashing and verification.
  - `sendMail.ts` → Email sending utility.
  - `tokenFunctions.ts` → Access and refresh token generation.

---

## 🔐 Authentication Flow
1. **Registration**
   - Validates input.
   - Hashes password with bcrypt.
   - Creates user record.
   - Issues **access + refresh tokens** immediately (no need to log in again).
   - Sends refresh token in HttpOnly cookie, access token in response.

2. **Login**
   - Validates credentials.
   - Verifies password against hash.
   - Issues new access + refresh tokens.
   - Stores refresh token in DB and cookie.

3. **OTP Verification**
   - Compares incoming OTP with stored OTP.
   - Handles expired OTP (`410 Gone`), invalid OTP (`401 Unauthorized`), or success (`200 OK`).

4. **Token Refresh**
   - Validates refresh token from cookie.
   - Issues new access token if valid.
   - If refresh token invalid/expired → `401 Unauthorized` → user must log in again.

5. **Middleware**
   - Protects routes by verifying access token.
   - Supports role-based authorization.

---

## 📊 Status Code Guide
- **200 OK** → Success (login, OTP verified, new access token).
- **201 Created** → Resource created (registration).
- **400 Bad Request** → Missing/invalid input.
- **401 Unauthorized** → Invalid credentials or OTP.
- **403 Forbidden** → Insufficient role.
- **404 Not Found** → User not found.
- **410 Gone** → OTP expired.
- **500 Internal Server Error** → Unexpected server error.

---

## ✅ Summary
This system provides:
- Secure password hashing.
- Email sending via Nodemailer.
- OTP generation and verification.
- Access + refresh token lifecycle.
- Middleware for protected routes.
- Consistent error handling and response formatting.

Next steps: finalize OTP generation, add logout controller, and expand role-based access.
