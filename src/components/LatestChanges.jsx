import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  latestChangesRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '20px',
    '& > *': {
      margin: theme.spacing(1),
      width: '300px',
      height: '540px',
      borderRadius: '8px',
    },
  },
  latestChangesHeader: {
    padding: '20px 0px',
    display: 'flex',
    backgroundColor: '#5b8bf7',
    color: '#fff',
    borderRadius: '8px 8px 0 0',
  },
  latestChangesText: {
    fontSize: '14px',
    alignSelf: 'center',
    margin: '0 70px 0 95px',
  },
  closeIconRoot: {
    marginRight: '18px',
    fontSize: '18px',
  },
  allDetails: {
    height: '87%',
    overflowY: 'scroll',
  },
  detailRoot: {
    padding: '12px',
    borderBottom: '1px solid #e0e0e0',
  },
  changeTitle: {
    fontWeight: '600',
    marginBottom: '12px',
    color: '#505962'
  },
  chipRoot: {
    color: '#fff',
    height: '17px',
    fontSize: '10px',
    marginRight: '10px',
  },
  newChipColor: {
    backgroundColor: '#5b8bf7'
  },
  fixChipColor: {
    backgroundColor: '#ec5774' 
  },
  publishedOnStyle: {
    fontSize: '14px',
    color: '#bbbfc3'
  },
  statusPublishedOnRoot: {
    marginBottom: '12px',
  },
  summaryStyle: {
    fontSize: '12px',
    color: '#505962',
    '& a': {
      textDecoration: 'none',
      color: '#3b70ec',
    },
    '& p': {
      lineHeight: '1.5',
    },
    '& div': {
      margin: '20px 0 5px 40px',
      color: '#222',
    },
    '& img': {
      marginLeft: '30px',
    }
  },
  footerStyle: {
    fontSize: '10px',
    textAlign: 'center',
    color: '#bbbfc3'
  }
}));

const LatestChanges = props => {
  const classes = useStyles();  
  
  const renderLatestChanges = () => {
    return props.latestChanges.map(ele => {
      const chipRootStyle = `${classes.chipRoot} ${ele.status === 'New' ? 
        classes.newChipColor : classes.fixChipColor}` 
      return (
        <div className={classes.detailRoot} key={ele.key}>
          <div className={classes.changeTitle}>{ele.title}</div>
          <div className={classes.statusPublishedOnRoot}>
            <Chip className={chipRootStyle} label={ele.status} />
            <span className={classes.publishedOnStyle}>{ele.publishedOn}</span>
          </div>
          <div className={classes.summaryStyle} dangerouslySetInnerHTML={{__html: ele.summary}}></div>
        </div>
      )
    })
  }
  return (
    <section className={classes.latestChangesRoot}>
      <Paper elevation={3}>
        <header className={classes.latestChangesHeader}>
          <div className={classes.latestChangesText}>Latest Changes
          </div>
          <CloseIcon className={classes.closeIconRoot}/>
        </header>
        <div className={classes.allDetails}>{renderLatestChanges()}</div>
        <footer className={classes.footerStyle}><u>Headway changelog</u> powered by <u>Headway</u></footer>
      </Paper>
    </section>
  );
}

export default LatestChanges;
