import { Component } from 'react'
import { Card, Divider, Tabs, Tree } from 'antd';
import styles from './test.css';

const TabPane = Tabs.TabPane;
const { TreeNode } = Tree;

class Test extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: '1',
      expandedKeys: [],
    }
  }
  onTabChange = (activeKey) => {
    console.log(activeKey);
    this.setState({activeKey}, () => {
      console.log(this.state.activeKey);
    })
  }
  onExpand = (expandedKeys) => {
    this.setState({ expandedKeys });
  }
  onSelect = (selectedKeys) => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];
    console.log(key);
    if (expandedKeys.includes(key)) {
       // 移除 key
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key),
      });
    } else {
      // 添加 key
      this.setState({ expandedKeys: [...expandedKeys, key] });
    }
  }
  render() {
    return (
      <Divider>
        <Card className={styles.normal} actions={[<button>操作一</button>, <button>操作二</button>]}>
          <Card.Meta
            avatar={<img
              alt=""
              style={{ width: '64px', height: '64px', borderRadius: '32px' }}
              src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
            />
            }
            title="Alipay"
            description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
          />
        </Card>
        <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        </Tabs>
        <Tree
          expandedKeys={this.state.expandedKeys}
          selectedKeys={[]}
          onExpand={this.onExpand}
          onSelect={this.onSelect}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="leaf" key="0-0-0" />
            <TreeNode title="leaf" key="0-0-1" />
          </TreeNode>
        </Tree>
      </Divider>
    );
  }
}

export default Test;
