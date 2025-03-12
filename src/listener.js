import {
  checkoutHandler,
  closeSideBarBtnHandler,
  manageInventoryBtnHandler,
} from "./handlers.js";

import { addNewProductBtnHandler } from "./inventory.js";
import { createRecordFormHandler, recordGroupHandler } from "./record.js";

import {
  addNewProductBtn,
  checkout,
  closeSideBarBtn,
  createRecordForm,
  manageInventoryBtn,
  recordGroup,
} from "./selectors.js";

const listener = () => {
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  closeSideBarBtn.addEventListener("click", closeSideBarBtnHandler);
  addNewProductBtn.addEventListener("click", addNewProductBtnHandler);
  createRecordForm.addEventListener("submit", createRecordFormHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
  checkout.addEventListener("click", checkoutHandler);
};
export default listener;

