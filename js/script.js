console.log("hello");

// setInterval()

let time = 86400 * 15; // seconds

// setInterval(() => {
//   const sec = String(time % 60).padStart(2, 0);
//   const min = String(Math.trunc(time / 60) % 60).padStart(2, 0);
//   const hour = String(Math.trunc(time / (60 * 60)) % 24).padStart(2, 0);
//   const day = String(Math.trunc(time / (60 * 60 * 24))).padStart(2, 0);
//   console.log(`${day}: ${hour}: ${min}: ${sec}`);
//   time--;
// }, 1000);

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

document
  .querySelector(".time__count--sec .count-inner--n2")
  .addEventListener("click", () => {
    labelFlip1.style.animation = "flip-1 1s linear";
    labelFlip2.style.animation = "flip-2 1s linear";
    setTimeout(() => {
      labelFlip1.style.animation = "none";
      labelFlip2.style.animation = "none";
    }, 1000);
  });
