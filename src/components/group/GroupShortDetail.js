import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import GroupUsers from "../group/GroupUsers";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import groupLogo from "../../assets/images/groups_default.jpeg";

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

const data=[
  {
    username: "William",
    email: "William@mail.com",
    status: "active"
  },
  {
    username: "Mustafa",
    email: "must@mail.com",
    status: "active"
  },
  {
    username: "Rolain",
    email: "rola@mail.com",
    status: "inactive"
  }
];

const GroupShortDetail = props => {
  const classes = useStyles();
  const { groupId } = props;
  groupId.substring(1, 2);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="150"
        width="50"
        image={groupLogo}
        title="Groups banner"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Administrators
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Users from this group have full access to all admin Ui features.
        </Typography>
        <Chip color="primary" label="active" />
      </CardContent>
      <Divider />
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
          Users
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <GroupUsers data={data}></GroupUsers>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default GroupShortDetail;
