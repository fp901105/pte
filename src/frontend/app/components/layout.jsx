import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ReactDOM from 'react-dom'
import React from 'react';
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const PageLayout = (props) =>{
  function handleClick(e) {
    props.history.push(e.key)
  }
    return(
      <Layout>
        <Header className="header">
          <div className="logo" >
            <Link to="/">
              <img src="" alt=""/>
            </Link>
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <Menu mode="inline" defaultSelectedKeys={[ '1']} defaultOpenKeys={[ 'sub1']} style={{ height: '100%', borderRight: 0 }} onClick={handleClick}>
              <SubMenu key="Speaking" title={<span>
                <Icon type="tags" />Speaking</span>}>
                <Menu.Item key="ra" >Read Aloud</Menu.Item>
                <Menu.Item key="rs">Repeat Sentence</Menu.Item>
                <Menu.Item key="rl">Retell Lecture</Menu.Item>
                <Menu.Item key="di">Discribe Image</Menu.Item>
              </SubMenu>
              <SubMenu key="Writing" title={<span>
                <Icon type="tags" />Writing</span>}>
              </SubMenu>
              <SubMenu key="Reading" title={<span>
                <Icon type="tags" />Reading</span>}>
                <Menu.Item key="os">Reorder Sentence</Menu.Item>
                <Menu.Item key="fb">Fill in Blank</Menu.Item>
              </SubMenu>
              <SubMenu key="Listening" title={<span>
                <Icon type="tags" />Listening </span>}>
                <Menu.Item key="sst">Summary Spoken Text</Menu.Item>
                <Menu.Item key="wfd">Write from Dictation</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }

  module.exports = {PageLayout};