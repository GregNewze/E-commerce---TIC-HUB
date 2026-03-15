import type { Category } from "./category.js"

export interface Product {
  id: number
  name: string
  price: number
  category: Category
}