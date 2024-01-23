const labelFlip1 = document.querySelector(".time__count--sec .count-inner--f1");
const labelFlip2 = document.querySelector(".time__count--sec .count-inner--f2");
const labelSecOutput1 = document.querySelector(
  ".time__count--sec .count-inner--n1 span"
);
const labelSecOutput2 = document.querySelector(
  ".time__count--sec .count-inner--n2 span"
);
const labelMinOutput1 = document.querySelector(
  ".time__count--min .count-inner--n1 span"
);
const labelMinOutput2 = document.querySelector(
  ".time__count--sec .count-inner--n2 span"
);
const labelHourOutput1 = document.querySelector(
  ".time__count--hour .count-inner--n1 span"
);
const labelHourOutput2 = document.querySelector(
  ".time__count--hour .count-inner--n2 span"
);
const labelDayOutput1 = document.querySelector(
  ".time__count--day .count-inner--n1 span"
);
const labelDayOutput2 = document.querySelector(
  ".time__count--day .count-inner--n2 span"
);

// setInterval()
let time = 86400 * 15; // seconds
let sec;
let min;
let hour;
let day;

setInterval(() => {
  const newMin = min;
  const newDay = day;
  const newHour = hour;

  sec = String(time % 60).padStart(2, 0);
  min = String(Math.trunc(time / 60) % 60).padStart(2, 0);
  hour = String(Math.trunc(time / (60 * 60)) % 24).padStart(2, 0);
  day = String(Math.trunc(time / (60 * 60 * 24))).padStart(2, 0);

  console.log(`${day}: ${hour}: ${min}: ${sec}`);
  // animation
  animate("sec", sec);
  time--;
}, 1000);

// Animation function

function animate(unit, value) {
  // animation
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
