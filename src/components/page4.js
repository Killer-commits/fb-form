import React, {useState} from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useRecoilState } from 'recoil';
import { feedback } from './fbAtom';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(1),
    },
    onlyWhite:{
        color: "white",
    },

    textField: {
        marginTop: theme.spacing(1),
        color: "white",
    },
    title:{
        margin: theme.spacing(1),
        color: "white",
    },
    whiteText:{
        color: "white",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: 'white',
    },
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        color: "white",
    },
    selectIcon: {
        fill: 'white',
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

  const StyledRating2 = withStyles({
    icon:{
        color : '#333333'
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
const Page4 = ({ prevPage, nextPage}) => {
    const classes = useStyles();
    const [fb, setFb] = useRecoilState(feedback);
    const [openInduction, setOpenInduction] = React.useState(false);
    const [openCenterClass, setOpenCenterClass] = React.useState(false);
    const [openPrep, setOpenPrep] = React.useState(false);
    const [openBonding, setOpenBonding] = React.useState(false);

    const [rating6, setRating6] = useState(-1)
    const [rating6Hover, setRating6Hover] = useState(-1)
    const [rating7, setRating7] = useState(-1)
    const [rating7Hover, setRating7Hover] = useState(-1)

    const ValidationTheFb = () => {
        if ((fb.rating6 === -1 ) || (fb.rating7 === -1 ) || (fb.classDuration === null ) || (fb.prepDuration === null ) || (fb.bondDuration === null ) || (fb.induction === null )  || (fb.induction === '' )){
            return 'Please fill everything :-)'
        }
        return true
    }
    return (

            
        <div className='content-area2 page-4 ' >
            <div className='body-content-big-topspace black-over'>
                <Typography  align="center"  className={classes.title}   variant="headline" component="h3">Did the leadership teams create enough opportunities for you to volunteer ? </Typography>
            
                <Typography  align="center" ml={3} className={classes.title}  variant="subheading" component="h4">On a project level </Typography>
                <Grid
                    direction='column'
                    justify="center" // Add it here :)
                    container 
                    alignItems="center"
                    spacing={0}
                >
                    <Grid item>
                            <StyledRating2
                            max={6}
                            name="rating6"
                            precision={1}
                            icon={<StarIcon fontSize="large" color='white' />}
                            value={fb.rating6}
                            onChange={(event, newValue) => {
                                // setRating6(newValue);
                                setFb( { ...fb, rating6 : newValue } )
                            }}
                            onChangeActive={(event, newHover) => {
                                setRating6Hover(newHover);
                            }}
                        />
                    </Grid>
                    <Grid item>
                        {fb.rating6 !== null && <Box className={classes.onlyWhite} >{labels[rating6Hover !== -1 ? rating6Hover : fb.rating6]}</Box>}
                    </Grid>
                </Grid>

                <Typography  align="center" ml={3} className={classes.title}  variant="subheading" component="h4">On a city level </Typography>
                    <Grid
                        direction='column'
                        justify="center" // Add it here :)
                        container 
                        alignItems="center"
                        spacing={0}
                    >
                        <Grid item>
                                <StyledRating2
                                max={6}
                                name="rating7"
                                precision={1}
                                icon={<StarIcon fontSize="large" color='white' />}
                                value={fb.rating7}
                                onChange={(event, newValue) => {
                                    // setRating7(newValue);
                                    setFb( { ...fb, rating7 : newValue } )
                                }}
                                onChangeActive={(event, newHover) => {
                                    setRating7Hover(newHover);
                                }}
                            />
                        </Grid>
                        <Grid item>
                            {fb.rating7 !== null && <Box className={classes.onlyWhite} >{labels[rating7Hover !== -1 ? rating7Hover : fb.rating7]}</Box>}
                        </Grid>
                    </Grid>
            </div>
            <div className='body-content-big-topspace black-over'>
                <Typography  align="center"  className={classes.title}   variant="headline" component="h3">How are your current volunteering hours split up, in a typical week?</Typography>

                <FormControl className={classes.formControl}>
                    <InputLabel  align="center"  className={classes.whiteText} id="demo-controlled-open-select-label">Center Class </InputLabel>
                    <Select
                        
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openCenterClass}
                        onClose={() => setOpenCenterClass(false)}
                        onOpen={() => setOpenCenterClass(true)}
                        value={fb.classDuration}
                        onChange={(e) => setFb({ ...fb, classDuration: e.target.value })}
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.selectIcon,
                            },
                        }}
                    >
                        {/* <MenuItem className={classes.whiteText} value="">
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={'no time'}>No Time</MenuItem>
                        <MenuItem value={'15-30 mins'}>15-30 mins</MenuItem>
                        <MenuItem value={'30 mins -1 hr'}>30 mins -1 hr</MenuItem>
                        <MenuItem value={'1-2 hrs'}>1-2 hrs</MenuItem>
                        <MenuItem value={'>2hrs'}>>2hrs</MenuItem>
                        
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.whiteText} id="demo-controlled-open-select-label">Content and Class preparation </InputLabel>
                    <Select
                        
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openPrep}
                        onClose={() => setOpenPrep(false)}
                        onOpen={() => setOpenPrep(true)}
                        value={fb.prepDuration}
                        onChange={(e) => setFb({ ...fb, prepDuration: e.target.value })}
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.selectIcon,
                            },
                        }}
                    >
                        {/* <MenuItem className={classes.whiteText} value="">
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={'no time'}>No Time</MenuItem>
                        <MenuItem value={'15-30 mins'}>15-30 mins</MenuItem>
                        <MenuItem value={'30 mins -1 hr'}>30 mins -1 hr</MenuItem>
                        <MenuItem value={'1-2 hrs'}>1-2 hrs</MenuItem>
                        <MenuItem value={'>2hrs'}>>2hrs</MenuItem>
                        
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.whiteText} id="demo-controlled-open-select-label"> Volunteer bonding activities</InputLabel>
                    <Select
                        
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openBonding}
                        onClose={() => setOpenBonding(false)}
                        onOpen={() => setOpenBonding(true)}
                        value={fb.bondDuration}
                        onChange={(e) => setFb({ ...fb, bondDuration: e.target.value })}
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.selectIcon,
                            },
                        }}
                    >
                        {/* <MenuItem className={classes.whiteText} value="">
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={'no time'}>No Time</MenuItem>
                        <MenuItem value={'15-30 mins'}>15-30 mins</MenuItem>
                        <MenuItem value={'30 mins -1 hr'}>30 mins -1 hr</MenuItem>
                        <MenuItem value={'1-2 hrs'}>1-2 hrs</MenuItem>
                        <MenuItem value={'>2hrs'}>>2hrs</MenuItem>
                        
                    </Select>
                </FormControl>
            </div>            
            <div className='body-content-big-topspace black-over'>
                <Typography  align="center" className={classes.title}   variant="headline" component="h3">Indicate the statement that best describes your state post induction as a volunteer?</Typography>

                <FormControl className={classes.formControl}>
                        <InputLabel className={classes.whiteText} id="demo-controlled-open-select-label">Select for options here</InputLabel>
                        <Select
                            className={classes.whiteText}
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={openInduction}
                            onClose={() => setOpenInduction(false)}
                            onOpen={() => setOpenInduction(true)}
                            value={fb.induction}
                            onChange={(e) => setFb({ ...fb, induction: e.target.value })}
                            className={classes.select}
                            inputProps={{
                                classes: {
                                    icon: classes.selectIcon,
                                },
                            }}
                        >
                            {/* <MenuItem value="">
                                <em>None</em>
                            </MenuItem> */}
                            <MenuItem value={'Less Involved'}> Less Involved </MenuItem>
                            <MenuItem value={'More involved'}> More involved </MenuItem>
                            <MenuItem value={'Involved in domains of your expertise'}> Involved in domains of your expertise </MenuItem>
                            <MenuItem value={'Involved in different domains '}> Involved in different domains </MenuItem>
                            
                        </Select>
                    </FormControl>
            </div>
            
            
            <div className='body-content-big '> 
                <Grid justify='space-between' container spacing={24}>
                        <IconButton>
                            <ArrowBackIcon style={{ fontSize: 60, color:'#333333' }} onClick={prevPage} />
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

export default Page4