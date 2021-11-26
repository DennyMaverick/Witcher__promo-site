import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import renderTabs from "./renderTabs.js";

burgerMenu(
  '.burger',
  '.navigation__list',
  'burger--active',
  'navigation__list--active'
)

tabs({
  selectorTabsButtons: '.tabs__btn',
  activeClassButton: 'tabs__btn--active',
  selectorTabsElement: '.tabs__item',
  activeClassTab: 'tabs__item--active',
  callback: renderTabs
});

renderTabs();