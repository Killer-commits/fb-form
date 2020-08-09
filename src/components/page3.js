import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: 'white',
    },
    radio: {
        color: 'black',
    },
}));


const Page3 = ({ nextPage }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    return (
        <div className='content-area page-3 ' >
            <div className='body-content black-over'>
                <div className='question'> Rate the lead coordinators of your project in the following aspects  </div>
                <div className='rating-text'> 6 = Strongly Agree, 5 = Agree, 4 = Somewhat Agree, 3 = Somewhat Disagree, 2 = Disagree, 1= Strongly Disagree </div>
                <div className='sub-question'> Bringing inclusivity in project discussions, plans and setting up goals </div>
                <div className='sub-question'> Addressing all your queries/concerns and staying supportive </div>
                <div className='sub-question'> Creating a positive volunteering environment (appreciation, feedback sessions, volunteer meetups) </div>
                <div className='sub-question'> Encouraging you to take part in all other volunteering activities (events, webinars) in Bhumi </div>

                <FormControl className={classes.formControl} component="fieldset">
                    <FormLabel component="legend">
                        <span style={{ color: "white" }} >
                            Taking ownership and accountability in resolving issues (if any)
                        </span>
                    </FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(e) => setValue(e.target.value)}>
                        <FormControlLabel value="female" control={<Radio style={{ color: green[500] }} color="primary" />} label="Female" />
                        <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                        <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                        <FormControlLabel value="disabled" disabled control={<Radio color="primary" />} label="(Disabled option)" />
                    </RadioGroup>
                </FormControl>

                <div className='button-holder'>
                    <div className='next-button' onClick={() => this.setState({ currentPage: 4 })} > Next </div>
                </div>
            </div>
        </div>

    );
}

export default Page3