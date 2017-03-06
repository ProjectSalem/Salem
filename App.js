import React, {Component} from 'react';
import './App.css';

import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';
import * as firebase from 'firebase';

//TODO: Johnny-five ve firebase kutuphanelerini sil.


class Metre extends Component {
    render() {
        return (
            <div>
                <h1>Header 1</h1>
                <p>Paragraph 1</p>
                <span>prop is: {this.props.p1}</span>
                <br/>
                <Meter id="meterid"
                       vertical={false}
                       type='arc'
                       value={this.props.v}/>
                <Value id="valueid"
                       value={this.props.v}
                       units='GB'/>
            </div>
        )
    }
}

var App = React.createClass({
    getInitialState: function () {
        return {
            vall: 1
        }
    },
    componentWillMount: function () {
        this.getMeter();
    },

    getMeter: function () {
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

        fb.on('value', snapshot => {
            const store = snapshot.val();
            console.log(store.pot.data);
            this.setState({vall: store.pot.data});

        });
    },

    render: function () {
        return (
            <div>
                <Metre p1={this.state.vall} v={this.state.vall}>

                </Metre>
            </div>
        )
    }
});

export default App;
