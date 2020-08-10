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
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import TextFieldMui from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  white: {
    margin: theme.spacing(2),
    color: 'white',
  },
  onlyWhite: {
    color: 'white',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cssLabel: {
    color: 'white',
    "&$cssFocused": {
      color: "white"
    },
  },


  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      // borderColor: `${theme.palette.primary.main} !important`,
      borderColor: `white !important`,
    }
  },

  cssFocused: {},
  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important'
  },

}));





const Page6 = ({ prevPage, nextPage }) => {
  const classes = useStyles();
  const [fb, setFb] = useRecoilState(feedback);
  const ValidationTheFb = () => {
        if ((fb.feedback.length < 4 ) || (fb.suggestions.length < 4 ) || (fb.experience.length < 4 ) || (fb.skillsAcquired.length <  null )  ){
            return 'Please write few words in everything :-)'
        }
        return true
    }
  return (
    <div className='content-area page-5' >
      <div className='body-content-page5 black-over'>
        <TextField
          label="What have you enjoyed the most as a Bhumi volunteer?"
          id="outlined-multiline-static"
          defaultValue=""
          value={fb.experience}
          onChange={(e) => setFb({ ...fb, experience: e.target.value })}
          placeholder='Enter here'
          variant="outlined"
          className= {classes.white }
          rows={4}
          multiline
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },

          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            className : classes.onlyWhite
          }}
        />
        <TextField
          label="Mention any 2 skills acquired/honed during your volunteering journey?"
          id="outlined-multiline-static"
          defaultValue=""
          value={fb.skillsAcquired}
          onChange={(e) => setFb({ ...fb, skillsAcquired: e.target.value })}
          placeholder='Enter here'
          variant="outlined"
          className= {classes.white }
          rows={4}
          multiline
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            className : classes.onlyWhite
          }}
        />

        <TextField
          label="What could be improved to make your volunteering experience more enjoyable and fruitful?"
          id="outlined-multiline-static"
          defaultValue=""
          value={fb.suggestions}
          onChange={(e) => setFb({ ...fb, suggestions: e.target.value })}
          placeholder='Enter here'
          variant="outlined"
          className= {classes.white }
          rows={4}
          multiline
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            className : classes.onlyWhite
          }}
        />
        <TextField
          label="Is there anything else you would like us to know about?"
          id="outlined-multiline-static"
          defaultValue=""
          value={fb.feedback}
          onChange={(e) => setFb({ ...fb, feedback: e.target.value })}
          placeholder='Enter here'
          variant="outlined"
          className= {classes.white }
          rows={4}
          multiline
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            className : classes.onlyWhite
          }}
        />
        {/* <input type='text' className='input-field' value={fb.experience} onChange={(e) => setFb({...fb, experience: e.target.value }) } placeholder='What have you enjoyed the most as a Bhumi volunteer?' /> */}
        {/* <input type='text' className='input-field' value={fb.skillsAcquired} onChange={(e) => setFb({...fb, skillsAcquired: e.target.value }) } placeholder='Mention any 2 skills acquired/honed during your volunteering journey?' /> */}
        {/* <input type='text' className='input-field' value={fb.suggestions} onChange={(e) => setFb({...fb, suggestions: e.target.value }) } placeholder='What could be improved to make your volunteering experience more enjoyable and fruitful?' /> */}
        {/* <input type='text' className='input-field' value={fb.feedback} onChange={(e) => setFb({...fb, feedback: e.target.value }) } placeholder='Is there anything else you would like us to know about?' /> */}
      </div>
      <div className='body-content-page5'>
        <Grid justify='space-between' container spacing={24}>
          <IconButton>
            <ArrowBackIcon  style={{ fontSize: 60, color:'#222222' }} onClick={prevPage} />
          </IconButton>
          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              fontSize: "24px",
              fontWeight : "bold"

            }}
            color="#333333"
            onClick={   () => { 
              console.log(fb); 
              let val = ValidationTheFb()     
              if (val === true) {
                  nextPage()
              } else {
                  alert(val)
              }
            }}
          > Submit </Button>
        </Grid>
      </div>
    </div>
  );
}

export default Page6