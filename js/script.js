const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation__list");
burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("navigation__list--active");
});

const tabsBtns = document.querySelectorAll(".tabs__btn");

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const tabsContents = document.querySelectorAll(".tabs__item");
    tabsBtns.forEach((btn) => {
      btn.classList.remove("tabs__btn--active");
    });
    const currentContentId = "#" + event.target.dataset.type;

    const currentContent = document.querySelector(currentContentId);
    tabsContents.forEach((content) => {
      content.classList.remove("tabs__item--active");
    });
    currentContent.classList.add("tabs__item--active");
    this.classList.add("tabs__btn--active");
  });
});
