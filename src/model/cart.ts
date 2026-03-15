import { type Product } from './product.js';

export interface CartItem {
    product: Product;
    quantity: number;
}

export class Cart {
    public items: CartItem[] = [];

    // Desafio 1: Adicionar item com .some()
    addItem(product: Product, quantity: number): void {
        const itemJaExiste = this.items.some(item => item.product.id === product.id);

        if (itemJaExiste) {
            const itemEncontrado = this.items.find(item => item.product.id === product.id);
            if (itemEncontrado) {
                itemEncontrado.quantity += quantity;
            }
        } else {
            this.items.push({ product, quantity });
        }
    }

    // Desafio 2: Total de itens com .reduce()
    getTotalItems(): number {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Desafio 3: Preço final com .reduce()
    getFinalPrice(): number {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
}