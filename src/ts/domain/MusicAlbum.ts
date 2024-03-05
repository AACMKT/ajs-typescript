import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly amount: number = 1,
        readonly countable: boolean = false,
    ) { }
}