import Image from "next/image";

const testimonials = [
  {
    name: "Mahmud Tamvir",
    role: "Co-Founder of Huge icons",
    image: "/avatars/avatar1.jpg", // 🔴 CHANGE IMAGE
    text: "I had a fantastic experience shopping here! The site is easy to navigate, and the customer service is outstanding. My order arrived swiftly, and the product quality was even better than I expected. Highly recommend!",
  },
  {
    name: "Mahmud Tamvir",
    role: "Co-Founder of Huge icons",
    image: "/avatars/avatar2.jpg", // 🔴 CHANGE IMAGE
    text: "I had a fantastic experience shopping here! The site is easy to navigate, and the customer service is outstanding. My order arrived swiftly, and the product quality was even better than I expected. Highly recommend!",
  },
  {
    name: "Mahmud Tamvir",
    role: "Co-Founder of Huge icons",
    image: "/avatars/avatar3.jpg", // 🔴 CHANGE IMAGE
    text: "I had a fantastic experience shopping here! The site is easy to navigate, and the customer service is outstanding. My order arrived swiftly, and the product quality was even better than I expected. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="text-[44px] leading-[56px] font-bold text-gray-900">
            What Yogasana lovers say using <br />
            <span className="relative inline-block">
              our Software
              <span className="absolute left-0 -bottom-2 w-full h-[4px] bg-orange-400 rotate-[-2deg]" />
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-[18px] leading-[30px]">
            Discover firsthand accounts from organizers, athletes, and judges who
            have experienced the seamless excellence of our platform. Their
            stories showcase how we’ve transformed championship management and
            elevated competitive success.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-8 bg-white"
            >
              {/* STARS */}
              <div className="flex gap-1 text-orange-400 text-lg">
                ★★★★★
              </div>

              {/* TEXT */}
              <p className="mt-6 text-gray-600 leading-[28px]">
                {t.text}
              </p>

              {/* USER */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
