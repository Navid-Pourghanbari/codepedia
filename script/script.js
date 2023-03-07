const btnFullScreen = document.querySelector(`.section-content__btn--full`);
const btnCloseContent = document.querySelector(`.section-content__btn--close`);
const overlay = document.querySelector(`.overlay`);
const content = document.querySelector(`.section-content`);
const bgImage = document.querySelector(".main__bg");
const btnNext = document.querySelector(".bg-switch__next");
const btnBack = document.querySelector(".bg-switch__previous");
const btnRandom = document.querySelector(".bg-switch__random");
const navBarItem = document.querySelectorAll(`.nav-bar__item`);
const navLinks = document.querySelectorAll(`.nav-bar__links`);
const navLinksContainer = document.querySelectorAll(
  `.nav-bar__links-container`
);

let btnState = 0;
const randomNumber = () => Math.trunc(Math.random() * 3) + 1;

let imgNumber = randomNumber();

const changeIMG = function () {
  bgImage.style.backgroundImage = `url(img/bg/bg${imgNumber}.jpg)`;
};

changeIMG();

btnNext.addEventListener(`click`, () => {
  imgNumber++;
  if (imgNumber <= 3) {
    changeIMG();
  } else {
    imgNumber = 1;
    changeIMG();
  }
});

btnBack.addEventListener(`click`, () => {
  imgNumber--;
  if (imgNumber >= 1) {
    changeIMG();
  } else {
    imgNumber = 3;
    changeIMG();
  }
});

btnRandom.addEventListener(`click`, () => {
  imgNumber = randomNumber();
  changeIMG();
});

for (let i = 0; i < navBarItem.length; i++) {
  navBarItem[i].addEventListener(`mouseover`, () => {
    navLinksContainer[i].classList.toggle(`u-slide`);
    for (let b = 0; b < navLinksContainer.length; b++) {
      if (i !== b) {
        navLinksContainer[b].classList.remove(`u-slide`);
      }
    }
  });
}

bgImage.addEventListener(`click`, () => {
  for (let i = 0; i < navLinksContainer.length; i++) {
    navLinksContainer[i].classList.remove(`u-slide`);
  }
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener(`click`, () => {
    overlay.classList.toggle(`hidden`);
    content.classList.toggle(`hidden`);
  });
}
overlay.addEventListener(`click`, () => {
  overlay.classList.add(`hidden`);
  content.classList.add(`hidden`);
});

btnCloseContent.addEventListener(`click`, () => {
  overlay.classList.add(`hidden`);
  content.classList.add(`hidden`);
});
btnFullScreen.addEventListener(`click`, () => {
  if (btnState === 0) {
    btnState += 1;
    // document.querySelector(`.main-header`).style.display = `none`;
    content.classList.add(`u-fullscreen`);
  } else {
    btnState = 0;
    // document.querySelector(`.main-header`).style.display = `block`;
    content.classList.remove(`u-fullscreen`);
  }

  // content.classList.toggle(`u-fullscreen`);
});
