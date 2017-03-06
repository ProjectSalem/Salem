import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Paragraph from 'grommet/components/Paragraph';
import CheckBox from 'grommet/components/CheckBox';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

const Register = () =>
    <Form>
        <Header>
            <Heading>
                Register
            </Heading>
        </Header>
        <FormFields>
            <FormField label='Your Name'
                       error=''>
                <TextInput />
            </FormField>

            <FormField label='Your Surname'
                       error=''>
                <TextInput />
            </FormField>

            <FormField label='Your Password'
                       error=''>
                <TextInput />
            </FormField>

            <FormField label='Your Password again for confirmation'
                       error=''>
                <TextInput />
            </FormField>

            <FormField label='Your E-mail Address'
                       error=''>
                <TextInput />
            </FormField>
            <fieldset>
                <Paragraph>
                    You must acknowledge the destructive aspects of this action.
                </Paragraph>
                <FormField>
                    <CheckBox id='agree'
                              name='agree'
                              label='I acknowledge that I may lose data.'/>
                </FormField>
            </fieldset>
        </FormFields>
        <Footer pad={{"vertical": "medium"}}>
            <Button label='Submit'
                    type='submit'
                    primary={true}
            />
        </Footer>
    </Form>;

export default Register;