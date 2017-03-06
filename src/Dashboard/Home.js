/**
 * Created by ugurcem on 20/02/2017.
 */
import React, {Component} from 'react';
import 'grommet/scss/vanilla/index';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';

import * as firebase from 'firebase';


class Metre extends Component {
    render() {
        return (
            <div >
                <Meter id="meterid"
                       vertical={false}
                       type='arc'
                       size='medium'
                       value={this.props.v}/>
                <Value id="valueid"
                       value={this.props.v}
                       units='GB'/>
            </div>
        )
    }
}
var Home = React.createClass({
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
                <div>
                    <Box responsive={true}
                         direction='row'
                         justify='center'
                         align='center'
                         alignContent="center"
                         wrap={true}
                         pad='medium'
                         margin='small'
                         colorIndex='light-1'>
                        <Stream />
                    </Box>
                    <Box responsive={true}
                         direction='row'
                         justify='between'
                         align='center'
                         wrap={false}
                         pad='small'
                         margin='small'
                         colorIndex='light-1'>


                        <Box responsive={true}
                             direction='row'
                             justify='start'
                             align='center'
                             wrap={true}
                             pad='medium'
                             margin='small'
                             colorIndex='light-1'>
                            <Metre v={this.state.vall}/>
                        </Box>


                        <Box responsive={true}
                             direction='row'
                             justify='start'
                             align='center'
                             wrap={true}
                             pad='medium'
                             margin='small'
                             colorIndex='light-1'>
                            <Metre v={this.state.vall}/>
                        </Box>
                    </Box>
                </div>
            </div>
        )
    }
});

const Stream = () =>
    <Hero background={<Image src='/cam-cat.png'
                             fit='cover'/>}
          backgroundColorIndex='dark'
          size='medium'/>;

export default Home;