import React, { useState } from "react";
import Segment from "../template/Segment";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <button
        onClick={() => setShowModal(true)}
        className="bg-sky-600 text-white px-6 py-3 rounded-lg shadow hover:bg-sky-700 transition"
      >
        Save Segment
      </button>

      {showModal && <Segment onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Dashboard;
