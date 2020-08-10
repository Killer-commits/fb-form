import React , { useState }from 'react';
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
    onlyWhite:{
        color: "white",
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

  





  const labels = {
    1: 'Strongly Disagree',
    2: 'Disagree',
    3: 'Somewhat Disagree',
    4: 'Somewhat Agree',
    5: 'Agree',
    6: 'Strongly Agree',
  };
const Page3 = ({ prevPage, nextPage }) => {
    const classes = useStyles();
    const [fb, setFb] = useRecoilState(feedback);
    const [rating1, setRating1] = useState(-1)
    const [rating1Hover, setRating1Hover] = useState(-1)
    const [rating2, setRating2] = useState(-1)
    const [rating2Hover, setRating2Hover] = useState(-1)
    const [rating3, setRating3] = useState(-1)
    const [rating3Hover, setRating3Hover] = useState(-1)
    const [rating4, setRating4] = useState(-1)
    const [rating4Hover, setRating4Hover] = useState(-1)
    const [rating5, setRating5] = useState(-1)
    const [rating5Hover, setRating5Hover] = useState(-1)

    const ValidationTheFb = () => {
        if ((fb.rating1 === -1 ) || (fb.rating2 === -1 ) || (fb.rating3 === -1 ) || (fb.rating4 === -1 ) || (fb.rating5 === -1 )){
            return 'Please fill everything :-)'
        }
        return true
    }
    const setAllRating  = () => {
        // setFb({...fb , rating1, rating2,rating3,rating4,rating5})
    }
    return (
        <div className='content-area2 page-3 ' >
            {/* <h3 style={{ color: "black" }} > </h3>  */}
            <div className='body-content-page3 black-over'>
                <Typography  className={classes.title}   variant="headline" component="h2"> Rate the lead coordinators of your project in the following aspects. </Typography>
               
                <Typography ml={3} className={classes.title}  variant="subheading" component="h4">Bringing inclusivity in project discussions, plans and setting up goals </Typography>
                <Box ml={6} mr={6}>
                    <Grid
                        justify="space-between" // Add it here :)
                        container 
                        spacing={24}
                    >
                        <Grid item>
                                <StyledRating
                                max={6}
                                name="rating1"
                                precision={1}
                                icon={<FavoriteIcon fontSize="large" color='white' />}
                                value={fb.rating1}
                                onChange={(event, newValue) => {
                                    // setRating1(newValue);
                                    setFb( { ...fb, rating1 : newValue } )
                                }}
                                onChangeActive={(event, newHover) => {
                                    setRating1Hover(newHover);
                                }}
                            />
                        </Grid>
                        <Grid item>
                            {fb.rating1 !== null && <Box className={classes.onlyWhite} >{labels[rating1Hover !== -1 ? rating1Hover : fb.rating1]}</Box>}
                        </Grid>
                    </Grid>
                </Box>

                <Typography ml={3} className={classes.title}  variant="subheading" component="h4">Addressing all your queries/concerns and staying supportive </Typography>
                <Box ml={6} mr={6}>
                    <Grid
                        justify="space-between" // Add it here :)
                        container 
                        spacing={24}
                    >
                        <Grid item>
                            <StyledRating
                                max={6}
                                name="rating2"
                                precision={1}
                                icon={<FavoriteIcon fontSize="large" color='white' />}
                                value={fb.rating2}
                                onChange={(event, newValue) => {
                                    // setRating2(newValue);
                                    setFb( { ...fb, rating2 : newValue } )

                                }}
                                onChangeActive={(event, newHover) => {
                                    setRating2Hover(newHover);
                                }}
                            />
                        </Grid>
                        <Grid>
                            {fb.rating2 !== null && <Box className={classes.onlyWhite} >{labels[rating2Hover !== -1 ? rating2Hover : fb.rating2]}</Box>}
                        </Grid>
                    </Grid>
                </Box>
                    
                
                <Typography ml={3} className={classes.title}  variant="subheading" component="h4"> Creating a positive volunteering environment (appreciation, feedback sessions, volunteer meetups</Typography>
                <Box ml={6} mr={6}>
                    <Grid
                        justify="space-between" // Add it here :)
                        container 
                        spacing={24}
                    >
                        <Grid item>
                            <StyledRating
                                max={6}
                                name="rating3"
                                precision={1}
                                icon={<FavoriteIcon fontSize="large" color='white' />}
                                value={fb.rating3}
                                onChange={(event, newValue) => {
                                    // setRating3(newValue);
                                    setFb( { ...fb, rating3 : newValue } )

                                }}
                                onChangeActive={(event, newHover) => {
                                    setRating3Hover(newHover);
                                }}
                            />
                        </Grid>

                        <Grid item>
                            {fb.rating3 !== null && <Box className={classes.onlyWhite} ml={2}>{labels[rating3Hover !== -1 ? rating3Hover : fb.rating3]}</Box>}
                        </Grid>
                    </Grid>
                </Box>


                <Typography ml={3} className={classes.title}  variant="subheading" component="h4">Encouraging you to take part in all other volunteering activities (events, webinars) in Bhumi </Typography>
                <Box ml={6} mr={6}>
                    <Grid
                        justify="space-between" // Add it here :)
                        container 
                        spacing={24}
                    >
                        <Grid item>
                            <StyledRating
                                max={6}
                                name="rating4"
                                precision={1}
                                icon={<FavoriteIcon fontSize="large" color='white' />}
                                value={fb.rating4}
                                onChange={(event, newValue) => {
                                    // setRating4(newValue);
                                    setFb( { ...fb, rating4 : newValue } )
                                }}
                                onChangeActive={(event, newHover) => {
                                    setRating4Hover(newHover);
                                }}
                            />
                        </Grid>
                        <Grid>
                            {fb.rating4 !== null && <Box className={classes.onlyWhite} >{labels[rating4Hover !== -1 ? rating4Hover : fb.rating4]}</Box>}
                        </Grid>
                    </Grid>
                </Box>
               
                <Typography ml={3} className={classes.title}  variant="headline" component="h4">Taking ownership and accountability in resolving issues (if any) </Typography>
                <Box ml={6} mr={6}>
                    <Grid
                        justify="space-between" // Add it here :)
                        container 
                        spacing={24}
                    >
                        <Grid item>
                            <StyledRating
                                max={6}
                                name="rating5"
                                precision={1}
                                icon={<FavoriteIcon fontSize="large" color='white' />}
                                value={fb.rating5}
                                onChange={(event, newValue) => {
                                    // setRating5(newValue);
                                    setFb( { ...fb, rating5 : newValue } )

                                }}
                                onChangeActive={(event, newHover) => {
                                    setRating5Hover(newHover);
                                }}
                            />
                        </Grid>
                        <Grid>
                            {fb.rating5 !== null && <Box className={classes.onlyWhite} >{labels[rating5Hover !== -1 ? rating5Hover : fb.rating5]}</Box>}
                        </Grid>
                    </Grid>
                </Box>
            </div>
            
            <div className='body-content-big '> 
                <Grid justify='space-between' container spacing={24}>
                        <IconButton>
                            <ArrowBackIcon  style={{ fontSize: 60, color:'#333333' }} onClick={prevPage} />
                        </IconButton>
                        <IconButton>
                            <ArrowForwardIcon  
                                style={{ fontSize: 60, color:'#333333' }} 
                                onClick={   () => { 
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

export default Page3