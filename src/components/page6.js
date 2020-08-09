import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useRecoilState } from 'recoil';
import { feedback } from './fbAtom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import TextFieldMui from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    white: {
        margin: theme.spacing(2),
        color: 'white',
    },
}));
  
const styles = muiTheme => ({
    label: {
      "&$focusedLabel": {
        color: "white"
      },
      "&$erroredLabel": {
        color: "white"
      },
      color: "white"
    },
    focusedLabel: {},
    erroredLabel: {},
    underline: {
      "&$error:after": {
        borderBottomColor: "white"
      },
      "&:after": {
        borderBottom: `2px solid white`
      }
    },

    error: {},
  });
const TextField = withStyles(styles)(function TextField({ classes, ...props }) {
    return (
      <TextFieldMui
        InputLabelProps={{
          classes: {
            root: classes.label,
            focused: classes.focusedLabel,
            error: classes.erroredLabel
          }
        }}
        InputProps={{
          classes: {
            root: classes.underline,
            error: classes.error
          }
        }}
        {...props}
      />
    );
  });

const Page6 = ({ prevPage, nextPage }) => {
    const classes = useStyles();
    const [fb, setFb] = useRecoilState(feedback);
    return (
        <div className='content-area page-5' >
            <div className='body-content '>
                <TextField
                        label="What have you enjoyed the most as a Bhumi volunteer?"
                        id="outlined-size-normal"
                        defaultValue=""
                        value={fb.expereince}
                        onChange={(e) => setFb({ ...fb, expereince: e.target.value })}
                        placeholder='Enter here'
                        variant="outlined"
                        className= {classes.white }
                />
                <TextField
                        label="Mention any 2 skills acquired/honed during your volunteering journey?"
                        id="outlined-size-normal"
                        defaultValue=""
                        value={fb.skillsAcquired}
                        onChange={(e) => setFb({ ...fb, skillsAcquired: e.target.value })}
                        placeholder='Enter here'
                        variant="outlined"
                        className= {classes.white }
                />
                <TextField
                        label="Mention any 2 skills acquired/honed during your volunteering journey?"
                        id="outlined-size-normal"
                        defaultValue=""
                        value={fb.skillsAcquired}
                        onChange={(e) => setFb({ ...fb, skillsAcquired: e.target.value })}
                        placeholder='Enter here'
                        variant="outlined"
                        className= {classes.white }
                />
                <TextField
                        label="What could be improved to make your volunteering experience more enjoyable and fruitful?"
                        id="outlined-size-normal"
                        defaultValue=""
                        value={fb.suggestions}
                        onChange={(e) => setFb({ ...fb, suggestions: e.target.value })}
                        placeholder='Enter here'
                        variant="outlined"
                        className= {classes.white }
                />
                <TextField
                        label="Is there anything else you would like us to know about?"
                        id="outlined-size-normal"
                        defaultValue=""
                        value={fb.feedback}
                        onChange={(e) => setFb({ ...fb, feedback: e.target.value })}
                        placeholder='Enter here'
                        variant="outlined"
                        className= {classes.white }
                />
                {/* <input type='text' className='input-field' value={fb.expereince} onChange={(e) => setFb({...fb, expereince: e.target.value }) } placeholder='What have you enjoyed the most as a Bhumi volunteer?' /> */}
                {/* <input type='text' className='input-field' value={fb.skillsAcquired} onChange={(e) => setFb({...fb, skillsAcquired: e.target.value }) } placeholder='Mention any 2 skills acquired/honed during your volunteering journey?' /> */}
                {/* <input type='text' className='input-field' value={fb.suggestions} onChange={(e) => setFb({...fb, suggestions: e.target.value }) } placeholder='What could be improved to make your volunteering experience more enjoyable and fruitful?' /> */}
                {/* <input type='text' className='input-field' value={fb.feedback} onChange={(e) => setFb({...fb, feedback: e.target.value }) } placeholder='Is there anything else you would like us to know about?' /> */}
            </div>
            <div className='body-content'> 
                <Grid justify='space-between' container spacing={24}>
                        <IconButton>
                            <ArrowBackIcon fontSize="large"   onClick={prevPage} />
                        </IconButton>
                        <IconButton>
                            <ArrowForwardIcon fontSize="large"   onClick={() => { console.log(fb); nextPage() }} />
                        </IconButton>
                </Grid>
            </div>
        </div>
    );
}

export default Page6