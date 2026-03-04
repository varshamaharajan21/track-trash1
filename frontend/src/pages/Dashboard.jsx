import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [bins, setBins] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/analytics/bins")
      .then(res => setBins(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <p>Total Bins: {bins.total}</p>
      <p>Full Bins: {bins.full}</p>
      <p>Active Bins: {bins.active}</p>
      <p>Empty Bins: {bins.empty}</p>
    </div>
  );
}

export default Dashboard;