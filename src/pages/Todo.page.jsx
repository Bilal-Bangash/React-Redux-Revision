import React from "react";
import { connect } from "react-redux";
import {
  withStyles,
  List,
  Grid,
  TextField,
  Button,
  FormControl,
} from "@material-ui/core";
import ACTIONS from "../modules/action";
import { ListComponent } from "../components";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
  },
});

const ToDo = (props) => {
  const { classes } = props;
  const [state, setState] = React.useState({});

  const handleSubmit = (event) => {
    console.log(state.item);
    event.preventDefault();
    setState({ item: "" });
    if (state.item !== "") {
      // add the item to the store
      props.createItem(state.item);
    }
  };
  const handleDelete = (event) => {
    // delete the item from the store
    props.deleteItem(event.target.value);
  };
  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <FormControl>
            <TextField
              label="New Task"
              id="margin-dense"
              value={state.item}
              className={classes.textField}
              margin="dense"
              name="item"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <Button type="submit">Add</Button>
          </FormControl>
        </form>
      </div>
      <div>
        <Grid item container justify="space-evenly" alignItems="center">
          <div className={classes.demo}>
            <List dense={false}>
              <ListComponent items={props.items} handleDelete={handleDelete} />
            </List>
          </div>
        </Grid>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  items: state.items,
});
const mapDispatchToProps = (dispatch) => ({
  createItem: (item) => dispatch(ACTIONS.createItem(item)),
  deleteItem: (id) => dispatch(ACTIONS.deleteItem(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ToDo));
