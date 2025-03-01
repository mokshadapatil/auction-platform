import React, { useState, useEffect } from "react";

const Auction = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetchAuctions();
  }, []);

  const fetchAuctions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auctions");
      const data = await response.json();
      setAuctions(data);
    } catch (error) {
      console.error("Error fetching auctions:", error);
    }
  };

  const deleteAuction = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/auctions/${id}`, { method: "DELETE" });
      setAuctions(auctions.filter((auction) => auction._id !== id));
    } catch (error) {
      console.error("Error deleting auction:", error);
    }
  };

  const editAuction = async (id, updatedDetails) => {
    try {
      const response = await fetch(`http://localhost:5000/api/auctions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedDetails),
      });
      const updatedAuction = await response.json();
      setAuctions(auctions.map((auction) => (auction._id === id ? updatedAuction : auction)));
    } catch (error) {
      console.error("Error editing auction:", error);
    }
  };

  return (
    <div>
      <h1>Auction List</h1>
      <ul>
        {auctions.map((auction) => (
          <li key={auction._id}>
            <p>{auction.title}</p>
            <button onClick={() => deleteAuction(auction._id)}>Delete</button>
            <button onClick={() => editAuction(auction._id, { title: "Updated Title" })}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Auction;
