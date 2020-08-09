import { atom } from 'recoil'

export const feedback = atom({
    key: 'feedback',
    default: {
        name: null,
        mobile: null,
        email: null,
        duration : null ,
        project : null ,
        classDuration : null ,
        prepDuration : null ,
        bondDuration : null ,
        rating1: null,
		rating2: null,
		rating3: null,
		rating4: null,
		rating5: null,
		rating6: null,
		rating7: null,
		rating8: null,
		induction: null,
        projectFlow: null,
        experience:null,
        skillsAcquired:null,
        suggestions:null,
        feedback:null,
    }
})