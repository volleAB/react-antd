import { Card, Divider } from 'antd';
import styles from './test.css';

const MyInput = ({ onChange }) => {
  return (
    <input onChange={onChange}></input>
  )
}

export default function() {
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
      <MyInput />
    </Divider>
  );
}
