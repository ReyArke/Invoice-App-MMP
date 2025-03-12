import { productRender } from "./inventory.js";
import { productSideBar } from "./selectors.js";
import { products } from "./states.js";

const initialRender = () => {
  //productSideBar open
  productSideBar.classList.remove("translate-x-full");

  productRender(products);
};

export default initialRender;
