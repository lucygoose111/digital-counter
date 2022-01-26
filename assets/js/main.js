const counter = document.getElementById('counter');
const countUpBtn = document.getElementById('count-up');
const countDownBtn = document.getElementById('count-down');
const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click',()=>{

    if (counter.value !== '') {

        counter.value = '';

    }

    else {

        alert("Cannot clear when its empty")

    }

});

countUpBtn.addEventListener('click',()=>{

    countUp();

});

countDownBtn.addEventListener('click',()=>{

    countDown();

});

function changeNumber(number) {

    counter.value += number;

}

function countUp() {

    if (counter.value === '') {counter.value = '1';return;}

    let number = parseInt(counter.value);
    number = number + 1;
    counter.value = number.toString();

}

function countDown() {

    if (counter.value === '') {counter.value = '-1';return;}

    let number = parseInt(counter.value);
    number = number - 1;
    counter.value = number;

}