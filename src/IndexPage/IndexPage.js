import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

const Index = () =>
    <Tabs>
        <Tab title='Log In'>
            <Login />
        </Tab>
        <Tab title='Register'>
            <Register />
        </Tab>
    </Tabs>;
export default Index;