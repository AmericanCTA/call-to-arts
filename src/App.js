import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.primary,
},
a:{color:'black'}
});

function App (props){
    const { classes } = props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Call To Arts</h1>
        </header>
        <p className="App-intro">
        <div className={classes.root}>
              <Grid container>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={10}>
                  <Paper className={classes.paper}>
                        <h2>Dear Fellow Americans,</h2>
                      <p>
                        We are under attack.
                      </p>

                      <p>
                        <a href="https://www.theatlantic.com/international/archive/2018/07/trump-putin-press-conference-transcript/565385/" target="_blank">Official White House transcripts are being doctored.</a>
                      </p>
                      <p>
                        <a href="https://www.pbs.org/newshour/show/whats-happened-to-the-truth-under-president-trump" target="_blank">The President of the United States is telling us not to believe what we see and hear.</a>
                      </p>
                      <p>
                        President Donald Trump blamed Americans for Russia hacking our election in Helsinki. Congress did nothing to act on this blatant betrayal of the American people. President Trump knows he can do anything now with no repercussions, even come after objective truth.
                        </p>
                      <p>
                          The fear of Totalitarianism is real and as a citizen I am scared. I will vote in the midterms, but these attacks on basic truth demand instant action. <b>This problem we are facing today has never happened in the history of our country before.</b> We have to act now.
                        </p>
                        <p>
                            This is your #calltoarts. Everyone has a medium to express theirself. We need you to use your free time to create a work of art that tells a truth. A truth of what this administartion is doing to us, our brothers, and sisters. The truth of what his policies do to our elderly and our children. The truth about what is happening to out enviroment and safety of living.
                      </p>
                      <p>
                        We can still affect change. Show your art in public. Perform your song on the corner of the street. Walk around with your painting and talk to fellow Americans about what you believe America stands for. Make art that matters. Tell the truth.
                      </p>
                      <h3>
                        Let's make the world know we don't stand with Trump. America is still the country of Liberty and Justice for all. We have to fight to keep it that way.
                      </h3>
                  </Paper>
                </Grid>
                <Grid item xs={1}>
                </Grid>
              </Grid>
            </div>
        </p>
      </div>
    );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
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
