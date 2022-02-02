const counter = document.getElementById("counter");
const counter2 = document.querySelector("#counter2");
const countUpBtn = document.getElementById("count-up");
const countDownBtn = document.getElementById("count-down");
const clearBtn = document.getElementById("clear");
const autoCountUpBtn = document.getElementById("auto-count-up");
const autoCountDownBtn = document.getElementById("auto-count-down");
const fontSelect = document.getElementById("font-select");
const autoCountTimeEle = document.getElementById("auto-count-speed");
const btnCountContainer = document.getElementById("btn-count-con");

let countingUp = null;
let countingDown = null;
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

fontSelect.addEventListener("change", () => {
  let fontName = fontSelect.options[fontSelect.selectedIndex].text.replace(
    /\s/g,
    "-"
  );
  counter.style.fontFamily = fontName;
});

countUpBtn.addEventListener("click", () => {
  countUp();
});

countDownBtn.addEventListener("click", () => {
  countDown();
});

autoCountUpBtn.addEventListener("click", () => {
  autoCountUp();
  autoCountUpBtn.style.display = "none";
  let stopCountBtn = document.createElement("button");
  stopCountBtn.innerHTML = "Stop counting up";
  stopCountBtn.onclick = () => {
    stopCount("up");
    stopCountBtn.remove();
    autoCountUpBtn.style.display = "block";
  };
  btnCountContainer.appendChild(stopCountBtn);
});

autoCountDownBtn.addEventListener("click", () => {
  autoCountDown();
  autoCountDownBtn.style.display = "none";
  let stopCountBtn = document.createElement("button");
  stopCountBtn.innerHTML = "Stop counting down";
  btnCountContainer.appendChild(stopCountBtn);
  stopCountBtn.onclick = () => {
    stopCount("down");
    stopCountBtn.remove();
    autoCountDownBtn.style.display = "block";
  };
});

autoCountTimeEle.addEventListener("change", () => {
  settings.autoCountTime = autoCountTimeEle.value;
  console.log(settings.autoCountTime);
});
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

function autoCountUp(countType) {
  countingUp = setInterval(countUp, settings.autoCountTime);
}

function autoCountDown() {
  countingDown = setInterval(() => {
    countDown();
  }, settings.autoCountTime);
}

function stopCount(direction) {
  switch (direction) {
    case "up":
      console.log("stop counting up");
      clearInterval(countingUp);
      countingUp = null;
      break;
    case "down":
      clearInterval(countingDown);
      countingDown = null;
      break;
  }
}
