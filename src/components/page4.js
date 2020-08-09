import React from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },

    textField: {
        marginTop: theme.spacing(2),
        color: "white",
    },
    title:{
        margin: theme.spacing(2),
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
const Page4 = ({ prevPage, nextPage}) => {
    const classes = useStyles();
    const [fb, setFb] = useRecoilState(feedback);
    const [openInduction, setOpenInduction] = React.useState(false);
    const [openProjectFlow, setOpenProjectFlow] = React.useState(false);

    return (
        <div className='content-area page-4 ' >
            <div className='body-content-big black-over'>
                <Typography  className={classes.title}   variant="headline" component="h3">Did the leadership teams create enough opportunities for you to volunteer ? </Typography>
                
                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend">
                        <span style={{ color: "white" }} >
                        On a project level
                        </span> 
                    </FormLabel> 
                        <RadioGroup aria-label="gender" name="gender1" value={fb.rating7} onChange={(e) => setFb({...fb, rating7:e.target.value})} row>
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
                        On a city level 
                        </span>
                    </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={fb.rating8} onChange={(e) =>  setFb({...fb, rating8:e.target.value})} row>
                        <FormControlLabel value="Strongly Agree" control={<StyledRadio  />} label="Strongly Agree" />
                        <FormControlLabel value="Agree" control={<StyledRadio  />} label="Agree" />
                        <FormControlLabel value="Somewhat Agree" control={<StyledRadio  />} label="Somewhat Agree" />
                        <FormControlLabel value="Somewhat Disagree" control={<StyledRadio  />} label="Somewhat Disagree" />
                        <FormControlLabel value="Disagree" control={<StyledRadio  />} label="Disagree" />
                        <FormControlLabel value="Strongly Disagree" control={<StyledRadio  />} label="Strongly Disagree" />
                    </RadioGroup>
                </FormControl>                       
            </div>
            <div className='body-content-big-topspace black-over'>
                <Typography  className={classes.title}   variant="headline" component="h3">Indicate the statement that best describes your state post induction as a volunteer?</Typography>

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
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Less Involved'}> Less Involved </MenuItem>
                            <MenuItem value={'More involved'}> More involved </MenuItem>
                            <MenuItem value={'Involved in domains of your expertise'}> Involved in domains of your expertise </MenuItem>
                            <MenuItem value={'Involved in different domains '}> Involved in different domains </MenuItem>
                            
                        </Select>
                    </FormControl>
            </div>
            
            <div className='body-content-big-topspace black-over'>
                <Typography  className={classes.title}   variant="headline" component="h3">Indicate the ease of understanding the project flow (in terms of project’s vision, goals, timelines, syllabus, assessments for kids, content delivery, knowing the POCs) </Typography>

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
                            <MenuItem className={classes.whiteText} value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Extremely easy'}> Extremely easy  </MenuItem>
                            <MenuItem value={'Quite Easy'}> Quite Easy </MenuItem>
                            <MenuItem value={'Quite difficult'}> Quite difficult </MenuItem>
                            <MenuItem value={'Extremely difficult'}> Extremely difficult     </MenuItem>
                            
                        </Select>
                    </FormControl>
            </div>
            <div className='body-content-big '> 
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

export default Page4