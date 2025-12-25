import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative bg-white py-40 overflow-hidden">

      {/* CURVED DASHED BACKGROUND PATH */}
      {/* ✏️ You can adjust the curve by editing the SVG path values */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 900"
        fill="none"
      >
        <path
          d="M750 0
             C 950 200, 300 350, 600 500
             C 900 650, 400 850, 700 1000"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeDasharray="6 8"
          opacity="0.6"
        />
      </svg>

      {/* FLOATING AVATARS */}
      {/* 👉 Replace image files inside /public/avatars/ */}
      <div className="absolute inset-0 pointer-events-none">

        {/* AVATAR 1 */}
        <div className="absolute top-20 left-24 w-16 h-16 rounded-full overflow-hidden">
          <Image src="/avatars/avatar1.jpg" alt="Avatar" fill className="object-cover" />
        </div>

        {/* AVATAR 2 */}
        <div className="absolute top-40 right-32 w-20 h-20 rounded-full overflow-hidden">
          <Image src="/avatars/avatar2.jpg" alt="Avatar" fill className="object-cover" />
        </div>

        {/* AVATAR 3 */}
        <div className="absolute bottom-40 left-40 w-14 h-14 rounded-full overflow-hidden">
          <Image src="/avatars/avatar3.jpg" alt="Avatar" fill className="object-cover" />
        </div>

        {/* AVATAR 4 */}
        <div className="absolute bottom-32 right-24 w-24 h-24 rounded-full overflow-hidden">
          <Image src="/avatars/avatar4.jpg" alt="Avatar" fill className="object-cover" />
        </div>

      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1100px] mx-auto px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[44px] leading-[56px] font-bold text-gray-900">
            <span className="relative inline-block">
              Championship Excellence,
              <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-orange-400" />
            </span>
            <br />
            <span className="inline-block bg-indigo-100 px-4 py-1 rounded-full mt-3">
              Proven by Numbers
            </span>
          </h2>
        </div>

        {/* QUOTE CARD */}
        <div className="mt-20 bg-indigo-100 rounded-3xl px-12 py-12 max-w-[850px] mx-auto text-center relative">
          <span className="absolute top-6 left-6 text-[64px] text-gray-400">“</span>

          <p className="text-[18px] leading-[30px] text-gray-700">
            Join the platform that’s transforming competition management—over
            <br />
            <span className="font-semibold">
              250 championships organized, 3000+ athletes empowered,
            </span>
            <br />
            and <span className="font-semibold">100,000+ events logged.</span>
            <br />
            Experience the future of Yogasana excellence today. Join now.
          </p>

          <span className="absolute bottom-6 right-6 text-[64px] text-gray-400">”</span>
        </div>

        {/* STATS BLOCKS */}
        {/* ✏️ You can change text/numbers here */}
        <div className="mt-32 space-y-28">

          {/* 250+ */}
          <div className="max-w-md">
            <h3 className="text-[40px] font-bold">
              <span className="relative inline-block">
                250+ Championships
                <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-orange-400" />
              </span>
              <br />Organized
            </h3>
            <p className="mt-4 text-gray-600">
              Our platform powers over 250 successful championships, delivering seamless
              event management and top-tier competition experiences.
            </p>
          </div>

          {/* 3,000+ */}
          <div className="max-w-md ml-auto">
            <h3 className="text-[40px] font-bold">
              <span className="relative inline-block">
                3,000+ Athletes
                <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-orange-400" />
              </span>
              <br />Empowered
            </h3>
            <p className="mt-4 text-gray-600">
              Over 3,000 athletes trust our system to manage and celebrate their achievements.
            </p>
          </div>

          {/* 100,000+ */}
          <div className="max-w-md">
            <h3 className="text-[40px] font-bold">
              <span className="relative inline-block">
                100,000+ Events
                <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-orange-400" />
              </span>
              <br />Logged
            </h3>
            <p className="mt-4 text-gray-600">
              Track and analyze more than 100,000 events with precision and confidence.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
