const SHOW_SECONDS = false;

function updateClock(showSeconds = false) {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = showSeconds
    ? `:${now.getSeconds().toString().padStart(2, "0")}`
    : "";
  const timeString = `${hours}:${minutes}${seconds}`;

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate().toString().padStart(2, "0");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[now.getMonth()];
  const year = now.getFullYear() - 2000;

  const dateString = `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;

  document.getElementById("time").textContent = timeString;
  document.getElementById("date").textContent = dateString;
}

// Update the clock every second
setInterval(()=>updateClock(SHOW_SECONDS), 1000);

// Initial update
updateClock(SHOW_SECONDS);
