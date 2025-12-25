export default function FinalCTA() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* CTA CARD */}
        <div className="relative overflow-hidden rounded-3xl bg-[#1658F5] px-6 py-24 text-center shadow-xl">

          {/* DECORATIVE CURVES */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute -top-24 -left-24 w-[500px] h-[500px] border border-white rounded-full" />
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] border border-white rounded-full" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-[900px] mx-auto text-white">

            {/* SMALL BADGE */}
            <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full border border-white/30">
              Testimonials Made Easy
            </span>

            {/* HEADING */}
            <h2 className="text-[42px] leading-[54px] font-bold">
              Experience the Impact of Our Software in <br />
              your Next Yogasana Championship.
            </h2>

            {/* SUBTEXT */}
            <p className="mt-6 text-white/80 text-[18px] leading-[30px]">
              Host Your Championships Locally or Globally – We Provide <br />
              All the Tools You Need.
            </p>

            {/* CTA BUTTON */}
            <button className="mt-10 bg-white text-blue-600 px-8 py-3 rounded-full font-medium text-[16px] hover:bg-gray-100 transition">
              Get start for free
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
