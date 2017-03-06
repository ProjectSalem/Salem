import * as firebase from 'firebase';


// Make sure you swap this out with your Firebase app's config
const config = {
    apiKey: "AIzaSyCeDlj-MWL_zXDy0pdhngcrNGnxb58dy7A",
    authDomain: "salem-1cfea.firebaseapp.com",
    databaseURL: "https://salem-1cfea.firebaseio.com",
    storageBucket: "salem-1cfea.appspot.com",
    messagingSenderId: "600448452071"
};

const fb = firebase
    .initializeApp(config)
    .database()
    .ref();

const App = (props) => {
    console.log('snapshot', props);
    return (
        <div>
            <h1>My Prototype</h1>
            <p>{JSON.stringify(props)}</p>
        </div>
    );
};

fb.on('value', snapshot => {
    const store = snapshot.val();
    ReactDOM.render(
        <App {...store} />,
        document.getElementById('root')
    );
});