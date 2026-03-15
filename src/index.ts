import { type Category } from "./model/category.js";
import { type Product } from "./model/product.js";
import { Cart } from "./model/cart.js";


const electronics: Category = {
  id: 1,
  name: "Eletrônicos"
};


const notebook: Product = {
  id: 1,
  name: "Asus Vivobook X515MA 16GB RAM 512GB SSD",
  price: 3500,
  category: electronics
};

const mouse: Product = {
  id: 2,
  name: "Mouse Gamer Redragon M711",
  price: 150,
  category: electronics
};


const cart = new Cart();

cart.addItem(notebook, 1);
cart.addItem(mouse, 3); 


console.log(`Total de itens: ${cart.getTotalItems()}`);
console.log(`Preço final: R$ ${cart.getFinalPrice()}`);