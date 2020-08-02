import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import HeadwayImage from "../assets/transparent-headway-symbol.png";
import HandWave from "../assets/hand-wave.png";
import PartyIcon from "../assets/party-icon.png";

const useStyles = makeStyles((theme) => ({
  userFormRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: '20px',
    '& > *': {
      margin: theme.spacing(1),
      width: '300px',
      height: '526px',
      borderRadius: '8px',
    },
    '& a': {
      textDecoration: 'none',
      fontSize: '12px',
      color: '#3b70ec',
    }
  },
  userFormHeader: {
    backgroundColor: '#3b70ec',
    color: "#fff",
    borderRadius: '8px 8px 0 0',
    '& > img': {
      height: '30px',
      width: '30px',
    },
    padding: '20px',
  },
  hiThereText: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    marginTop: '10px',
    '& > img': {
      marginLeft: '5px'
    }
  },
  askUsAnything: {
    fontSize: '12px',
    margin: '10px 0 55px 0',
    color: '#c7d6fa'
  },
  convRoot: {
    width: '90%',
    margin: 'auto',
    position: 'relative',
    bottom: '58px',
    marginBottom: '10px',
    boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.2)',
  },
  latestChangesRoot: {
    width: '90%',
    margin: 'auto',
    position: 'relative',
    bottom: '52px',
    marginBottom: '10px',
    borderTop: '1px solid #3b70ec',
    boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.2)',
  },
  backTomorrowText: {
    fontSize: '12px',
    margin: '5px',
    color: '#8d8e9b',
  },
  startConvText: {
    fontSize: '14px',
    fontWeight: '500',
  },
  button: {
    fontSize: '9px',
    borderRadius: '20px',
    textTransform: 'capitalize',
    backgroundColor: '#3b70ec',
    height: '28px',
    '&:hover': {
      backgroundColor: '#3b70ec',
    }
  },
  chipRoot: {
    fontSize: '16px',
    borderRadius: '50%',
    height: '40px',
    width: '40px',
    backgroundColor: '#0c328b',
    color: "#fff",
    marginRight: '10px',
  },
  buttonChipCont: {
    margin: '12px 0',
  },
  nameInput: {
    marginBottom: '5px'
  },
  latestChangesContent: {
    display: 'flex',
    padding: 0,
    flexDirection: 'column',
    '& img': {
      height: '25px',
      width: '25px',
    },
    '&:last-child': {
      paddingBottom: 0
    }
  },
  latestChangeBlock: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    padding: '5px 14px',
    borderBottom: '1px solid #e0e0e0',
  }
}));

const UserForm = props => {
  const classes = useStyles();  
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    sessionStorage.getItem("userLoggedIn") && setLoggedInUser(sessionStorage.getItem("userLoggedIn"));
  }, []);

  const handleNameChange = event => {
    if(event && event.target.value !== "") {
      setLoggedInUser(event.target.value);
      sessionStorage.setItem('userLoggedIn', event.target.value);
    } else {
      setLoggedInUser("");
      sessionStorage.removeItem('userLoggedIn');
    }
  }

  const renderLatestChanges = () => {
    return props.latestChanges.map(ele => {
      return (
        <div key={ele.key} className={classes.latestChangeBlock}>
          <a href="#link">{ele.title}</a>
        </div>
      )
    })
  }
  return (
    <section className={classes.userFormRoot}>
      <Paper elevation={3}>
        <header className={classes.userFormHeader}>
          <img src={HeadwayImage} alt="headway" />
          <div className={classes.hiThereText}>Hi there
            <img src={HandWave} alt='handwave'></img>
          </div>
          <div className={classes.askUsAnything}>Ask us anything, or share your feedback.</div>
        </header>
        <Card className={classes.convRoot}>
          <CardContent>          
            <div className={classes.startConvText}>Start a conversation</div>
            <div className={classes.backTomorrowText}>Back tomorrow</div>
            <div className={classes.buttonChipCont}>
              <Chip className={classes.chipRoot} label={loggedInUser && loggedInUser[0].toUpperCase()} />
              <Button variant="contained" color="primary" className={classes.button}
                startIcon={<SendIcon/>}>
                New conversation
              </Button>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField className={classes.nameInput} size="small" id="outlined-basic" label="Enter Name" 
                variant="outlined" value={loggedInUser} onChange={handleNameChange}/>
            </form>
            <a href="#link">See previous</a>
          </CardContent>
        </Card>
        <Card className={classes.latestChangesRoot}>
          <CardContent className={classes.latestChangesContent}>          
            <div className={`${classes.startConvText} ${classes.latestChangeBlock}`}>
              Latest Changes <img src={PartyIcon} alt="partyicon" />
            </div>
            {renderLatestChanges()}
          </CardContent>
        </Card>
      </Paper>
    </section>
  );
}

export default UserForm;
