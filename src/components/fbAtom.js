import { atom } from 'recoil'

export const feedback = atom({
    key: 'feedback',
    default: {
        name: '',
        mobile: '',
        email: '',
        duration : '' ,
        project : '' ,
        rating1: '',
		rating2: '',
		rating3: '',
		rating4: '',
		rating5: '',
		rating6: '',
		rating7: ''

    }
})