console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ) {
  basket.push(item);
  return true;
}
console.log('testing addItem:', addItem('Mac & Cheese'));
console.log('testing addItem:', addItem('Soy Sauce'));
console.log('testing addItem:', addItem('Butter'));
console.log('testing addItem:', addItem('Chicken Thighs'));
console.log('testing addItem:', addItem('Rice'));
console.log('testing addItem:', addItem('Ginger'));

function listItems() {
  console.log('here are the items in your cart:');
    for (i = 0; i < basket.length; i++){
      console.log(basket[i]);
    }
}
console.log(listItems());

function empty() {
  basket.length = 0;
}

console.log('removing items from cart', empty());
console.log('basket now contains:', basket);
