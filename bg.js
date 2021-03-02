const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add(`bgImage`);
    body.prepend(image);
} //appendchild 안 쓰고 prepend 쓴 이유는?

function genRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init () {
    const randomnumber = genRandom()
    paintImage(randomnumber);

}

init();

// 자바스크립트엔 math라는 모듈있음
// 1~5사이의 배경 랜덤추출시
// Math.random()*5
// Math.floor(Math.random()*3);