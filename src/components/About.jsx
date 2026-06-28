function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <img
          src="/judge1.jpeg"
          alt="Advocate Bandana Kar"
          className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
        />

        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Why Clients Trust Us
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Advocate Bandana Kar is an Ex-District judge with 27 years of
            combined experience as a lawyer and judge. Based in
            Bhubaneswar, Odisha, she provides trusted legal consultation
            in civil, criminal and family law matters.
          </p>

          <ul className="mt-8 space-y-4">
            <li>✔ 27 Years Legal Experience</li>
            <li>✔ Judicial Insight</li>
            <li>✔ Confidential Consultation</li>
            <li>✔ Strategic Legal Guidance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;