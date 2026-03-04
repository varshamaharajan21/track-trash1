import { useEffect, useState } from "react";
import axios from "axios";

function Bins() {

  const [bins, setBins] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bins")
      .then(res => setBins(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Bin Monitoring</h2>

      {bins.map(bin => (
        <div
          key={bin.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            color: bin.status === "full" ? "red" : "green"
          }}
        >
          <p>Bin ID: {bin.id}</p>
          <p>Fill Level: {bin.current_fill}%</p>
          <p>Status: {bin.status}</p>
        </div>
      ))}

    </div>
  );
}

export default Bins;