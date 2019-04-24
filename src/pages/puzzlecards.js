import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = state => {
  const cardList = state[namespace].data;
  return {
    cardList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAdd: newCard => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    }
  }
}

class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.counter = 2
  }
  // addNewCard = () => {
  //   this.setState(prevState => {
  //     const prevCardList = prevState.cardList;
  //     this.counter += 1;
  //     const card = {
  //       id: this.counter,
  //       setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  //       punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     };
  //     return {
  //       cardList: prevCardList.concat(card),
  //     }
  //   })
  // }
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id} onClick={() => console.log(card.id)}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            )
          })
        }
        <div>
          <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}>添加卡片</Button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCardsPage);

// export default PuzzleCardsPage;
