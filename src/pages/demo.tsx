import React from 'react';

// 将 name 使用 SFC 进一步约束，规定 name 为 string 类型，来增加健壮性。
// const Hello: React.SFC<{ name: string }> = ({ name }) => (
//   <div>Hello,{name}</div>
// );

// 我们也可以使用 Class 语法来声明组件，可以通过 <> 的第一个参数来指定 props 的类型。
// 通过第二个参数来指定 state 的类型
class Message extends React.Component<
  {
    message: string;
  }, {
    count: number;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  public increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  public render() {
    return (
      <div onClick = {this.increment}>
        {this.props.message}
        {this.state.count}
      </div>
    );
  }
}
const App = () => <Message message="点击" />;

export default App;
