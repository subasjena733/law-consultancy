function Hero() {
  return (
    <section className="bg-slate-900 text-white min-h-screen flex items-center">
  <div className="max-w-6xl mx-auto px-6">
    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
      Expert Legal Guidance from a Retired Judge
    </h1>

    <p className="mt-6 text-xl text-gray-300 max-w-3xl">
      Justice A.K. Sharma offers trusted consultation in Civil,
      Criminal and Family Law with 27 years of combined judicial
      and legal experience.
    </p>

    <div className="mt-8 flex gap-4 flex-wrap">
      <button className="bg-yellow-500 text-black px-6 py-4 rounded-xl font-bold">
        Book Consultation
      </button>

      <div className="border border-gray-600 px-6 py-4 rounded-xl">
        Consultation Fee: ₹1500
      </div>
    </div>
  </div>
</section>
  );
}

export default Hero;