export default function Templates() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div>
          <span className="text-sm bg-blue-100 text-primary px-3 py-1 rounded-full">
            Step 3
          </span>
          <h3 className="mt-4 text-3xl font-bold">
            Let your customers share what they love
          </h3>
          <p className="mt-4 text-textGray">
            Collect testimonials and feedback with ease.
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full">
            Sign up for free
          </button>
        </div>

        {/* Empty image placeholder */}
        <div className="bg-gradient-to-br from-teal-200 to-blue-200 rounded-2xl h-[380px]" />
      </div>
    </section>
  );
}
