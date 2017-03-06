import React from 'react';
import Quote from 'grommet/components/Quote';
import Status from 'grommet/components/icons/Status';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';


const Container = () =>
    <Quote size="full">
        <Form pad="medium">
            <Header>
                <Heading>
                    Profile
                </Heading>
                <br/>
            </Header>
            <FormFields>
                <FormField label='Old Password'
                           error=''>
                    <TextInput />
                </FormField>

                <FormField label='New Password'
                           error=''>
                    <TextInput />
                </FormField>

                <FormField label='New Password Again'
                           error=''>
                    <TextInput />
                </FormField>

                <FormField label='E-mail'
                           error=''>
                    <TextInput />
                </FormField>
                <br/>
                <Label>System Status: </Label>
                <Status value='ok'/>
                <br/>
                <br/>
                <Label>IP Address: </Label>
                <Label>192.168.1.2</Label>
            </FormFields>
            <Footer pad={{"vertical": "medium"}}>
                <Button label='Submit'
                        type='submit'
                        href="#"
                        primary={true}
                />
            </Footer>
        </Form>
    </Quote>;

const MyProfile = () =>
    <div>
        {<Container />}
    </div>;
export default MyProfile;