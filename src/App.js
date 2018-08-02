import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        color: theme.palette.text.primary,
        marginBottom: '20px'
    },
    mainButton: {
        padding: '15px',
        backgroundColor: '#E0383A',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '30px',
        marginBottom: '0px',
        '&:hover': {
            background: '#A03638'
        }
    }
});

class App extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render()
    {
        const { classes } = this.props;
        return (
          <Grid container>
            <Grid item xs={12}>
                <Grid container className="card-container top-linear-gradient">
                    <Grid item xs={2}>
                    </Grid>
                        <Grid item xs={8}>
                            <div>
                                <center><h2 className="App-title">Dear Fellow Americans</h2></center>
                            </div>
                            <br/>
                            <center>
                                <Button className={classes.mainButton} onClick={() => {this.handleClickOpen()}}>This is your call to Arts</Button>
                            </center>
                            <center>
                                <Dialog
                                open={this.state.open}
                                onClose={this.handleClose}
                                scroll="paper"
                                aria-labelledby="scroll-dialog-title"
                                >
                                    <DialogTitle id="scroll-dialog-title">
                                        Your #CallToArts
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary expandIcon={""}>
                                                <Typography className={classes.heading}><b>Step 1:</b> Create a work of art that shows the truth about this administration</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography>
                                                    President Donald Trump has pushed our country down a dangerous path of not putting weight in objective truths.
                                                    He has lied about almost <a target="_blank" href="https://www.politifact.com/personalities/donald-trump/statements/byruling/false/">everything</a>.
                                                    We need you to use your free time to create a work of art that tells a truth. A truth of what this administartion is doing to us, our brothers, and sisters. The truth of what Trump's policies are doing to our elderly and our children. The truth about what is happening to our enviroment and safety of living.
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary expandIcon={""}>
                                                <Typography className={classes.heading}><b>Step 2:</b> Share it everywhere <b>(#calltoarts)</b></Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography>
                                                    Show your art in public. Perform your song on the corner of the street. Walk around with your painting and talk to fellow Americans about what you believe America stands for. Make art that matters. Tell the truth. Share your stories and art online with <b>#calltoarts</b>.
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleClose} color="primary">
                                            Close
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </center>
                        </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <div className="card-container card-margin">
                        <Grid container>
                            <Grid item xs={2}>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper className={classes.paper}>
                                    <h2>We are under attack.</h2>
                                    <p>
                                      <a href="https://www.pbs.org/newshour/show/whats-happened-to-the-truth-under-president-trump" target="_blank">The President of the United States is telling us not to believe what we see and hear.</a>
                                    </p>
                                    <p>
                                        In Helsinki, President Donald Trump showed he trusts the word of Putin over America's Intelligence Institutions on the world stage. Congress did nothing to act on this blatant betrayal of the American people. President Trump now knows he can do anything with no repercussions, even come after objective truth.
                                    </p>
                                    <center>
                                    <h3>
                                        This is your call to arts
                                    </h3>
                                    </center>
                                    <p>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary expandIcon={""}>
                                                <Typography className={classes.heading}><b>Step 1:</b> Create a work of art that shows the truth about this administration</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography>
                                                    President Donald Trump has pushed our country down a dangerous path of not putting weight in objective truths.
                                                    He has lied about almost <a target="_blank" href="https://www.politifact.com/personalities/donald-trump/statements/byruling/false/">everything</a>.
                                                    We need you to use your free time to create a work of art that tells a truth. A truth of what this administartion is doing to us, our brothers, and sisters. The truth of what Trump's policies are doing to our elderly and our children. The truth about what is happening to our enviroment and safety of living.
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary expandIcon={""}>
                                                <Typography className={classes.heading}><b>Step 2:</b> Share it everywhere <b>(#calltoarts)</b></Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography>
                                                    Show your art in public. Perform your song on the corner of the street. Walk around with your painting and talk to fellow Americans about what you believe America stands for. Make art that matters. Tell the truth. Share your stories and art online with <b>#calltoarts</b>.
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </p>
                                    <p>
                                        Let's make the world know we don't stand with Trump's attack on our democratic principals. America is still the country of Liberty and Justice for all. This is a small way we can fight to keep it that way. <b>Spread the truth</b>.
                                    </p>
                                </Paper>
                            </Grid>

                            <Grid item xs={2}>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
          </Grid>
      );
    }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

// Words to use
// <Paper className={classes.paper}>
//     <Grid container>
//         <h2>Dear Fellow Americans,</h2>
//         <p>
//           We are under attack.
//         </p>
//
//         <p>
//           <a href="https://www.theatlantic.com/international/archive/2018/07/trump-putin-press-conference-transcript/565385/" target="_blank">Official White House transcripts are being doctored.</a>
//         </p>
//         <p>
//           <a href="https://www.pbs.org/newshour/show/whats-happened-to-the-truth-under-president-trump" target="_blank">The President of the United States is telling us not to believe what we see and hear.</a>
//         </p>
//         <p>
//           President Donald Trump blamed Americans for Russia hacking our election in Helsinki. Congress did nothing to act on this blatant betrayal of the American people. President Trump now knows he can do anything with no repercussions, even come after objective truth.
//           </p>
//         <p>
//             The fear of Totalitarianism is real and as a citizen I am scared. I will vote in the midterms, but these attacks on basic truth demand instant action. <b>This problem we are facing today has never happened in the history of our country before.</b> We have to act now.
//           </p>
//           <p>
//               This is your #calltoarts. Everyone has a medium to express theirself. We need you to use your free time to create a work of art that tells a truth. A truth of what this administartion is doing to us, our brothers, and sisters. The truth of what his policies do to our elderly and our children. The truth about what is happening to out enviroment and safety of living.
//         </p>
//         <p>
//           We can still affect change. Show your art in public. Perform your song on the corner of the street. Walk around with your painting and talk to fellow Americans about what you believe America stands for. Make art that matters. Tell the truth.
//         </p>
//         <h3>
//           Let's make the world know we don't stand with Trump. America is still the country of Liberty and Justice for all. We have to fight to keep it that way.
//         </h3>
//     </Grid>
// </Paper>






//
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
//
// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });
//
// function CenteredGrid(props) {
//   const { classes } = props;
//
//   return (
//     <div className={classes.root}>
//       <Grid container spacing={24}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
//
// CenteredGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(CenteredGrid);
