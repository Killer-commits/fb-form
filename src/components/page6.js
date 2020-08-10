import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useRecoilState } from 'recoil';
import { feedback, loadingAtom } from './fbAtom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import TextFieldMui from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  white: {
    margin: theme.spacing(2),
    color: 'white',
  },
  onlyWhite: {
    color: 'white',
    marginTop : '10%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cssLabel: {
    color: 'white',
    "&$cssFocused": {
      color: "gray"
    },
    marginRight : '3%',
    marginTop : '2%',
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
    borderColor: 'white !important',
    // padding: '20px',
    margin : '-1%',
  },

}));

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
  root: {
    background: styledBy('color', {
      default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }),
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: styledBy('color', {
      default: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }),
  },
};


const StyledButton = withStyles(styles)(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));


const Page6 = ({ prevPage, nextPage }) => {
  const classes = useStyles();
  const [fb, setFb] = useRecoilState(feedback);
  const ValidationTheFb = () => {
    if ((fb.feedback === null) || (fb.suggestions === null) || (fb.experience === null) || (fb.skillsAcquired === null)) {
      return 'Please write few words for the all questions :-)'
    }
    if ((fb.feedback.length < 4) || (fb.suggestions.length < 4) || (fb.experience.length < 4) || (fb.skillsAcquired.length < 4)) {
      return 'Please write few words for the all questions :-)'
    }
    
    return true
  }
  const [loading, setLoading] = useRecoilState(loadingAtom)
  const PostFb = () => {

    setLoading(true)
    let  data = JSON.stringify(fb)
    let config = {
      method: 'post',
      url: window.origin + '/api/post/form',
      // url: 'http://localhost:5000' + '/api/post/form',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
      .then(
        res => {
          setLoading(false)
          if (res.status === 200) {
              
          } else if(res.status === 401) {
              console.log(res)
              if (res.data.includes('UNIQUE')) {
                alert('You have already filled')
              } else {
                alert('Something went wrong , Please try again later')
              }
          } else {
            alert('Something went wrong , Please try again later');
          }
        },
        err => {
          setLoading(false)
          console.log(err)
          if( err.response ){
            if(err.response.data.includes('UNIQUE')){
              alert('You have already filled')
              return 
            }
          }
          alert('Something went wrong , Please try again later');
        }
      )
  }
  return (
    <div className='content-area2 page-6' >
      <div className='body-content-page6 black-over'>
        <TextField
          label="What have you enjoyed the most as a Bhumi volunteer?"
          id="outlined-multiline-static"
          defaultValue=""
          value={fb.experience}
          onChange={(e) => setFb({ ...fb, experience: e.target.value })}
          placeholder='Enter here'
          variant="outlined"
          className={classes.white}
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
            className: classes.onlyWhite
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
          className={classes.white}
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
            className: classes.onlyWhite
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
          className={classes.white}
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
            className: classes.onlyWhite
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
          className={classes.white}
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
            className: classes.onlyWhite
          }}
        />
       </div>
      <div className='body-content-page6'>
        <Grid justify='space-between' container spacing={24}>
          <IconButton>
            <ArrowBackIcon style={{ fontSize: 40, color: '#222222' }} onClick={prevPage} />
          </IconButton>
          <StyledButton 
              size="large" 
              color={'blue'}
              onClick={() => {
                console.log(fb);
                let val = ValidationTheFb()
                if (val === true) {
                  PostFb()
                  nextPage()
                } else {
                  alert(val)
                }
              }}
            >  Submit </StyledButton>
        </Grid>
      </div>
    </div>
  );
}

export default Page6