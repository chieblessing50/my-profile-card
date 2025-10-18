// Wait until the entire page (DOM) is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the element where the current time will be displayed
  const timeDisplay = document.getElementById("current-time");

  // Function to update the current time in milliseconds
  function updateTime() {
    const currentTime = Date.now(); // gets time in milliseconds
    timeDisplay.textContent = currentTime; //show on the page
  }

  // Update the time immediately on page load
  updateTime();

  // Continue updating the time every 1 second (1000 milliseconds)
  setInterval(updateTime, 1000);
});
