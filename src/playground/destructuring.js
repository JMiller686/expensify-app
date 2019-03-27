//
//Object Destructuring
//


// const person = {
//     name: 'Josh',
//     age: 35,
//     location: {
//         city: 'Chicago',
//         temp: 45
//     }
// };

// const { name="Anonymous", age } = person;
// const { city, temp } = person.location;

// console.log(`${name} is ${age}.`);

// if(city && temp) {
//     console.log(`Its ${temp} in ${city}.`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);





//
// Array Destruturing
//

const address = ['2313 South Juniper Street', 'Chicago', 'Illinois', '60630'];
const [ street, city="Boise", state] = address;
console.log(`You are in ${city} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
