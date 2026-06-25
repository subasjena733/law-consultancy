function Testimonials() {
  const reviews = [
    {
      text: "Excellent legal guidance with practical solutions. Highly professional and trustworthy.",
      name: "Client A"
    },
    {
      text: "Clear advice and honest consultation helped us avoid costly litigation.",
      name: "Client B"
    },
    {
      text: "Deep legal knowledge and exceptional judicial insight.",
      name: "Client C"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-2xl">
              <p className="text-gray-300 leading-relaxed">
                "{review.text}"
              </p>

              <h4 className="mt-6 text-yellow-400 font-bold">
                — {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;