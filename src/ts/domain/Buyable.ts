export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly countable: boolean,
    amount: number,
}