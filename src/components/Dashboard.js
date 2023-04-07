import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import AutorenewSharpIcon from '@material-ui/icons/AutorenewSharp';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Chart from './Chart';
import '../App.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        padding: '25px 40px 0px 40px',
    },
    left: {
        marginTop: '15px',
        padding: theme.spacing(1.5),
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#261f68',
        display: 'flex',
        alignItems: 'center',
    },
    right: {
        marginTop: '20px',
        padding: theme.spacing(1.2),
        textAlign: 'center',
        color: '#261f68',
        display: 'flex',
    },

    update: {
        color: '#261f68',
        marginTop: '25px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
    },
    sales: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#261f68',
        marginTop: '20px',
        height: '100%',
    },
    approvals: {
        color: '#261f68',
        display: 'flex',
        justify: "flex-start",
        alignItems: "center",
    },
    icon: {
        color: 'white',
        fontSize: 'large',
        display: 'flex',
        justify: 'flex-start',

    },
    one: {
        textAlign: "left",
    },
    two: {
        textAlign: "left",
        fontSize: 13,
    },
    appr: {
        marginTop: '15px',
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.update}>
                        <Grid item xs={3} >
                            <AddCircleSharpIcon style={{ marginLeft: 25, marginTop: 5 }} />
                        </Grid>
                        <Grid item xs={9} style={{ fontSize: 15, textAlign: "left" }}>NEW ORDER</Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.update}>
                        <Grid item xs={3} >
                            <AutorenewSharpIcon style={{ marginLeft: 25, marginTop: 5 }} />
                        </Grid>
                        <Grid item xs={9} style={{ fontSize: 15, textAlign: "left" }} > UPDATE STOCK</Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.update}>
                        <Grid item xs={3} >
                            <AutorenewSharpIcon style={{ marginLeft: 25, marginTop: 5 }} />
                        </Grid>
                        <Grid item xs={9} style={{ fontSize: 15, textAlign: "left" }} > UPDATE RAW MATERIAL</Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container >
                <Grid container item xs={12} spacing={0}>
                    <Grid item xs={3}>
                        <Paper className={classes.left}>
                            <div>
                                <ListItemIcon className={classes.icon}>
                                    <AssignmentOutlinedIcon />
                                </ListItemIcon>
                            </div>
                            <div className={classes.one}>
                                <div style={{ fontSize: 12 }}>Today's Sales</div>
                                <div style={{ fontSize: 15, marginTop: 5 }}><b>Rs. 45,500</b></div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.right}>
                            <Grid item xs={4}>
                                <div style={{ fontSize: 12 }}>Orders Received Today</div>
                                <div style={{ fontSize: 15 }}><b>12</b></div>
                            </Grid>
                            <div>
                                <Divider orientation="vertical" />
                            </div>
                            <Grid item xs={4} >
                                <div style={{ fontSize: 12 }}>Orders Completed Today</div>
                                <div style={{ fontSize: 15 }}><b>8</b></div>
                            </Grid>
                            <div>
                                <Divider orientation="vertical" />
                            </div>
                            <Grid item xs={4} >
                                <div style={{ fontSize: 12 }}>Orders Dispatched Today</div>
                                <div style={{ fontSize: 15 }}><b>5</b></div>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={3}>
                        <Paper className={classes.left}>
                            <div>
                                <ListItemIcon className={classes.icon}>
                                    <ListAltOutlinedIcon />
                                </ListItemIcon>
                            </div>
                            <div className={classes.one} >
                                <div style={{ fontSize: 12 }}>Payments Received Today</div>
                                <div style={{ fontSize: 15, marginTop: 5 }}><b>Rs 15,000</b></div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.right}>
                            <Grid item xs={4}>
                                <div style={{ fontSize: 12 }}>Invoices Created Today</div>
                                <div style={{ fontSize: 15 }}><b>6</b></div>
                            </Grid>
                            <div>
                                <Divider orientation="vertical" />
                            </div>
                            <Grid item xs={4} >
                                <div style={{ fontSize: 12 }}>Total Overview Invioces</div>
                                <div style={{ fontSize: 15 }}><b>3</b></div>
                            </Grid>
                            <div>
                                <Divider orientation="vertical" />
                            </div>
                            <Grid item xs={4} >
                                <div style={{ fontSize: 12 }}>Total Overdue Amount</div>
                                <div style={{ fontSize: 15 }}><b>Rs 1,15,780</b></div>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={3}>
                        <Paper className={classes.left}>
                            <div>
                                <ListItemIcon className={classes.icon}>
                                    <LoyaltyOutlinedIcon />
                                </ListItemIcon>
                            </div>
                            <div className={classes.one}>
                                <div style={{ fontSize: 12 }}>Total Stock Value </div>
                                <div style={{ fontSize: 15, marginTop: 5 }}><b>Rs 5,45,685</b></div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.right}>
                            <Grid item xs={4}>
                                <div style={{ fontSize: 12 }}>Items in Stock</div>
                                <div style={{ fontSize: 15 }}><b>27</b></div>
                            </Grid>
                            <div>
                                <Divider orientation="vertical" />
                            </div>
                            <Grid item xs={4} >
                                <div style={{ fontSize: 12 }}>Low Stock Items</div>
                                <div style={{ fontSize: 15 }}><b>3</b></div>
                            </Grid>
                            <div>
                                <Divider orientation="vertical" />
                            </div>
                            <Grid item xs={4} >
                                <div style={{ fontSize: 12 }}>Out of Stock Items</div>
                                <div style={{ fontSize: 15 }}><b>1</b></div>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Paper className={classes.sales}>
                        <Chart />
                    </Paper>
                </Grid>
                <Grid item xs={4} spacing={1}>

                    <Paper className={classes.sales}>
                        <div style={{ color: "#261f68", textAlign: "left", fontSize: 16 }}><b>APPROVALS</b></div>
                        <Grid >
                            <Paper className={classes.appr}>
                                <Grid container className={classes.approvals}>
                                    <Grid item xs={9} className={classes.two} >
                                        <div><b>NEW PURCHASE ORDER</b></div>
                                        <div>Item Name (Q),Item Name (Q)...</div>
                                        <div>Rs.25,000</div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button style={{ color: "#00802b" }}>ACCEPT</Button>
                                        <Button style={{ color: "#e60000" }}>DECLINE</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid >
                            <Paper className={classes.appr}>
                                <Grid container className={classes.approvals}>
                                    <Grid item xs={9} className={classes.two} >
                                        <div><b>NEW INVOICE FORM</b></div>
                                        <div>Customer  Name</div>
                                        <div> Overdue invioce of Rs.25,000</div>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button style={{ color: "#00802b" }}>ACCEPT</Button>
                                        <Button style={{ color: "#e60000" }}>DECLINE</Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
}