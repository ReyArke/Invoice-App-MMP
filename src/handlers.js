import { productSideBar } from "./selectors.js";

export const manageInventoryBtnHandler = () => {
  productSideBar.classList.remove("translate-x-full");
  productSideBar.classList.add("duration-300");
};

export const closeSideBarBtnHandler = () => {
  productSideBar.classList.add("translate-x-full");
};

export const checkoutHandler = () => {
  console.log("check");
  window.print();
};
