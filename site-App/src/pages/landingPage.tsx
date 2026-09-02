import CTA from "../components/landingPage/CTA";
import Features from "../components/landingPage/features";
import Footer from "../components/landingPage/footer";
import Hero from "../components/landingPage/hero";
import HowItWorks from "../components/landingPage/howItWorks";
import Navbar from "../components/landingPage/navbar"
// import OpportunityPreview from "../components/landingPage/opportunityPreview";
import Problem from "../components/landingPage/problem";
import Testimonial from "../components/landingPage/testimonial";
const LandingPage = () => {

    return (
        <div>
            <Navbar/>
            <main>
                <Hero/>
                <Problem/>
                <Features/>
                <HowItWorks/>
                {/* <OpportunityPreview/> */}
                <Testimonial/>
                <CTA/>
            </main>
            <Footer/>
        </div>

    )
}

export default LandingPage