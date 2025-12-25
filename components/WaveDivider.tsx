export default function WaveDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none">

      {/* SVG WAVE */}
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="w-full h-[160px]"
      >
        <path
          d="
            M0,80
            C240,140 480,20 720,60
            C960,100 1200,140 1440,60
            L1440,160
            L0,160
            Z
          "
          fill="#1455F5"
        />
      </svg>

    </div>
  );
}
