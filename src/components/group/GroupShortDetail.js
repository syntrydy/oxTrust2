import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: green[500]
  }
}));

const GroupShortDetail = props => {
  const classes = useStyles();
  const { groupId } = props;
  var id = groupId.substring(1, 2);
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            color="primary"
          >
            {id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" color="primary">
            <MoreVertIcon />
          </IconButton>
        }
        title="Title here"
        subheader="Added on September 14, 2019"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          description here
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Add new group">
          <IconButton aria-label="add group" color="primary">
            <GroupAddIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit this group">
          <IconButton aria-label="Edit group" color="primary">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete this group" color="primary">
          <IconButton aria-label="delete" color="primary">
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
        <IconButton
          color="primary"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {" "}
          Users
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default GroupShortDetail;
