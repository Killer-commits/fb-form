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
        rating1: -1,
		rating2: -1,
		rating3: -1,
		rating4: -1,
		rating5: -1,
		rating6: -1,
		rating7: -1,
		rating8: -1,
		induction: null,
        projectFlow: null,
        experience:null,
        skillsAcquired:null,
        suggestions:null,
        feedback:null,
    }
})

export const loadingAtom = atom({
    key: 'loadingAtom',
    default: false
})