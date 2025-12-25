export default function Hero() {
  return (
    <section className="relative bg-primary pt-44 pb-32 text-white text-center overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          The World's First Yogasana <br />
          Championship{" "}
          <span className="relative inline-block">
            Software
            <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-orange-400" />
          </span>
        </h1>

        <p className="mt-6 text-blue-100 max-w-3xl mx-auto">
          Experience the future of competition management with Yogasana Bharat—
          a cutting-edge platform designed to streamline every aspect of your championship.
        </p>

        <button className="mt-8 bg-white text-primary px-8 py-3 rounded-full font-medium">
          Get start for free
        </button>

      </div>
    </section>
  );
}
