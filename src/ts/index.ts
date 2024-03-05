import Book from './domain/Book';
import Gadget from './domain/Gadget';
import Gadgets from './domain/Gadget';
import Movie from './domain/Movie';
import MusicAlbum from './domain/MusicAlbum';
import Cart from './service/Cart';

export default () => {
    const cart = new Cart();
    let item1 = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    let item2 = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    let item3 = new Movie(1009, 'Мстители', 400, 'USA', 127, ['фантастика', 'боевик', 'фэнтези'], 'Avengers Assemble!', 'The Avengers', 'IMAX')
    cart.add(item1);
    cart.add(item2);
    cart.add(item3);
    return {'cart': cart, 'items': [item1, item2, item3]}
}

export const mobilePhone = new Gadget(1010, "Xphone", 3000, {'connection standart': 'satellite connection', 'battary': '10250mAh', 'display': 'polymorphe crystals'})
export const tablet = new Gadget(1011, "TransparentVision", 3000, {'diagonal': '16 inches', 'battary': '22000mAh', 'display': 'flexible, poligoal'})