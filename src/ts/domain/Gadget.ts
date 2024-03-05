import Buyable from './Buyable';

export default class Gadget implements Buyable {
    amount: number;
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly characteristics: object,
        readonly countable: boolean = true,
    ) { 
        this.amount = 1
    }
}
