export default function Features() {
  return (
    <section className="bg-primary text-white py-32">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center">
          Why Choose Us?
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-12 text-sm">
          {[
            "Streamlined Athlete Enrollment",
            "Comprehensive Panel Creation",
            "Seamless Multi-Level Management",
            "Dynamic Event & Result Tracking",
            "Secure and Efficient Workflows",
            "User-Friendly Interface & Support",
          ].map((item) => (
            <div key={item}>
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="mt-2 text-blue-100">
                Designed to handle championship workflows efficiently.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
