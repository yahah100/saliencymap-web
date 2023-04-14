import React, { useState } from 'react';
import { Layout, Menu, Col, Row, Select, Card } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
const { Meta } = Card;



const { Header, Content, Footer } = Layout;



function App() {
  // state image name and path
const [imageLeftBin, setImageLeftBin] = useState<string>('14');
const [imageLeftTable, setImageLeftTable] = useState<string>('I&SOC-charging');

const [imageRightBin, setImageRightBin] = useState<string>('00');
const [imageRightTable, setImageRightTable] = useState<string>('I&SOC-charging');

// CNN_13-bucket_T&SOC-charging
const binList: Array<{ value: string; label: string }> = [];
const stressorTables: Array<{ value: string; label: string }> = [
  { value: 'I&SOC-charging', label: 'I & SOC-charging' },
  { value: 'I&SOC-discharging', label: 'I & SOC-discharging' },
  { value: 'T&SOC-charging', label: 'T & SOC-charging' },
  { value: 'T&SOC-discharging', label: 'T & SOC-discharging' },
  { value: 'T&SOC-hold', label: 'T & SOC-hold' },


];


for (let i = 0; i <= 14; i++) {
  const label = i < 10 ? `0${i}` : `${i}`;
  binList.push({ value: label, label: label });
}

const handleChangeLeftBin = (value: string) => {
  console.log(`selected ${value}`);
  setImageLeftBin(value);
};

const handleChangeLeftTable = (value: string) => {
  console.log(`selected ${value}`);
  setImageLeftTable(value);
};

const handleChangeRightBin = (value: string) => {
  console.log(`selected ${value}`);
  setImageRightBin(value);
};

const handleChangeRightTable = (value: string) => {
  console.log(`selected ${value}`);
  setImageRightTable(value);
};

// CNN_11-bucket_I&SOC-discharging.png
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
          <Col span={24}> <h1 style={{ textAlign: 'center' }}>Saliency Maps</h1></Col>
        </Row>
        <Row>
          <Col span={10} offset={1}>
              <Select
                defaultValue="14"
                style={{ width: 120 }}
                onChange={handleChangeLeftBin}
                options={binList}
              />
              <Select
                defaultValue="I&SOC-charging"
                style={{ width: 240 }}
                onChange={handleChangeLeftTable}
                options={stressorTables}
              />
              <Card
                className="heatmap"
                hoverable
                cover={<img alt="example" src={`${process.env.PUBLIC_URL}/images/MLP_${imageLeftBin}-bucket_${imageLeftTable}.png`} />}
              >
                <Meta title="MLP" description={`${imageLeftBin} - ${imageLeftTable}`} />
              </Card>
          </Col>
          <Col span={10} offset={2}>
            <Select
                defaultValue="00"
                style={{ width: 120 }}
                onChange={handleChangeRightBin}
                options={binList}
              />
              <Select
                defaultValue="I&SOC-charging"
                style={{ width: 240 }}
                onChange={handleChangeRightTable}
                options={stressorTables}
              />
              <Card
                className="heatmap"
                hoverable
                cover={<img alt="example" src={`${process.env.PUBLIC_URL}/images/CNN_${imageRightBin}-bucket_${imageRightTable}.png`} />}
              >
                <Meta title="CNN" description={`${imageLeftBin} - ${imageLeftTable}`} />
              </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>State of Health Forecasting - Saliency Maps</Footer>
    </Layout>
  );
}

export default App;
