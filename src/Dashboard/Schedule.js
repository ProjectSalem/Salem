import React, {Component} from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Timestamp from 'grommet/components/Timestamp';
import Quote from 'grommet/components/Quote';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Button from 'grommet/components/Button';
import TableAddIcon from 'grommet/components/icons/base/TableAdd';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import DateTime from 'grommet/components/DateTime';
import CloseIcon from 'grommet/components/icons/base/Close';

/*
 TODO: 1) Layer acilisina animation ekle, butona tiklayinca cok sert acilip kapaniyor.
 TODO: 2) Formda inputlari yeni value girilmesi icin onChange methodu ekle.
 */

/* Ornek meal listesi. Her meal, tiles icinde ayri bir tile olarak gozukecek.*/
const Meal = () =>
    <Tiles fill={true}
           flush={false}
           selectable={true}>
        /*Meal 1*/
        <Tile separator='top'
              align='start'
              basis='1/3'>
            <Header size='medium'
                    pad={{"horizontal": "medium"}}>
                <Heading tag='h4'
                         strong={true}
                         margin='none'>
                    Meal 1
                </Heading>
            </Header>
            <Box pad='medium'>
                <Paragraph margin='none'>
                    350 gr food <strong>on 08:35</strong>
                </Paragraph>
            </Box>
        </Tile>
        /*Meal 2*/
        <Tile separator='top'
              align='start'
              basis='1/3'>
            <Header size='medium'
                    pad={{"horizontal": "medium"}}>
                <Heading tag='h4'
                         strong={true}
                         margin='none'>
                    Meal 2
                </Heading>
            </Header>
            <Box pad='medium'>
                <Paragraph margin='none'>
                    400 gr food <strong>on 13:10</strong>
                </Paragraph>
            </Box>
        </Tile>
        /*Meal 3*/
        <Tile separator='top'
              align='start'
              basis='1/3'>
            <Header size='medium'
                    pad={{"horizontal": "medium"}}>
                <Heading tag='h4'
                         strong={true}
                         margin='none'>
                    Meal 3
                </Heading>
            </Header>
            <Box pad='medium'>
                <Paragraph margin='none'>
                    270 gr food <strong>on 18:30</strong>
                </Paragraph>
            </Box>
        </Tile>
        /*Meal 4*/
        <Tile separator='top'
              align='start'
              basis='1/3'>
            <Header size='medium'
                    pad={{"horizontal": "medium"}}>
                <Heading tag='h4'
                         strong={true}
                         margin='none'>
                    Meal 4
                </Heading>
            </Header>
            <Box pad='medium'>
                <Paragraph margin='none'>
                    200 gr food <strong>on 22:00</strong>
                </Paragraph>
            </Box>
        </Tile>
    </Tiles>;


class newMealForm extends React.Component {
    render() {
        return (
            <Form>
                <Header>
                    <Heading>
                        Add New Meal
                    </Heading>
                </Header>
                <Box pad='medium'
                     colorIndex='light-2'>
                    <FormFields>

                        <Box pad='medium'
                             colorIndex='light-2'>
                            <Label align="start" htmlFor="mealName">Meal Label: </Label>
                            <TextInput id='mealName'
                                       name='newMeal'
                                       value='Meal A'
                                       suggestions={['Meal A', 'Meal 1', 'My lovely meal', 'God damn tasty']}/>
                        </Box>
                        <Box pad='medium'
                             colorIndex='light-2'>
                            <Label align="start" htmlFor="mealAmount">Amount: </Label>
                            <NumberInput id="mealAmount" value={10}
                                         min={0}/>gr
                        </Box>
                        <Box pad='medium'
                             colorIndex='light-2'>
                            <Label align="start" htmlFor="MealTime">Time: </Label>
                            <DateTime id='MealTime'
                                      name='MealTime'
                                      format='H:mm:ss'
                                      step={1}/>
                        </Box>
                    </FormFields>
                    <Button label='Submit'
                            type='submit'
                            href="#"
                            primary={true}/>
                </Box>
            </Form>
        );
    }
}

class NewMeal extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false
        };

        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        this.setState({active: true})
    }


    render() {
        const layer = (this.state.active) ?
            <Layer closer={true}
                   flush={false}
                   onClose={() => {
                       this.setState({active: false})
                   }}>
                {React.createElement(newMealForm)}
            </Layer>
            : null;
        return (
            <div>
                {layer}
                <Box pad='medium'
                     colorIndex='light-2'>
                    <Button icon={<TableAddIcon />}
                            label='Add Meal'
                            href="#"
                            primary={true}
                            fill={true}
                            plain={true}
                            onClick={this._onClick}/>
                    {<DeleteButton />}

                </Box>
            </div>
        );
    };

}

const DeleteButton = () =>
    <Button icon={<CloseIcon />}
            label='Delete Meal'
            plain={true}

            fill={true}
            href='#'
            secondary={true}/>;

const Days = () =>
    <Accordion openMulti={true}>

        <AccordionPanel heading='Monday'>
            <Meal />
            {React.createElement(NewMeal)}

        </AccordionPanel>
        <AccordionPanel heading='Tuesday'>
            {React.createElement(NewMeal)}

        </AccordionPanel>
        <AccordionPanel heading='Wednesday'>
            {React.createElement(NewMeal)}
        </AccordionPanel>
        <AccordionPanel heading='Thursday'>
            {React.createElement(NewMeal)}
        </AccordionPanel>
        <AccordionPanel heading='Friday'>
            {React.createElement(NewMeal)}
        </AccordionPanel>
        <AccordionPanel heading='Saturday'>
            {React.createElement(NewMeal)}
        </AccordionPanel>
        <AccordionPanel heading='Sunday'>
            {React.createElement(NewMeal)}
        </AccordionPanel>
    </Accordion>;

const DateNow = () =>
    <Quote emphasizeCredit={false}>
        <Paragraph align="center" size="large">
            <Label>It's </Label>
            <Timestamp align="center" value='2017-02-20T02:42:40.611Z'/>
            <Label> now.</Label> </Paragraph>
    </Quote>;

const Head = () =>
    <Heading align="center">
        Weekly Feeding Schedule
    </Heading>;

const Schedule = () =>
    <div>

        <Box justify='start'
             align='center'
             wrap={true}
             pad='medium'
             margin='small'
             colorIndex='light-1'>
            <br/>
            <Head />

            <Box
                justify='start'
                align='center'
                wrap={true}
                pad='medium'
                margin='small'
                colorIndex='light-1'>
                <DateNow />
            </Box>
            <Box size="large"
                 justify='start'
                 wrap={true}
                 pad='medium'
                 margin='small'
                 colorIndex='light-1'>
                <Days />
            </Box>
        </Box>


    </div>;


export default Schedule;