export default function StepFour() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT VISUAL */}
        <div className="relative">

          {/* GRADIENT CONTAINER */}
          <div className="relative rounded-[28px] p-10 bg-gradient-to-br from-indigo-500 via-purple-400 to-blue-300">

            {/* INNER WHITE MOCK */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-xl">

              {/* TOP BAR */}
              <div className="h-6 w-full bg-gray-200 rounded mb-6" />

              {/* GRID ELEMENTS */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="h-6 bg-gray-200 rounded" />
                <div className="h-6 bg-gray-200 rounded" />
                <div className="h-6 bg-gray-200 rounded" />
                <div className="h-6 bg-gray-200 rounded" />
                <div className="h-6 bg-gray-200 rounded" />
                <div className="h-6 bg-gray-200 rounded" />
              </div>

              {/* CONTENT BLOCKS */}
              <div className="space-y-4">
                <div className="h-20 bg-gray-200 rounded" />
                <div className="h-16 bg-gray-200 rounded" />
                <div className="h-14 bg-gray-200 rounded" />
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* STEP PILL */}
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Step 4
          </span>

          {/* HEADING */}
          <h2 className="text-[42px] leading-[52px] font-bold text-gray-900 mb-6">
            Save, manage, group, tag and <br />
            search your testimonials
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-[17px] leading-[28px] max-w-[520px] mb-8">
            Our innovative solutions provide a clear direction, helping you streamline
            workflows, organize tasks effortlessly, & achieve unparalleled efficiency.
            Let Zenify Navigator be your compass on the journey to intelligent & effective
          </p>

          {/* CHECK LIST */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3">
              <Check />
              <span>Create a form in 30 seconds. Share or embed it anywhere</span>
            </li>
            <li className="flex items-center gap-3">
              <Check />
              <span>Collect video and text testimonials</span>
            </li>
            <li className="flex items-center gap-3">
              <Check />
              <span>Import testimonials from 20+ social & review platforms</span>
            </li>
          </ul>

          {/* CTA */}
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full text-[16px] font-medium">
            Sign up for free
          </button>
        </div>

      </div>
    </section>
  );
}

/* CHECK ICON */
function Check() {
  return (
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm">
      ✓
    </span>
  );
}
