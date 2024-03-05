import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly country: string,
        readonly duratation: number,
        readonly genres?: Array<string>,
        readonly slogan?: string,
        readonly nameEng?: string,
        readonly filmingFormat?: string,
        readonly countable: boolean = false,
        readonly amount: number = 1,
    ) { }
}
