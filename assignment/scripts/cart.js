console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//basket
let basket = [];

// add item function
function addItem(item){
    basket.push(item);
    return true;
}// end add item

console.log(addItem('tissue'));//test add item
console.log(basket[0])// test basket
