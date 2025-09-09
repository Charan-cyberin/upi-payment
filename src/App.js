import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");

  const handleNext = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Your UPI ID here
    const upiID = "9999900000@ibl";

    const upiLink = `upi://pay?pa=moulimahesh02@okaxis&pn=Merchant%20Name&am=${amount}&cu=INR&tn=Payment`;
    window.location.href = upiLink;
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      backgroundColor: "white", 
      flexDirection: "column" 
    }}>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          padding: "12px",
          fontSize: "18px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "250px",
          marginBottom: "15px",
        }}
      />
      <button
        onClick={handleNext}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px 20px",
          fontSize: "18px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width: "250px",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
