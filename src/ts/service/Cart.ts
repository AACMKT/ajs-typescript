import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (!this._items.find(good => good.id == item.id)) {
            this._items.push(item);
        }
        else {
            if (item.countable) {
                let index = this._items.indexOf(item)
                this._items[index].amount += 1;
            }
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(discount: number = 0): number {
        let total: number = 0;
        this._items.forEach(item => total += item.price*item.amount);
        total -= (total*discount)/100
        return total
    }

    removeItem(id: number): void {
        let item: Buyable | undefined = this._items.find(good => good.id == id)
        if (item) {
            const index = this._items.indexOf(item);
            if (item.countable) {
                if (this._items[index].amount > 1) {
                    this._items[index].amount -= 1
                }
                else {
                    this._items = this._items.filter(item => item.id !== id)
                }
                
            }
            else {
                this._items = this._items.filter(item => item.id !== id)
            }
            
        }
    }
}