import React from 'react';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<MailOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            About
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">Welcome to my GitHub page!</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>My GitHub Page created with Ant Design</Footer>
    </Layout>
  );
}

export default App;
