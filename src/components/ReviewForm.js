import React, { Component } from 'react';
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'
// import Page6 from './page6'
import Page7 from './page7'
import '../assets/styles/ReviewForm.css'

class ReviewForm extends Component {

	state = {
		currentPage: 1,
		name: '',
		mobile: '',
		email: '',
		volunteerPeriod: '',
		project: '',
		userState: '',
		understandingEase: '',
		expereince: '',
		skillsAcquired: '',
		feedback: '',
		suggestions: '',
		rating1: '',
		rating2: '',
		rating3: '',
		rating4: '',
		rating5: '',
		rating6: '',
		rating7: ''
	}

	handleNext = () => {
		const { currentPage } = this.state;
		if (currentPage < 6) {
			this.setState({ currentPage: currentPage + 1 })
		}
	}

	render() {
		const { currentPage,
			name,
			mobile,
			email,
			volunteerPeriod,
			project,
			userState,
			understandingEase,
			suggestions,
			feedback,
			expereince,
			skillsAcquired,
			rating1,
			rating2,
			rating3,
			rating4,
			rating5,
			rating6,
			rating7 } = this.state;

		return (
			<div className='app-div'>
				{/* {
					currentPage === 1 ?
						<div className='content-area page-1' >
							<div className='start-button-row'>
								<div className='start-Button' onClick={() => this.setState({ currentPage: 2 })}> Start Review </div>
							</div>
						</div> : null
				} */}

                {
					currentPage === 1 ?
					<Page1 nextPage={() => this.setState({ currentPage: 2 })}/> : null
				}
				{
					currentPage === 2 ?
						<Page2 prevPage={() => this.setState({ currentPage: 1 })} nextPage={() => this.setState({ currentPage: 3 })} /> : null
				}
				{
					currentPage === 3 ?
                        <Page3 prevPage={() => this.setState({ currentPage: 2 })} nextPage={() => this.setState({ currentPage: 4 })} /> : null
                }
				{
					currentPage === 4 ?
						<Page4 prevPage={() => this.setState({ currentPage: 3 })} nextPage={() => this.setState({ currentPage: 5 })} /> : null
				}
				{
					currentPage === 5 ?
						<Page5 prevPage={() => this.setState({ currentPage: 4 })} nextPage={() => this.setState({ currentPage: 6 })} /> : null
						
				}
				{
					currentPage === 6 ?
						<Page7/>  : null 
						// <Page6 prevPage={() => this.setState({ currentPage: 5 })} nextPage={() => this.setState({ currentPage: 7 })} /> : null

						
				}
				{
					currentPage === 7 ?
                    <Page7/>  : null 
				}
			</div>
		)
	}
}

export default ReviewForm;