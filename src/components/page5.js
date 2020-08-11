import React, { useState } from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useRecoilState } from 'recoil';
import { feedback } from './fbAtom';
import Rating from '@material-ui/lab/Rating';
import StarIcon from '@material-ui/icons/Star';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  onlyWhite: {
    color: "black",
  },
  title: {
    margin: theme.spacing(2),
    color: "black",
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    color: 'black',
    fontSize: '63px',
  },
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  whiteText: {
    color: "black",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: 'black',
  },
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  select: {
    '&:before': {
      borderColor: 'black',
    },
    '&:after': {
      borderColor: 'black',
    },
    color: "black",
  },
  selectIcon: {
    fill: 'black',
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
}));

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const StyledRating = withStyles({
  icon: {
    color: '#333333'
  },
  iconFilled: {
    color: '#ff3d47',
  },
  iconHover: {
    color: '#DB7093',
  },
})(Rating);

const StyledRating2 = withStyles({
  icon: {
    color: '#333333'
  },
  iconFilled: {
    color: '#FFDF00',
  },
  iconHover: {
    color: '#FFDF00',
  },
})(Rating);







const labels = {
  1: 'Strongly Disagree',
  2: 'Disagree',
  3: 'Somewhat Disagree',
  4: 'Somewhat Agree',
  5: 'Agree',
  6: 'Strongly Agree',
};
const Page5 = ({ prevPage, nextPage }) => {
  const classes = useStyles();
  const [fb, setFb] = useRecoilState(feedback);
  const [rating8, setRating8] = useState(-1)
  const [rating8Hover, setRating8Hover] = useState(-1)
  const [rating9, setRating9] = useState(-1)
  const [rating9Hover, setRating9Hover] = useState(-1)
  const [rating10, setRating10] = useState(-1)
  const [rating10Hover, setRating10Hover] = useState(-1)
  const [rating11, setRating11] = useState(-1)
  const [rating11Hover, setRating11Hover] = useState(-1)
  const [rating12, setRating12] = useState(-1)
  const [rating12Hover, setRating12Hover] = useState(-1)
  const [openProjectFlow, setOpenProjectFlow] = React.useState(false);

  const ValidationTheFb = () => {
    if ((fb.rating8 === -1) || ((fb.rating10 === -1)  && (fb.duration !== '<0.3' )) || (fb.rating11 === -1) || ((fb.projectFlow === null) && (fb.duration !== '<0.3' ))  || (fb.projectFlow === '')) {
      return 'Please fill everything :-)'
    }
    return true
  }
  const setAllRating = () => {
    // setFb({...fb , rating1, rating2,rating3,rating4,rating5})
  }
  return (
    <div className='content-area2 page-5 ' >
      {fb.duration === '<0.3' ? null 
      : <div className='body-content-page5 black-over'>
        <Typography align="center" className={classes.title} variant="headline" component="h3">Indicate the ease of understanding the project flow (in terms of project’s vision, goals, timelines, syllabus, assessments for kids, content delivery, knowing the POCs) </Typography>

        <FormControl className={classes.formControl}>
          <InputLabel className={classes.whiteText} id="demo-controlled-open-select-label">Select for options here</InputLabel>
          <Select

            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openProjectFlow}
            onClose={() => setOpenProjectFlow(false)}
            onOpen={() => setOpenProjectFlow(true)}
            value={fb.projectFlow}
            onChange={(e) => setFb({ ...fb, projectFlow: e.target.value })}
            className={classes.select}
            inputProps={{
              classes: {
                icon: classes.selectIcon,
              },
            }}
          >
            {/* <MenuItem  value="">
                                <em>None</em>
                            </MenuItem> */}
            <MenuItem value={'Extremely easy'}> Extremely easy  </MenuItem>
            <MenuItem value={'Quite Easy'}> Quite Easy </MenuItem>
            <MenuItem value={'Quite difficult'}> Quite difficult </MenuItem>
            <MenuItem value={'Extremely difficult'}> Extremely difficult     </MenuItem>

          </Select>
        </FormControl>
      </div>
      }
      {/* <h3 style={{ color: "black" }} > </h3>  */}
      
      <div className='body-content-page5 black-over'>
        <Typography align="center" className={classes.title} variant="headline" component="h2">I think I</Typography>

        <Typography align="center" ml={3} className={classes.title} variant="subheading" component="h4">Can dedicate more time to volunteer with Bhumi  </Typography>
        <Grid
          direction='column'
          justify="center" // Add it here :)
          container
          alignItems="center"
          spacing={0}
        >
          <Grid justify="center" item>
            <StyledRating
              max={6}
              name="rating8"
              precision={1}
              icon={<FavoriteIcon fontSize="large" color='black' />}
              value={fb.rating8}
              onChange={(event, newValue) => {
                // setRating1(newValue);
                setFb({ ...fb, rating8: newValue })
              }}
              onChangeActive={(event, newHover) => {
                setRating8Hover(newHover);
              }}
            />
          </Grid>
          <Grid justify="center" item>
            {fb.rating8 !== null ? <Box className={classes.onlyWhite} >{labels[rating8Hover !== -1 ? rating8Hover : fb.rating8]}</Box> : <Box className={classes.onlyWhite}> Nothing Selected. </Box>}
          </Grid>
        </Grid>
        
        {fb.duration === '<0.3' ? null 
        : <> <Typography align="center" ml={3} className={classes.title} variant="subheading" component="h4"> Understand the impact created through my volunteering work </Typography>
        <Grid
          direction='column'
          justify="center" // Add it here :)
          container
          alignItems="center"
          spacing={0}
        >
          <Grid justify="center" item>
            <StyledRating
              max={6}
              name="rating10"
              precision={1}
              icon={<FavoriteIcon fontSize="large" color='black' />}
              value={fb.rating10}
              onChange={(event, newValue) => {
                // setRating3(newValue);
                setFb({ ...fb, rating10: newValue })

              }}
              onChangeActive={(event, newHover) => {
                setRating10Hover(newHover);
              }}
            />
          </Grid>

          <Grid justify="center" item>
            {fb.rating10 !== null && <Box className={classes.onlyWhite} ml={2}>{labels[rating10Hover !== -1 ? rating10Hover : fb.rating10]}</Box>}
          </Grid>
        </Grid>
        </>
        }
        <Typography align="center" ml={3} className={classes.title} variant="subheading" component="h4">Am content with the volunteer training sessions that are in place </Typography>
        <Grid
          direction='column'
          justify="center" // Add it here :)
          container
          alignItems="center"
          spacing={0}
        >
          <Grid justify="center" item>
            <StyledRating
              max={6}
              name="rating11"
              precision={1}
              icon={<FavoriteIcon fontSize="large" color='black' />}
              value={fb.rating11}
              onChange={(event, newValue) => {
                // setRating4(newValue);
                setFb({ ...fb, rating11: newValue })
              }}
              onChangeActive={(event, newHover) => {
                setRating11Hover(newHover);
              }}
            />
          </Grid>
          <Grid>
            {fb.rating11 !== null && <Box className={classes.onlyWhite} >{labels[rating11Hover !== -1 ? rating11Hover : fb.rating11]}</Box>}
          </Grid>
        </Grid>


      </div>

      <div className='body-content-big '>
        <Grid justify='space-between' container spacing={24}>
          <IconButton>
            <ArrowBackIcon style={{ fontSize: 40, color: '#333333' }} onClick={prevPage} />
          </IconButton>
          <IconButton>
            <ArrowForwardIcon
              style={{ fontSize: 40, color: '#333333' }}
              onClick={() => {
                console.log(fb);
                let val = ValidationTheFb()
                if (val === true) {
                  nextPage()
                } else {
                  alert(val)
                }
              }}
            />
          </IconButton>
        </Grid>
      </div>
    </div>

  );
}

export default Page5