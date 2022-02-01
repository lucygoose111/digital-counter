const counter = document.getElementById("counter");
const countUpBtn = document.getElementById("count-up");
const countDownBtn = document.getElementById("count-down");
const clearBtn = document.getElementById("clear");
const autoCountUpBtn = document.getElementById("auto-count-up");
const autoCountDownBtn = document.getElementById("auto-count-down");

let settings = {
  autoCountTime: 500,
  fontFamily: "Arial",
};

clearBtn.addEventListener("click", () => {
  if (counter.value !== "") {
    counter.value = "";
  } else {
    alert("Cannot clear when its empty");
  }
});

countUpBtn.addEventListener("click", () => {
  countUp();
});

countDownBtn.addEventListener("click", () => {
  countDown();
});

autoCountUpBtn.addEventListener("click", () => {
  autoCountUp();
});

// autoCountDownBtn.addEventListener("click", () => {
//   autoCountDown();
// });
function changeNumber(number) {
  counter.value += number;
}

function countUp() {
  if (counter.value === "") {
    counter.value = "1";
    return;
  }

  let number = parseInt(counter.value);
  number = number + 1;
  counter.value = number;
}

function countDown() {
  if (counter.value === "") {
    counter.value = "-1";
    return;
  }

  let number = parseInt(counter.value);
  number = number - 1;
  counter.value = number;
}

function autoCountUp() {
  setInterval(() => {
    countUp();
  }, settings.autoCountTime);
}

// function autoCountDown() {
//   while (true) {
//     setTimeout(() => {
//       countDown();
//     }, 500);
//   }
// }
