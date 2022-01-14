import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Avatar
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'
import './header.css'

const { Header } = Layout;

function SystemHeader() {
  let {loggedIn, username} = useSelector(state => state.user)
  return (
    <div id="header">
      <Header>
        {
          loggedIn && <span className='profile'>
            {username}
            <Avatar icon={<UserOutlined />} />
          </span>
        }

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key='home'>
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}

export default SystemHeader;
