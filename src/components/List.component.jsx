import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const ListComponent = ({ items, handleDelete }) => {
  return items.map((item) => (
    <ListItem key={item.id}>
      <ListItemText primary={item.description} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={handleDelete} value={item.id}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));
};
export default ListComponent;
