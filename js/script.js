// Initial time declaration
let inTime = (+new Date(2024, 1, 10, 0, 0, 0) - new Date().getTime()) / 1000; // time stamp in seconds

let time =
  inTime <= 0
    ? (+new Date(localStorage.date) - new Date().getTime()) / 1000
    : inTime;
time = Math.trunc(time);
let sec, min, day, hour;

// Count down functionality
const countDown = () => {
  if (time === undefined || time < 0) {
    // If countdown reaches zero, update launch time to the next 15 days
    const date = new Date();
    date.setDate(date.getDate() + 15);
    localStorage.date = date;
    time = (+new Date(localStorage.date) - new Date().getTime()) / 1000;
    time = Math.trunc(time);
  }

  // Declaring to check for differences
  const newMin = min;
  const newDay = day;
  const newHour = hour;

  // Set sec,min, hour, and Day units
  sec = String(time % 60).padStart(2, 0);
  min = String(Math.trunc(time / 60) % 60).padStart(2, 0);
  hour = String(Math.trunc(time / (60 * 60)) % 24).padStart(2, 0);
  day = String(Math.trunc(time / (60 * 60 * 24))).padStart(2, 0);

  // To show all the count unit on load
  if (!newHour) {
    animate("min", min);
    animate("day", day);
    animate("hour", hour);
  }

  // Animate if there is a differnce
  if (newMin !== min && newMin) {
    animate("min", min);
  }
  if (newDay !== day && newDay) {
    animate("day", day);
  }
  if (newHour !== hour && newHour) {
    animate("hour", hour);
  }
  animate("sec", sec);

  time--;
};

countDown(); // To start immediately without any delay
setInterval(countDown, 1000);

// Animation functionality
function animate(unit, value) {
  document.querySelector(
    `.time__count--${unit} .count-inner--f1`
  ).style.animation = "flip-1 1s linear";
  document.querySelector(
    `.time__count--${unit} .count-inner--f2`
  ).style.animation = "flip-2 1s linear";
  document.querySelector(
    `.time__count--${unit} .count-inner--n1 span`
  ).textContent = value;
  document.querySelector(
    `.time__count--${unit} .count-inner--f2 span`
  ).textContent = value;

  setTimeout(() => {
    document.querySelector(
      `.time__count--${unit} .count-inner--f1 span`
    ).textContent = value;
  }, 500);

  setTimeout(() => {
    document.querySelector(
      `.time__count--${unit} .count-inner--f1`
    ).style.animation = "none";
    document.querySelector(
      `.time__count--${unit} .count-inner--f2`
    ).style.animation = "none";
    document.querySelector(
      `.time__count--${unit} .count-inner--n2 span`
    ).textContent = value;
  }, 950);
}
