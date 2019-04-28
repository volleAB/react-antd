import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link'
import logo from '../assets/logo.svg';

const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
          <div style={{ height: '32px', background: 'rgba(255, 255, 255, .2)', margin: '16px' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
            <Menu.Item key="1">
              {/* <Icon type="pie-chart" />
              <span></span> */}
              <Link to="/">
                <Icon type="home" />
                <span>Helloworld</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/list">
                <Icon type="form" />
                  <span>List</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
              <Menu.Item key="3"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="pie-chart" /><span>Test</span></span>}
            >
              <Menu.Item key="6"><Link to="/test">测试页</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/products">商品页</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/puzzlecards">卡片页</Link></Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
          </Content>
          {/* 使用{this.props.children}这样之后我们设置的路由会通过替换 children 变量实现内容的切换 */}
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
