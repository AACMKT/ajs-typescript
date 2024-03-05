import Cart from '../service/Cart';
import getFulfilledChart, { mobilePhone, tablet } from '../';
import Gadget from '../domain/Gadget';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('goods adding to Chart and listing test', () => {
  let filledCart = (getFulfilledChart())

  expect(filledCart.cart.items).toEqual([...filledCart.items])
});

test('Chart totalPrice method test (without discount)', () => {
  let cart = (getFulfilledChart()).cart;
  let totalPrice: number = 0;
  cart.items.forEach(item => totalPrice += item.price);
  expect(cart.totalPrice() ).toBe(totalPrice);
});

test('Chart totalPrice method test (with discount)', () => {
  let cart = (getFulfilledChart()).cart;
  let totalPrice: number = 0;
  cart.items.forEach(item => totalPrice += item.price);
  let discount: number = 10;
  expect(cart.totalPrice(discount) ).toBe(totalPrice - totalPrice*discount/100);
});

test('Chart removeItem method (for uncountable goods) test', ()=>{
  let filledCart = getFulfilledChart();
  let itemsInCart = [...filledCart.items].splice(1);
  filledCart.cart.removeItem(filledCart.items[0].id);
  expect(filledCart.cart.items).toEqual(itemsInCart);
});

test('Chart removeItem method (for countable goods) test', ()=>{
  const cart  = (getFulfilledChart()).cart;
  cart.add(tablet);
  cart.add(tablet);
  const toBeTwoGoods = (cart.items.find(item => item instanceof Gadget ))?.amount;
  cart.removeItem(tablet.id);
  const toBeOneGood = cart.items.find(item => item instanceof Gadget )?.amount;
  cart.removeItem(tablet.id);
  expect([toBeTwoGoods, toBeOneGood, cart.items]).toEqual([2, 1, [...getFulfilledChart().items]]);
});


test('Cart add method proper increasing amount of countable goods test', () => {
  const cart = (getFulfilledChart()).cart;
  cart.add(mobilePhone);
  cart.add(mobilePhone);
  let countableGood = cart.items.find(item => item instanceof Gadget );
  expect(countableGood?.amount).toBe(2)
});

test('Cart add method proper processing of uncountable good adding test', () => {
  let cart = (getFulfilledChart()).cart;
  let initialGoods = (getFulfilledChart()).items;
  let goodsAmount = initialGoods.length;
  cart.add(initialGoods[0]);
  expect([cart.items.length, cart.items]).toEqual([goodsAmount, initialGoods])
});

