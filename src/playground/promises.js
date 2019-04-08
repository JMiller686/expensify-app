const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Josh',
        //     age: 32
        // });
        reject('something went wrong');
    }, 1500)
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('after');