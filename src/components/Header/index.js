import { Link } from "react-router-dom";
import {
  Layout,
  Menu
} from 'antd';
import './header.css'

const { Header } = Layout;

function SystemHeader() {
  return (
    <div id="header">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item >
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}

export default SystemHeader;
