import React from 'react';
import Dashboard from './Dashboard';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SignalCellularAltOutlinedIcon from '@material-ui/icons/SignalCellularAltOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '../App.css';
const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    sidedrawer: {
        backgroundColor: '#221e36',
        color: '#e6e6ef',
        padding: theme.spacing(1),
        height: '100vh',
        maxWidth: '280px',
    },
    drawer: {

        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    badge: {
        '& > *': {
            margin: theme.spacing(1),
        },
        flex: '1',
    },
    logo: {
        margin: 'auto',
        display: 'flex',
        height: '140px',
        width: '210px',
        backgroundColor: '#e6e6ef',
        color: '#261f68',
    },
    logoText: {
        margin: 'auto',
        fontSize: '60px',
        fontFamily: 'Sans-Serif'
    },
    arrow: {
        paddingLeft: '30px',
        color: '#e6e6ef',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    appBar: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',

        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: 'white',
        },
    },

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        height: '100vh',
    },
    button: {
        padding: "10px 40px 10px 40px",
    },
    down: {
        marginTop: '10px',
        flex: '1',
        color: '#261f68',
    },
    notif: {
        display: 'flex',
    },
    person: {
        display: 'flex',
    },
    user: {
        flex: '1',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (

        <div className={classes.sidedrawer} height="100%">
            <div className={classes.toolbar} height="240px">
                <div className={classes.logo}>
                    <h1 className={classes.logoText}>JRML</h1>
                </div></div>
            <List >
                <ListItem button style={{ padding: 6 }}>
                    <ListItemText primary="Jain Rice Mills Limited"></ListItemText>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }} >
                    <ListItemIcon>
                        <DashboardOutlinedIcon style={{ color: "#ff66b3" }} />
                    </ListItemIcon>
                    <ListItemText primary="DASHBOARD" />
                    <ListItemIcon className={classes.arrow}>
                        <KeyboardArrowRight />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }} >
                    <ListItemIcon >
                        <AccountBalanceOutlinedIcon style={{ color: "green" }} />
                    </ListItemIcon>
                    <ListItemText primary="MARKETPLACE" />
                    <ListItemIcon className={classes.arrow}>
                        <ChevronRightOutlinedIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }}>
                    <ListItemIcon>
                        <AssignmentOutlinedIcon style={{ color: "blue" }} />
                    </ListItemIcon>
                    <ListItemText primary="ORDERS" />
                    <ListItemIcon className={classes.arrow}>
                        <ChevronRightOutlinedIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }}>
                    <ListItemIcon>
                        <ListAltOutlinedIcon style={{ color: "yellow" }} />
                    </ListItemIcon>
                    <ListItemText primary="INVOICES" />
                    <ListItemIcon className={classes.arrow}>
                        <ChevronRightOutlinedIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }}>
                    <ListItemIcon>
                        <LoyaltyOutlinedIcon style={{ color: "blue" }} />
                    </ListItemIcon>
                    <ListItemText primary="PRODUCT" />
                    <ListItemIcon className={classes.arrow}>
                        <ChevronRightOutlinedIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }}>
                    <ListItemIcon>
                        <MonetizationOnOutlinedIcon style={{ color: "#ff66b3" }} />
                    </ListItemIcon>
                    <ListItemText primary="EXPENSES" />
                    <ListItemIcon className={classes.arrow}>
                        <ChevronRightOutlinedIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }}>
                    <ListItemIcon>
                        <PeopleAltOutlinedIcon style={{ color: "cyan" }} />
                    </ListItemIcon>
                    <ListItemText primary="CUSTOMERS" />
                    <ListItemIcon className={classes.arrow}>
                        <ChevronRightOutlinedIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }}>
                    <ListItemIcon>
                        <SignalCellularAltOutlinedIcon style={{ color: "red" }} />
                    </ListItemIcon>
                    <ListItemText primary="ANALYSIS" />
                    <ListItemIcon className={classes.arrow}>
                        <ChevronRightOutlinedIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider style={{ backgroundColor: "grey" }} />
                <ListItem button style={{ padding: 6 }}>
                    <ListItemIcon>
                        <SettingsOutlinedIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="SETTINGS" />
                    <ListItemIcon className={classes.arrow}>
                        <ChevronRightOutlinedIcon />
                    </ListItemIcon>
                </ListItem>
            </List>
            <Divider style={{ backgroundColor: "grey" }} />
        </div >
    );

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button variant="contained" color="primary" size="small">
                        CREATE NEW
                        </Button>
                    <Button className={classes.notif}>
                        <div className={classes.badge}>
                            <Badge badgeContent={2} color="secondary" anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}>
                                <NotificationsNoneOutlinedIcon color="primary" fontSize="medium" />

                            </Badge>
                        </div>
                        <div className={classes.down}>
                            <ArrowDropDownIcon color="primary" />
                        </div>
                    </Button>
                    <Button className={classes.person}>
                        <div className={classes.user}>
                            <PermIdentityOutlinedIcon color="primary" fontSize="medium" />
                        </div>
                        <div className={classes.down}>
                            <ArrowDropDownIcon color="primary" />
                        </div>
                    </Button>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Dashboard />
            </main>
        </div >
    );
}

ResponsiveDrawer.propTypes = {
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;