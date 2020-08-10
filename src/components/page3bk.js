import React from 'react';
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


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    title:{
        margin: theme.spacing(2),
        color: "white",
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
        color: 'white',
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
    icon:{
        color : '#333333'
    },
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

const Page3 = ({ prevPage, nextPage }) => {
    const classes = useStyles();
    const [fb, setFb] = useRecoilState(feedback);

    return (
        <div className='content-area page-3 ' >
            {/* <h3 style={{ color: "black" }} > </h3>  */}
            <div className='body-content-page3 black-over'>
                <Typography  className={classes.title}   variant="headline" component="h3"> Rate the lead coordinators of your project in the following aspects. </Typography>
                
                <Box p={1} m={1}  display="flex"   flexDirection="row" borderColor="transparent">
                    <Box justifyContent="center"  p={1}>
                        <Typography  className={classes.title}  component="legend">Bringing inclusivity in project discussions, plans and setting up goals </Typography>
                    </Box>
                    <Box justifyContent="center"  p={1}>
                        <StyledRating
                            max={6}
                            name="customized-color"
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={1}
                            icon={<FavoriteIcon fontSize="inherit" color='white' />}
                        />
                    </Box>
                </Box>
                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend">
                        <span style={{ color: "white" }} >
                        Bringing inclusivity in project discussions, plans and setting up goals 
                        </span>
                    </FormLabel> 
                        <RadioGroup aria-label="gender" name="gender1" value={fb.rating1} onChange={(e) => setFb({...fb, rating1:e.target.value})} row>
                        <FormControlLabel value="Strongly Agree" control={<StyledRadio  />} label="Strongly Agree" />
                        <FormControlLabel value="Agree" control={<StyledRadio  />} label="Agree" />
                        <FormControlLabel value="Somewhat Agree" control={<StyledRadio  />} label="Somewhat Agree" />
                        <FormControlLabel value="Somewhat Disagree" control={<StyledRadio  />} label="Somewhat Disagree" />
                        <FormControlLabel value="Disagree" control={<StyledRadio  />} label="Disagree" />
                        <FormControlLabel value="Strongly Disagree" control={<StyledRadio  />} label="Strongly Disagree" />
                    </RadioGroup>
                </FormControl>

                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend">
                        <span style={{ color: "white" }} >
                        Addressing all your queries/concerns and staying supportive 
                        </span>
                    </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={fb.rating2} onChange={(e) =>  setFb({...fb, rating2:e.target.value})} row>
                        <FormControlLabel value="Strongly Agree" control={<StyledRadio  />} label="Strongly Agree" />
                        <FormControlLabel value="Agree" control={<StyledRadio  />} label="Agree" />
                        <FormControlLabel value="Somewhat Agree" control={<StyledRadio  />} label="Somewhat Agree" />
                        <FormControlLabel value="Somewhat Disagree" control={<StyledRadio  />} label="Somewhat Disagree" />
                        <FormControlLabel value="Disagree" control={<StyledRadio  />} label="Disagree" />
                        <FormControlLabel value="Strongly Disagree" control={<StyledRadio  />} label="Strongly Disagree" />
                    </RadioGroup>
                </FormControl>

                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend">
                        <span style={{ color: "white" }} >
                        Addressing all your queries/concerns and staying supportive 
                        </span>
                    </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={fb.rating3} onChange={(e) => setFb({...fb, rating3:e.target.value})} row>
                        <FormControlLabel value="Strongly Agree" control={<StyledRadio  />} label="Strongly Agree" />
                        <FormControlLabel value="Agree" control={<StyledRadio  />} label="Agree" />
                        <FormControlLabel value="Somewhat Agree" control={<StyledRadio  />} label="Somewhat Agree" />
                        <FormControlLabel value="Somewhat Disagree" control={<StyledRadio  />} label="Somewhat Disagree" />
                        <FormControlLabel value="Disagree" control={<StyledRadio  />} label="Disagree" />
                        <FormControlLabel value="Strongly Disagree" control={<StyledRadio  />} label="Strongly Disagree" />
                    </RadioGroup>
                </FormControl>

                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend">
                        <span style={{ color: "white" }} >
                        Creating a positive volunteering environment (appreciation, feedback sessions, volunteer meetups
                        </span>
                    </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={fb.rating4} onChange={(e) => setFb({...fb, rating4:e.target.value})} row>
                        <FormControlLabel value="Strongly Agree" control={<StyledRadio  />} label="Strongly Agree" />
                        <FormControlLabel value="Agree" control={<StyledRadio  />} label="Agree" />
                        <FormControlLabel value="Somewhat Agree" control={<StyledRadio  />} label="Somewhat Agree" />
                        <FormControlLabel value="Somewhat Disagree" control={<StyledRadio  />} label="Somewhat Disagree" />
                        <FormControlLabel value="Disagree" control={<StyledRadio  />} label="Disagree" />
                        <FormControlLabel value="Strongly Disagree" control={<StyledRadio  />} label="Strongly Disagree" />
                    </RadioGroup>
                </FormControl>


                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend">
                        <span style={{ color: "white" }} >
                            Encouraging you to take part in all other volunteering activities (events, webinars) in Bhumi 
                        </span>
                    </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={fb.rating5} onChange={(e) => setFb({...fb, rating5:e.target.value})} row>
                        <FormControlLabel value="Strongly Agree" control={<StyledRadio  />} label="Strongly Agree" />
                        <FormControlLabel value="Agree" control={<StyledRadio  />} label="Agree" />
                        <FormControlLabel value="Somewhat Agree" control={<StyledRadio  />} label="Somewhat Agree" />
                        <FormControlLabel value="Somewhat Disagree" control={<StyledRadio  />} label="Somewhat Disagree" />
                        <FormControlLabel value="Disagree" control={<StyledRadio  />} label="Disagree" />
                        <FormControlLabel value="Strongly Disagree" control={<StyledRadio  />} label="Strongly Disagree" />
                    </RadioGroup>
                </FormControl>

                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend">
                        <span style={{ color: "white" }} >
                            Taking ownership and accountability in resolving issues (if any)
                        </span>
                    </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={fb.rating6} onChange={(e) => setFb({...fb, rating6:e.target.value})} row>
                        <FormControlLabel value="Strongly Agree" control={<StyledRadio  />} label="Strongly Agree" />
                        <FormControlLabel value="Agree" control={<StyledRadio  />} label="Agree" />
                        <FormControlLabel value="Somewhat Agree" control={<StyledRadio  />} label="Somewhat Agree" />
                        <FormControlLabel value="Somewhat Disagree" control={<StyledRadio  />} label="Somewhat Disagree" />
                        <FormControlLabel value="Disagree" control={<StyledRadio  />} label="Disagree" />
                        <FormControlLabel value="Strongly Disagree" control={<StyledRadio  />} label="Strongly Disagree" />
                    </RadioGroup>
                </FormControl>
            </div>
            
            <div className='body-content-big '> 
                <Grid justify='space-between' container spacing={24}>
                        <IconButton>
                            <ArrowBackIcon  style={{ fontSize: 60, color:'#333333' }} onClick={prevPage} />
                        </IconButton>
                        <IconButton>
                            <ArrowForwardIcon  style={{ fontSize: 60, color:'#333333' }} onClick={() => { console.log(fb); nextPage() }} />
                        </IconButton>
                </Grid>
            </div>
        </div>

    );
}

export default Page3