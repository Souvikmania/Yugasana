export default function StepIntro() {
  return (
    <section className="relative overflow-hidden">

      {/* BLUE SECTION */}
      <div className="relative bg-[#1455F5] h-[260px]">

        {/* DECORATIVE RINGS */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute left-1/2 top-[-120px] w-[500px] h-[500px] rounded-full border border-white" />
          <div className="absolute left-1/2 top-[-60px] w-[350px] h-[350px] rounded-full border border-white" />
        </div>

        {/* INVERTED WAVE (WHITE CUT) */}
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-[160px]"
        >
          <path
            d="
              M0,80
              C240,0 480,140 720,100
              C960,60 1200,0 1440,80
              L1440,160
              L0,160
              Z
            "
            fill="#ffffff"
          />
        </svg>

      </div>

      {/* WHITE SECTION */}
      <div className="bg-white pt-32 pb-20 text-center">
        <h2 className="text-[48px] font-bold text-black">
          A Step-by-Step Guide
        </h2>
      </div>

    </section>
  );
}
