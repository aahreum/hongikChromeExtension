const BG_COLOR = "#14212c";
const gnbWrapEl = document.querySelector(".gnb-wrap");
const loginWrapEl = document.querySelector(".login-wrap");

const applyBgColor = (element) => {
  if (element) {
    element.style.backgroundColor = BG_COLOR;
  }
};

applyBgColor(gnbWrapEl || loginWrapEl);
