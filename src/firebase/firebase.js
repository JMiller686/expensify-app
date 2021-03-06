import * as firebase from 'firebase';

//Firebase config
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child_changed
// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'rent',
//     note: 'rent for April',
//     amount: 1200.00,
//     createdAt: 1
// });

// database.ref('notes/-LbxoapkWjUM4Gikn8XK').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React, Angualar, Python'
// });

// Setup data subscription -> Anred is a Software developer at Amazon.
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// })

// Change the data and make sure it reprints
// database.ref().update({
//     name: 'Jeff Bezos',
//     'job/title': 'CEO',
//     'job/company': 'Apple'
// })

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log('Error fetching data', err)
//     })

// database.ref().set({
//     name: 'Josh Miller',
//     age: 26,
//     stressLevel: 8,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Chicago',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('This failed', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref('isSingle').remove(() => {

// }).then(() => {
//     console.log('isSingle was removed')
// }).catch((error) => {
//     console.log('isSingle couldnt be removed', error)
// })