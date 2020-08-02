import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LatestChanges from "./components/LatestChanges";
import UserForm from "./components/UserForm";
import { latestChangesData } from "./staticData";

const useStyles = makeStyles((theme) => ({
  loaderRoot: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  // app: {
  //   textAlign: 'center',
  // },
  userFormLatestChngCont: {
    display: 'flex',
    padding: '10px',
    justifyContent: 'center',
  }
}));

const App = () => {

  const classes = useStyles();
  const [latestChanges, setLatestChanges] = useState([]);

  useEffect(() => {
    setLatestChanges(latestChangesData);
  }, [])

  return (
    latestChanges.length > 0 ? 
      <section className={classes.userFormLatestChngCont}>
        <UserForm latestChanges={latestChanges} />
        <LatestChanges latestChanges={latestChanges} />
      </section> : <CircularProgress />
  );
}

export default App;
