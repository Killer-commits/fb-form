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
import { useRecoilState } from 'recoil';
import { feedback } from './fbAtom';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    textField: {
        marginTop: theme.spacing(2),
    },
}));

const Page2 = ({ prevPage, nextPage }) => {
    const classes = useStyles();
    const [openDuration, setopenDuration] = React.useState(false);
    const [openProject, setOpenProject] = React.useState(false);
    const [fb, setFb] = useRecoilState(feedback);
    return (
        <div className='content-area page-2' >
            <div className='body-content ' >
                <TextField
                    label="Name"
                    id="outlined-size-normal"
                    defaultValue=""
                    value={fb.name}
                    onChange={(e) => setFb({ ...fb, name: e.target.value })}
                    placeholder='Enter your name here'
                    variant="outlined"
                    className={classes.textField}
                />

                <TextField
                    label="Mobile Number"
                    id="outlined-size-normal"
                    defaultValue=""
                    value={fb.mobile}
                    onChange={(e) => setFb({ ...fb, mobile: e.target.value })}
                    placeholder='Enter your mobile number here'
                    variant="outlined"
                    className={classes.textField}
                />

                <TextField
                    label="E-Mail"
                    id="outlined-size-normal"
                    defaultValue=""
                    value={fb.email}
                    onChange={(e) => setFb({ ...fb, email: e.target.value })}
                    placeholder='Enter your E-Mail here'
                    variant="outlined"
                    className={classes.textField}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">How long have you been volunteering with Bhumi?</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openDuration}
                        onClose={() => setopenDuration(false)}
                        onOpen={() => setopenDuration(true)}
                        value={fb.duration}
                        onChange={(e) => setFb({ ...fb, duration: e.target.value })}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'<0.3'}> &lt;3 Months</MenuItem>
                        <MenuItem value={'>0.3'}> >3 Months</MenuItem>
                        <MenuItem value={'>0.6'}>>6 Months</MenuItem>
                        <MenuItem value={'>1'}>>1 Year</MenuItem>
                        <MenuItem value={'>2'}>>2 Years</MenuItem>
                        <MenuItem value={'>3'}>>3 Years</MenuItem>
                        <MenuItem value={'>4'}>>4 Years</MenuItem>
                        <MenuItem value={'>5'}>>5 Years</MenuItem>
                        <MenuItem value={'>6'}>>6 Years</MenuItem>
                        <MenuItem value={'>7'}>>7 Years</MenuItem>
                        <MenuItem value={'>8'}>>8 Years</MenuItem>
                        <MenuItem value={'>9'}>>9 Years</MenuItem>
                        <MenuItem value={'>10'}>>10 Years</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Which project are you part of ?</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openProject}
                        onClose={() => setOpenProject(false)}
                        onOpen={() => setOpenProject(true)}
                        value={fb.project}
                        onChange={(e) => setFb({ ...fb, project: e.target.value })}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Artoons"}>Artoons</MenuItem>
                        <MenuItem value={"De-Step"}>De-Step</MenuItem>
                        <MenuItem value={"Kanini"}>Kanini</MenuItem>
                        <MenuItem value={"Lakshya"}>Lakshya</MenuItem>
                        <MenuItem value={"LEM"}>LEM</MenuItem>
                        <MenuItem value={"LES"}>LES</MenuItem>
                        <MenuItem value={"Speakout"}>Speakout</MenuItem>
                        <MenuItem value={"Sprint"}>Sprint</MenuItem>
                        <MenuItem value={"Yantra"}>Yantra</MenuItem>
                    </Select>
                </FormControl>

                <Grid justify='space-between' container spacing={24}>
                    <IconButton>
                        <ArrowBackIcon onClick={prevPage} />
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIcon onClick={() => { console.log(fb); nextPage() }} />
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
