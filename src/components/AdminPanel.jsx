import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function AdminPanel() {

  const [stats, setStats] = useState({
    pending: 0,
    approved: 0,
    rejected: 0,
    avgRating: 0
  });
  const fetchStats = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${API_URL}/admin/stats`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await response.json();
    setStats(data);
  } catch (error) {
    console.error(error);
  }
};
  const [reviews, setReviews] = useState([]);

  const fetchPendingReviews = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/admin/reviews`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPendingReviews();
    fetchStats();
  }, []);

  const approveReview = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`${API_URL}/reviews/${id}/approve`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      fetchPendingReviews();
      fetchStats();
    } catch (error) {
      console.error(error);
    }
  };
  const rejectReview = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await fetch(`${API_URL}/reviews/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      fetchPendingReviews();
      fetchStats();
    } catch (error) {
      console.error(error);
    }
  };

  //Logout
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };


  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Admin Panel
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800 p-5 rounded-xl text-center">
              <p className="text-gray-400">Pending</p>
              <h2 className="text-3xl text-yellow-400 font-bold">
                {stats.pending}
              </h2>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl text-center">
              <p className="text-gray-400">Approved</p>
              <h2 className="text-3xl text-green-400 font-bold">
                {stats.approved}
              </h2>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl text-center">
              <p className="text-gray-400">Rejected</p>
              <h2 className="text-3xl text-red-400 font-bold">
                {stats.rejected}
              </h2>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl text-center">
              <p className="text-gray-400">Avg Rating</p>
              <h2 className="text-3xl text-white font-bold">
                {stats.avgRating}
              </h2>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold m-2"
          >
            Logout
          </button>
        </div>

        {reviews.length === 0 ? (
          <p className="text-gray-400">No pending reviews</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review._id}
              className="bg-slate-800 p-6 rounded-xl mb-6"
            >
              <h3 className="text-yellow-400 font-bold">
                {review.name}
              </h3>

              <p className="text-white mt-2">
                Rating: {review.rating}/5
              </p>

              <p className="text-gray-300 mt-2">
                {review.message}
              </p>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => approveReview(review._id)}
                  className="bg-green-500 px-4 py-2 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectReview(review._id)}
                  className="bg-red-500 px-4 py-2 rounded"
                >
                 Reject
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default AdminPanel;