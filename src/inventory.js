import {
  newProductName,
  newProductPrice,
  productCardTemplate,
  productGroup,
  productSelect,
} from "./selectors.js";

import { v4 as uuidv4 } from "uuid";
import { products } from "./states.js";

export const addNewProductBtnHandler = () => {
  const createId = uuidv4();
  // console.log("addNewProduct");
  productGroup.append(
    createProductCard(
      createId,
      newProductName.value,
      newProductPrice.valueAsNumber
    )
  );

  productSelect.append(
    new Option(
      `${newProductName.value} - ${newProductPrice.valueAsNumber}`,
      createId
    )
  );

  products.push;

  newProductName.value = null;

  newProductPrice.value = null;
};

export const productRender = (products) => {
  products.forEach(({ name, price, id }) => {
    productGroup.append(createProductCard(name, price, id));
    productSelect.append(new Option(`${name} - ${price}`, id));
  });
};
export const createProductCard = (name, price, id) => {
  const productCard = productCardTemplate.content.cloneNode(true);

  const currentProductCard = productCard.querySelector(".product-card");

  const productName = productCard.querySelector(".product-name");

  const productPrice = productCard.querySelector(".product-price");

  currentProductCard.id = id;

  productName.innerText = name;

  productPrice.innerText = price;

  console.log(productCard);

  return productCard;
};


