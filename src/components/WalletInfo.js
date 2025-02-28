import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../images/avatar.png';
import ShareIcon from '@material-ui/icons/Share';

const style = (theme) => ({
  grid: {
    height: '112px',
    width: '100%',
    position: 'relative',
    padding: '8px 24px',
  },
  icon: {
    position: 'absolute',
    top: '8px',
    right: '24px',
    color: '#86C232',
    height: '32px',
    width: '32px',
  },
  title: {
    width: '100%',
    color: 'rgba(34, 34, 34, 0.6)',
  },
  avatar: {
    height: '64px',
    width: '64px',
  },
  tokenCount: {
    color: 'rgba(34, 34, 34, 0.6)',
  },
});

function WalletInfo(props) {
  const { classes } = props;
  return (
    <>
      <Grid container className={classes.grid} p={2}>
        <ShareIcon className={classes.icon} />
        <Grid item className={classes.title}>
          <Typography>WALLET</Typography>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item>
            <Avatar src={avatar} className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography variant="h6">@Stephanie</Typography>
            <Typography variant="body1" className={classes.tokenCount}>
              127 tokens
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(style)(WalletInfo);
