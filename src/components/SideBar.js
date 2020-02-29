import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { FaBookOpen, FaQuestionCircle, FaUsers, FaUserEdit } from "react-icons/fa";
import { Typography } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List style={{fontFamily: 'Source Sans Pro'}} >
          <ListItem button>
            <ListItemIcon>
          <FaBookOpen />
            </ListItemIcon>
            <ListItemText >
              <Typography style={{fontFamily: 'Source Sans Pro'}}>
            My Lessons
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
          <FaUsers />
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro'}}>
            My Students
            </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
          <FaUserEdit />
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro'}}>
            Assignments
            </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
          <FaQuestionCircle />
            </ListItemIcon>
            <ListItemText>
            <Typography style={{fontFamily: 'Source Sans Pro'}}>
            Assignments
            </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}