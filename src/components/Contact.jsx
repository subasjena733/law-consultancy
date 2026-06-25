import { useState } from "react";
function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
    `Consultation Request

    Name: ${formData.name}
    Phone: ${formData.phone}
    Legal Issue: ${formData.issue}`;

    const whatsappUrl = `https://wa.me/917064662492?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Book a Consultation
        </h2>

        <p className="mt-4 text-gray-600">
          Office: Bhubaneswar, Odisha | Phone: +91XXXXXXXXXX
        </p>
        
        <div className="mt-8 text-gray-700 space-y-2">
            <p>Email: example@gmail.com</p>
            <p>WhatsApp: +91XXXXXXXXXX</p>
          </div>
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl border"
          />

          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            placeholder="Describe Your Legal Issue"
            className="w-full p-4 rounded-xl border h-40"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;