# Commit Description

## Overview
This commit introduces the foundational structure for our backend project.  
We created dedicated folders and utility files to separate responsibilities, ensuring scalability and maintainability.  
It also includes the first half of the authentication workflow (registration controller and mock routes), with the remaining auth features to be completed in the next commit.

---

## 🔧 Configurations
- **dbConnecting.ts** → Handles MongoDB connection logic.
- **mailTransporter.ts** → Configures Nodemailer transporter for email sending.

---

## 📂 Project Structure
- **endpoints/** → Contains controllers and routes.
  - `controllers/authControllers.ts` → Implements `registerController` and a placeholder `sendOTP`.
  - `routes/authRoute.ts` → Mock routes for `register`, `login`, etc.
- **models/** → Holds data models.
  - `user.model.ts` → Defines `UserDataType` interface for user schema.
- **types/** → Centralized TypeScript types.
  - `express.ts` → Exports `ExpressRequest` and `ExpressResponse`.
  - `models/` → Interfaces for data models.
- **utils/** → Helper functions for controllers.
  - `controllerCatchingError.ts` → Unified error handling for controllers.
  - `controllerResponse.ts` → Standardized JSON response format.
  - `PasswordFunctionalities.ts` → Password hashing and verification with bcrypt.
  - `sendMail.ts` → Email sending utility using Nodemailer.

---

## 🛠 Implemented Functionalities
- **Error Handling**  
  - `catchError` utility ensures consistent error logging and response.
- **Controller Response**  
  - `controllerResponse` provides a unified JSON response structure.
- **Password Security**  
  - `hashPassword` and `VerifyPassword` functions for secure password storage and login verification.
- **Email Sending**  
  - `sendMail` function to send emails with subject, text, and HTML support.
- **Auth Controller (Partial)**  
  - `registerController` implemented with validation, password hashing, and user creation.
  - `sendOTP` placeholder added for future email verification.

---

## 🚧 Work in Progress
- Authentication flow is **half implemented**:
  - Registration is functional.
  - OTP sending and login routes are placeholders.
- Full auth (login, OTP verification, token handling) will be completed in the next commit.

---

## ✅ Summary
This commit sets up:
- Config files for DB and mail.
- Core project folders (endpoints, models, types, utils).
- Utilities for error handling, responses, password hashing, and email sending.
- Initial auth controller with registration logic.

Next commit will finalize the **authentication system** (login, OTP, token management).
