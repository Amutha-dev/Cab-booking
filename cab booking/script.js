document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const rideType = document.getElementById("rideType").value;
  
    const confirmation = document.getElementById("confirmation");
    confirmation.classList.remove("hidden");
  
    confirmation.innerHTML = `
      <strong>Booking Confirmed!</strong><br><br>
      🚖 <strong>From:</strong> ${pickup}<br>
      📍 <strong>To:</strong> ${drop}<br>
      📅 <strong>Date:</strong> ${date}<br>
      ⏰ <strong>Time:</strong> ${time}<br>
      🚗 <strong>Ride:</strong> ${rideType}
    `;
  
    this.reset();
  });
  