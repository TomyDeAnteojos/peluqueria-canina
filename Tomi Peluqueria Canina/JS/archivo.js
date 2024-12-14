function updateStatusButton() {
    const statusButton = document.getElementById("statusButton");
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();

    if (day >= 1 && day <= 6 && (hour > 9 || (hour === 9 && minute >= 0)) && (hour < 18 || (hour === 18 && minute === 0))) {
      statusButton.textContent = "Abierto (con turno)";
      statusButton.style.backgroundColor = "green";
      statusButton.style.color = "white";
    } else {
      statusButton.textContent = "Cerrado";
      statusButton.style.backgroundColor = "red";
      statusButton.style.color = "white";
    }
  }

  document.addEventListener("DOMContentLoaded", updateStatusButton);