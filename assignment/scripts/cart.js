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

//item list function
function listItems(){
    for (var i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}//end function list item

console.log(listItems());//test listItems

