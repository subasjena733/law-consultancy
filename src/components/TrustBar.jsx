function TrustBar() {
  return (
    <section className="bg-white py-10 shadow-md">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900">27+</h2>
          <p className="text-gray-600 mt-2">Years Experience</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-slate-900">1000+</h2>
          <p className="text-gray-600 mt-2">Cases Reviewed</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-slate-900">24/7</h2>
          <p className="text-gray-600 mt-2">Confidential Support</p>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;