import React from 'react';
import './App.css';
import Home from './Dashboard/Home.js';
import MyPet from './Dashboard/MyPet.js';
import Schedule from './Dashboard/Schedule.js';
import MyProfile from './Dashboard/MyProfile.js';

import App from '../node_modules/grommet/components/App'
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';


//TODO: Navigation Menu'yu sola al, sayfa daha dolu gozukebilir.
//TODO: Sayfalar arasi gecise animation ekle
//TODO: Tab'ler arasi gecislerde problem var, activeIndex degistikce eskisi siliniyo, goz at.
//TODO: @MyPet bolumune liste ve tablolari ekle.
//TODO: Login ve Register kisimlarini duzenle.
//TODO: @Profile kisminda parola kisminda input'u gizle.
const Logo = () =>
    <div>
        <Image src='/logo.png' size='thumb'/>
    </div>;

const Foot = () =>
    <Footer justify='between'
            size='large'
            primary={true}>
        <Title>
            Salem
        </Title>
        <Box direction='row'
             align='center'
             pad={{"between": "medium"}}>
            <Paragraph margin='none'>
                © 2017 Salem
            </Paragraph>
            <Menu direction='row'
                  size='medium'
                  dropAlign={{"right": "right"}}>
                <Anchor href='#'>
                    Support
                </Anchor>
                <Anchor href='#'>
                    Contact
                </Anchor>
                <Anchor href='#'>
                    About
                </Anchor>
            </Menu>
        </Box>
    </Footer>;

/* Kullanici login oldugunda gozukecek navigation sekmesi.
 Tablardan olusuyor,
 */
const Authorized = () =>
    <Tabs >
        <Tab title='Home'>
            {<Home />}
        </Tab>
        <Tab title='My Pet'>
            {<MyPet />}
        </Tab>
        <Tab title='Schedule'>
            {<Schedule />}
        </Tab>
        <Tab title='My Profile'>
            {<MyProfile />}
        </Tab>
        <Tab title='Log Out'>
        </Tab>
    </Tabs>;


const Main = () =>
    <App >
        <Authorized />
        <Foot/>
    </App>;


var a = React.createElement(Main);


export default a;
