import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAUm9h8t4tgLcQLMURr4xgzSMrQtrL60f4",
    authDomain: "expensify-7cbea.firebaseapp.com",
    databaseURL: "https://expensify-7cbea.firebaseio.com",
    projectId: "expensify-7cbea",
    storageBucket: "expensify-7cbea.appspot.com",
    messagingSenderId: "29089722516"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Josh Miller',
    age: 26,
    isSingle: false,
    location: {
        city: 'Chicago',
        country: 'United States'
    }
});

// database.ref().set('this is my data');

database.ref('age').set(27);
database.ref('location/city').set('Miami');

database.ref('attributes').set({
    height: 63,
    weight: 210
})

// attributes
//    height
//    weight
