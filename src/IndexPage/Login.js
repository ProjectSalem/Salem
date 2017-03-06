;
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

const Login = () =>
    <div>
        <Header>
            <Heading>
                Login
            </Heading>
        </Header>
        <LoginForm
            forgotPassword={<Anchor href='#'
                                    label='Forgot password?'/>}
            rememberMe={true}/>
    </div>;

export default Login;