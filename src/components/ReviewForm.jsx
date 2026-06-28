import { useState } from "react";
import { API_URL } from "../config";

function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage("Review submitted successfully!");

        setTimeout(() => {
          setResponseMessage("");
        }, 2000);

        setFormData({
          name: "",
          rating: "",
          message: ""
        });
      } else {
        setResponseMessage("Submission failed.");
        setTimeout(() => {
          setResponseMessage("");
        }, 2000);

      }
    } catch (error) {
      console.error(error);
      setResponseMessage("Server error.");

      setTimeout(() => {
        setResponseMessage("");
      }, 2000);

    }finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white">
          Submit Your Review
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 text-white"
            required
          />

          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 text-white"
            required
          >
            <option value="">Select Rating</option>
            <option value="1">★☆☆☆☆ (1 Star)</option>
            <option value="2">★★☆☆☆ (2 Stars)</option>
            <option value="3">★★★☆☆ (3 Stars)</option>
            <option value="4">★★★★☆ (4 Stars)</option>
            <option value="5">★★★★★ (5 Stars)</option>
          </select>

          <textarea
            name="message"
            placeholder="Write your review"
            rows="5"
            maxLength={300}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-800 text-white"
            required
          />
          
          <p className="text-sm text-gray-400 text-right">
            {formData.message.length}/300
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow-500 px-6 py-3 rounded-xl font-bold transition duration-150 active:scale-95 hover:brightness-110 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
           {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>

        {responseMessage && (
          <div className="
            fixed top-5 right-5
            bg-green-500 text-white
            px-6 py-3 rounded-lg shadow-lg z-50
          ">
            {responseMessage}
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewForm;