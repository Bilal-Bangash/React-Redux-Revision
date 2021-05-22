const TYPES = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};

const createItem = (task) => ({
  type: TYPES.CREATE_ITEM,
  payload: task,
});
const deleteItem = (id) => ({
  type: TYPES.DELETE_ITEM,
  payload: id,
});

export default {
  createItem,
  deleteItem,
  TYPES,
};
