import React from 'react';
import { Layout, Menu, Col, Row, Select} from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

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
      <Content>
        <Row>
          <Col span={8}>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
          
          </Col>
          <Col span={8} offset={8}>col-8
          
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>My GitHub Page created with Ant Design</Footer>
    </Layout>
  );
}

export default App;
