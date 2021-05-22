import _ from "lodash";
import ACTIONS from "./action";

const INITIAL_STATE = {
  items: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.TYPES.CREATE_ITEM:
      console.log(action);
      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;

    case ACTIONS.TYPES.DELETE_ITEM:
      newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    default:
      return state;
  }
};
