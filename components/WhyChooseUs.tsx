export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#1455F5] py-32 overflow-hidden">

      {/* DECORATIVE CIRCLES (BACKGROUND) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full border border-white" />
        <div className="absolute left-1/2 bottom-[-300px] w-[600px] h-[600px] rounded-full border border-white" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-8">

        {/* SECTION TITLE */}
        <h2 className="text-center text-white text-[48px] font-medium mb-20">
          Why Choose Us?
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/30">

          {/* ROW 1 */}

          <Feature
            title="Streamlined Athlete Enrollment"
            desc="Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences."
            borderRight
          />

          <Feature
            title="Comprehensive Panel Creation"
            desc="Build and manage judge panels effortlessly—assign roles and responsibilities to ensure fair and consistent evaluations."
            borderRight
          />

          <Feature
            title="Seamless Multi-Level Management"
            desc="With robust features tailored for L1, L2, and L3, our platform integrates administrative tasks, competition oversight."
          />

          {/* ROW DIVIDER */}
          <div className="col-span-3 border-t border-white/30" />

          {/* ROW 2 */}

          <Feature
            title="Dynamic Event & Result Tracking"
            desc="Log and track thousands of events in real time, providing clear insights and analytics to help you monitor progress and celebrate success."
            borderRight
          />

          <Feature
            title="Secure and Efficient Workflows"
            desc="From locking enrollments to adjusting marks, our software ensures data integrity and a secure workflow."
            borderRight
          />

          <Feature
            title="User-Friendly Interface & Dedicated Support"
            desc="Our software is designed to adapt to your specific championship needs, ensuring a smooth experience from setup to execution."
          />

        </div>
      </div>
    </section>
  );
}

/* FEATURE CARD */
function Feature({
  title,
  desc,
  borderRight,
}: {
  title: string;
  desc: string;
  borderRight?: boolean;
}) {
  return (
    <div
      className={`px-10 py-14 text-white ${
        borderRight ? "border-r border-white/30" : ""
      }`}
    >
      <h3 className="text-[26px] font-medium leading-snug mb-4">
        {title}
      </h3>
      <p className="text-white/90 leading-[26px] text-[16px]">
        {desc}
      </p>
    </div>
  );
}
