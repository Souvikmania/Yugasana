import DashboardPreview from "@/components/DashboardPreview";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import WaveDivider from "@/components/WaveDivider";
import StepIntro from "@/components/StepIntro";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import FinalCTA from "@/components/FinalCTA";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* NAVBAR */}
      <header className="absolute top-6 w-full z-50">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="bg-white rounded-full h-[64px] flex items-center justify-between px-8 shadow-md">
            <div className="text-xl font-medium text-gray-800">YuGa</div>

            <nav className="hidden md:flex gap-10 text-[15px] text-gray-700">
              <span>Features</span>
              <span>Solutions</span>
              <span>About</span>
              <span>Pricing</span>
            </nav>

            <div className="flex gap-3">
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
                Talk To Sales
              </button>
              <button className="border border-gray-400 px-5 py-2 rounded-full text-sm">
                Get Started For Free
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[900px] bg-[#0F4CFF] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-[1100px] px-6 text-center">
          <h1 className="text-[56px] leading-[64px] font-bold tracking-tight">
            The World's First Yogasana <br />
            Championship{" "}
            <span className="relative inline-block">
              Software
              <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-orange-400 rotate-[-2deg]" />
            </span>
          </h1>

          <p className="mt-6 text-[18px] leading-[28px] text-blue-100 max-w-[780px] mx-auto">
            Experience the future of competition management with Yogasana Bharat—
            a cutting-edge platform designed to streamline every aspect of your championship.
          </p>

          <button className="mt-10 bg-white text-blue-700 px-8 py-3 rounded-full text-[16px] font-medium">
            Get start for free
          </button>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <div className="-mt-40 relative z-20">
        <DashboardPreview />
      </div>

      {/* STATS SECTION */}
      <Stats />
      <WaveDivider />
      <WhyChooseUs />
      <StepIntro />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      {/* FOOTER (ALWAYS LAST) */}
      <Footer />

    </main>
  );
}
