import React, { Component } from 'react';
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
// import Page4 from './page4'
// import Page5 from './page5'
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
						<div className='content-area page-4' >
							<div className='body-content black-over'>
								<div className='question'> Did the leadership teams create enough opportunities for you to volunteer?   </div>
								<div className='rating-text'> 6 = Strongly Agree, 5 = Agree, 4 = Somewhat Agree, 3 = Somewhat Disagree, 2 = Disagree, 1= Strongly Disagree </div>
								<div className='sub-question'> On a project level </div>
								<div className='rating-buttons'>
									<div className='radio-option' onClick={() => {
										if (rating6 !== 1) {
											this.setState({ rating6: 1 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating6 === 1) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 1 </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating6 !== 2) {
											this.setState({ rating6: 2 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating6 === 2) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 2 </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating6 !== 3) {
											this.setState({ rating6: 3 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating6 === 3) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 3 </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating6 !== 4) {
											this.setState({ rating6: 4 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating6 === 4) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 4</div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating6 !== 5) {
											this.setState({ rating6: 5 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating6 === 5) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 5 </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating6 !== 6) {
											this.setState({ rating6: 6 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating6 === 6) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 6 </div>
									</div>
								</div>
								<div className='sub-question'> On a city level </div>
								<div className='rating-buttons'>
									<div className='radio-option' onClick={() => {
										if (rating7 !== 1) {
											this.setState({ rating7: 1 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating7 === 1) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 1 </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating7 !== 2) {
											this.setState({ rating7: 2 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating7 === 2) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 2 </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating7 !== 3) {
											this.setState({ rating7: 3 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating7 === 3) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 3 </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating7 !== 4) {
											this.setState({ rating7: 4 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating7 === 4) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 4</div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating7 !== 5) {
											this.setState({ rating7: 5 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating7 === 5) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 5 </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (rating7 !== 6) {
											this.setState({ rating7: 6 })
										}
									}}>
										<div className='radio-button'>
											{
												(rating7 === 6) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> 6 </div>
									</div>
								</div>
								<div className='button-holder'>
									<div className='next-button' onClick={() => this.setState({ currentPage: 5 })} > Next </div>
								</div>
							</div>
						</div> : null
				}
				{
					currentPage === 5 ?
						<div className='content-area page-5' >
							<div className='body-content'>
								<div className='question'>Indicate The statement that best describes your state post induction as a volunteer?  </div>
								<div className='radio-options'>
									<div className='radio-option' onClick={() => {
										if (userState !== 1) {
											this.setState({ userState: 1 })
										}
									}}>
										<div className='radio-button'>
											{
												(userState === 1) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> Less Involved </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (userState !== 2) {
											this.setState({ userState: 2 })
										}
									}}>
										<div className='radio-button'>
											{
												(userState === 2) ?
													<div className='radio-dot'> </div>
													: null
											}

										</div>
										<div className='radio-label'> More involved </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (userState !== 3) {
											this.setState({ userState: 3 })
										}
									}}>
										<div className='radio-button'>
											{
												(userState === 3) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> Involved in domains of your expertise </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (userState !== 4) {
											this.setState({ userState: 4 })
										}
									}}>
										<div className='radio-button'>
											{
												(userState === 4) ?
													<div className='radio-dot'> </div>
													: null
											} 
										</div>
										<div className='radio-label'> Involved in different domains  </div>
									</div>
								</div>
								<div className='question'>Indicate The ease of understanding the project flow (in terms of project’s vision, goals,
              timelines, syllabus, assessments for kids, content delivery, knowing the POCs)</div>
								<div className='radio-options'>
									<div className='radio-option' onClick={() => {
										if (understandingEase !== 1) {
											this.setState({ understandingEase: 1 })
										}
									}}>
										<div className='radio-button'>
											{
												(understandingEase === 1) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> Extremely easy  </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (understandingEase !== 2) {
											this.setState({ understandingEase: 2 })
										}
									}}>
										<div className='radio-button'>
											{
												(understandingEase === 2) ?
													<div className='radio-dot'> </div>
													: null
											}

										</div>
										<div className='radio-label'> Quite Easy </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (understandingEase !== 3) {
											this.setState({ understandingEase: 3 })
										}
									}}>
										<div className='radio-button'>
											{
												(understandingEase === 3) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> Quite difficult </div>
									</div>
									<div className='radio-option' onClick={() => {
										if (understandingEase !== 4) {
											this.setState({ understandingEase: 4 })
										}
									}}>
										<div className='radio-button'>
											{
												(understandingEase === 4) ?
													<div className='radio-dot'> </div>
													: null
											}
										</div>
										<div className='radio-label'> Extremely difficult </div>
									</div>
								</div>
								<div className='button-holder'>
									<div className='next-button' onClick={() => this.setState({ currentPage: 6 })} > Next </div>
								</div>
							</div>
						</div> : null
				}
				{
					currentPage === 6 ?
						<div className='content-area page-5' >
							<div className='body-content'>
								<input type='text' className='input-field' value={expereince} onChange={(e) => this.setState({ expereince: e.target.value })} placeholder='What have you enjoyed the most as a Bhumi volunteer?' />
								<input type='text' className='input-field' value={skillsAcquired} onChange={(e) => this.setState({ skillsAcquired: e.target.value })} placeholder='Mention any 2 skills acquired/honed during your volunteering journey?' />
								<input type='text' className='input-field' value={suggestions} onChange={(e) => this.setState({ suggestions: e.target.value })} placeholder='What could be improved to make your volunteering experience more enjoyable and fruitful?' />
								<input type='text' className='input-field' value={feedback} onChange={(e) => this.setState({ feedback: e.target.value })} placeholder='Is there anything else you would like us to know about?' />
								<div className='button-holder'>
									<div className='next-button' onClick={() => this.setState({ currentPage: 7 })} > Submit </div>
								</div>
							</div>
						</div> : null
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