function Services() {
  const services = [
    {
      title: "Civil Law",
      desc: "Property disputes, contracts, recovery and civil litigation."
    },
    {
      title: "Criminal Law",
      desc: "Legal defense, bail matters and criminal case consultation."
    },
    {
      title: "Family Law",
      desc: "Divorce, child custody, maintenance and family disputes."
    }
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Practice Areas
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Expert legal guidance across multiple domains
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;