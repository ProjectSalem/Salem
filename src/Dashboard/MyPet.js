import React from 'react';
import 'grommet/scss/vanilla/index';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Image from 'grommet/components/Image';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

const infos = () =>
    <Table scrollable={true}>
        <tbody>
        <TableRow>
            <td>
                1
            </td>
            <td>
                Alan
            </td>
            <td className='secondary'>
                plays accordion
            </td>
        </TableRow>
        <TableRow>
            <td>
                2
            </td>
            <td>
                Chris
            </td>
            <td className='secondary'>
                drops the mic
            </td>
        </TableRow>
        <TableRow>
            <td>
                3
            </td>
            <td>
                Eric
            </td>
            <td className='secondary'>
                rides a bike
            </td>
        </TableRow>
        <TableRow>
            <td>
                4
            </td>
            <td>
                Tracy
            </td>
            <td className='secondary'>
                travels the world
            </td>
        </TableRow>
        </tbody>
    </Table>;

const PetPhoto = () =>
    <Image size='small'
           src="/myPet.jpg"
    />;

const PetName = () =>
    <Heading strong={true}
             uppercase={false}
             truncate={false}
             align='center'>
        Boncuk
    </Heading>;
const PetAge = () =>
    <Headline size='small'
              align="center">
        3 years old
    </Headline>;

const PetInfo = () =>
    <div>
        <Tabs
            justify='start'>
            <Tab title='Vaccines'>
            </Tab>
            <Tab title='Surgeries'>
                <PetAge />
            </Tab>
            <Tab title='Sickness'>

            </Tab>
        </Tabs>
    </div>;

const MyPet = () =>

    <Section>
        <PetPhoto />
        <PetName />
        <PetAge />
        <PetInfo />
    </Section>;


export default MyPet;