//dva

import request from '../util/request'

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout((resolve, millisecond));
  });
}

export default {
  namespace:'puzzlecards',
  state: {
    data: [],
  },
  effects: {
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      // const endPointURI = '/dev/posts';
      const endPointURI = '/dev/scs_random_joke';

      let puzzle = yield call(request, endPointURI);
      puzzle = puzzle.splice(0, 9);
      // console.log(puzzle);
      yield put({ type: 'addNewCard', payload: puzzle });

      yield call(delay, 3000);

      let puzzle2 = yield call(request, endPointURI);
      puzzle2 = puzzle2.splice(10, 20);
      yield put({ type: 'addNewCard', payload: puzzle2 });
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextData = [...state.data, ...newCard];
      // console.log(nextData);
      return {
        data: nextData
      }
    }
  }
}
