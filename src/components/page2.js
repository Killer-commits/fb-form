import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useRecoilState } from 'recoil';
import { feedback } from './fbAtom';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    white: {
        margin: theme.spacing(2),
        color: 'black',
    },
    onlyWhite: {
        color: 'black',
    },
    onlyWhite1: {
        color: 'black',
        marginTop : "-15px"
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
        fontWeight: "bold",
        color: "black"
    },

    title: {
        margin: theme.spacing(2),
        marginTop: theme.spacing(6),
        color: "black",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },


    cssLabel: {
        color: 'black',
        "&$cssFocused": {
            color: "black"
        },
    },


    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            // borderColor: `${theme.palette.primary.main} !important`,
            borderColor: `black !important`,
        },
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '2px',
        borderColor: 'black !important'
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

   
}));
const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };

const Page2 = ({ prevPage, nextPage }) => {
    const classes = useStyles();
    const [openDuration, setopenDuration] = React.useState(false);
    const [openProject, setOpenProject] = React.useState(false);

    const [fb, setFb] = useRecoilState(feedback);
    const  validateEmail = (email) =>  {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }   
    const ValidationTheFb = () => {
        
        if ((fb.name === null ) && ( fb.mobile === null ) && (fb.email === null) && (fb.project === null) && (fb.duration === null)) {
            return 'Please Fill everything :-) '
        }
        if (fb.name === null ) {
            return 'Enter a valid Name'
        }
        if (fb.mobile === null ) {
            return 'Enter a valid mobile number'
        }
        if (fb.email === null ) {
            return 'Enter a valid email'
        }
        if (validateEmail(fb.email) === false ) {
            return 'Enter a valid email'
        }
        if (fb.name.length < 3) {
            return 'Enter a valid Name'
        }
        if (Number.isSafeInteger(Number(fb.mobile)) === false) {
            return 'Enter a valid Mobile number'
        }
        if (fb.mobile.length < 10 || fb.mobile.length > 20 ) {
            return 'Enter a valid Mobile number'
        }

        if ((fb.project === null) || (fb.project === '')) {
            return 'Choose  your porject'
        }

        if ((fb.duration === null) || (fb.duration === '')) {
            return 'Choose your volutneer duration in bhumi'
        }

        return true
    }

    React.useEffect(() => {
        if (fb.duration === '<0.3') {
            setFb({ ...fb, projectFlow: '__NE__', experience:'__NE__', skillsAcquired:'__NE__',})
            console.log("FU")
        } else {
            setFb({ ...fb, projectFlow: null , experience:null, skillsAcquired:null,})
        }
      }, [fb.duration]);

    return (
        <div className='content-area page-2' >
            <div className='body-content black-over' >
                <TextField
                    label="Name"
                    id="outlined-size-normal"
                    autocomplete="off"
                    defaultValue=""
                    value={fb.name}
                    onChange={(e) => setFb({ ...fb, name: e.target.value })}
                    placeholder='Enter your name here'
                    variant="outlined"
                    className={classes.white}
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
                    label="Mobile Number"
                    id="outlined-size-normal"
                    autoComplete='off'
                    defaultValue=""
                    value={fb.mobile}
                    type="number"
                    onChange={(e) => { 
                        if (Number.isSafeInteger(Number(e.target.value)))  {
                            if (Number(e.target.value) > 0 ) {
                                setFb({ ...fb, mobile: e.target.value })
                            }
                        } 
                    } } 
                    placeholder='Enter your mobile number here'
                    variant="outlined"
                    className={classes.white}
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
                    label="E-Mail"
                    id="outlined-size-normal"
                    autoComplete='off'
                    defaultValue=""
                    value={fb.email}
                    onChange={(e) => setFb({ ...fb, email: e.target.value })}
                    placeholder='Enter your E-Mail here'
                    variant="outlined"
                    className={classes.white}
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
                <FormControl className={classes.formControl}>
                    <InputLabel 
                        className={classes.onlyWhite1} 
                        id="demo-controlled-open-select-label"
                    >
                        How long have you been volunteering with Bhumi?
                    </InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openDuration}
                        onClose={() => setopenDuration(false)}
                        onOpen={() => setopenDuration(true)}
                        value={fb.duration}
                        onChange={(e) => setFb({ ...fb, duration: e.target.value }) }
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
                        <MenuItem value={'<0.3'}> &lt;3 months</MenuItem>
                        <MenuItem value={'>0.3 - 0.6'}>3 - 6 months</MenuItem>
                        <MenuItem value={'>0.6 - 1'}>6 months - 1 year</MenuItem>
                        <MenuItem value={'1 - 2'}>1 - 2 years</MenuItem>
                        <MenuItem value={'>2'}>>2 years</MenuItem>
                    </Select>
                </FormControl>

                <FormControl  className={classes.formControl}>
                    <InputLabel className={classes.onlyWhite} id="demo-controlled-open-select-label">Which project are you a part of ?</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openProject}
                        onClose={() => setOpenProject(false)}
                        onOpen={() => setOpenProject(true)}
                        value={fb.project}
                        onChange={(e) => setFb({ ...fb, project: e.target.value })}
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
                        <MenuItem value={"Artoons"}>Artoons</MenuItem>
                        <MenuItem value={"De-Step"}>deStep</MenuItem>
                        <MenuItem value={"Kanini"}>Kanini</MenuItem>
                        <MenuItem value={"Lakshya"}>Lakshya</MenuItem>
                        <MenuItem value={"LEM"}>LEM</MenuItem>
                        <MenuItem value={"LES"}>LES</MenuItem>
                        <MenuItem value={"Speakout"}>Speakout</MenuItem>
                        <MenuItem value={"Sprint"}>Sprint</MenuItem>
                        <MenuItem value={"Yantra"}>Yantra</MenuItem>
                    </Select>
                </FormControl>

                

            </div>
            <div className='body-content '>
                <Grid justify='space-between' container spacing={24}>
                    <IconButton>
                        <ArrowBackIcon style={{ fontSize: 40, color:'#333333' }} fontSize="large" onClick={prevPage} />
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIcon 
                            style={{ fontSize: 40, color:'#333333' }}   
                            onClick={   () => { 
                                console.log(fb); 
                                let val = ValidationTheFb()     
                                // let val = true
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

export default Page2


//  <div className='content-area page-2' >
//             <div className='body-content ' >
//                 <input type='text' className='input-field' value={name} onChange={(e) => this.setState({ name: e.target.value })} placeholder='name' />
//                 <input type='text' className='input-field' value={mobile} onChange={(e) => this.setState({ mobile: e.target.value })} placeholder='mobile-number' />
//                 <input type='text' className='input-field' value={email} onChange={(e) => this.setState({ email: e.target.value })} placeholder='email-address' />

                // <FormControl className={classes.formControl}>
                //     <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                //     <Select
                //         labelId="demo-controlled-open-select-label"
                //         id="demo-controlled-open-select"
                //         open={open}
                //         onClose={() => setOpen(false)}
                //         onOpen={ () => setOpen(true) }
                //         value={age}
                //         onChange={handleChange}
                //     >
                //         <MenuItem value="">
                //             <em>None</em>
                //         </MenuItem>
                //         <MenuItem value={10}>Ten</MenuItem>
                //         <MenuItem value={20}>Twenty</MenuItem>
                //         <MenuItem value={30}>Thirty</MenuItem>
                //     </Select>
                // </FormControl>
                // <input type='text' className='input-field' value={volunteerPeriod} onChange={(e) => this.setState({ volunteerPeriod: e.target.value })} placeholder='How long have you been volunteering with Bhumi?' />
                // <input type='text' className='input-field' value={project} onChange={(e) => this.setState({ project: e.target.value })} placeholder='Which project are you part of ?' />
                // <div className='button-holder'>
                //     <div className='next-button' onClick={nextPage} > Next </div>
                // </div>
        //     </div>
        // </div >
