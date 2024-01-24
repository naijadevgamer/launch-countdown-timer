// const
let time = 86400 * 15; // seconds
let sec, min, day, hour;

// Count down functionality
setInterval(() => {
  const newMin = min;
  const newDay = day;
  const newHour = hour;

  sec = String(time % 60).padStart(2, 0);
  min = String(Math.trunc(time / 60) % 60).padStart(2, 0);
  hour = String(Math.trunc(time / (60 * 60)) % 24).padStart(2, 0);
  day = String(Math.trunc(time / (60 * 60 * 24))).padStart(2, 0);

  // animation
  if (newMin !== min && newMin !== undefined) {
    animate("min", min);
  }
  if (newDay !== day && newDay !== undefined) {
    animate("day", day);
  }
  if (newHour !== hour && newHour !== undefined) {
    animate("hour", hour);
  }
  animate("sec", sec);
  // console.log(`${day}: ${hour}: ${min}: ${sec}`);

  time--;
}, 1000);

// Animation function
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
