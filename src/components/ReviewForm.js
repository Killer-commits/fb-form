import React, { Component, useState } from 'react';
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'
import Page6 from './page6'
import Page7 from './page7'
import Wait from './wait'
import axios from 'axios'
import '../assets/styles/ReviewForm.css'
import { useRecoilState } from 'recoil';
import { loadingAtom } from './fbAtom';

const ReviewForm = () => {
	const [ currentPage  , setCurrentPage] = useState(6);
	const [loading , setLoading] = useRecoilState(loadingAtom)
	
	return (
		<div className='app-div'>
			<Wait show={loading} />
			{
				currentPage === 1 ?
				<Page1 nextPage={() => setCurrentPage(2) }/> : null
			}
			{
				currentPage === 2 ?
					<Page2 prevPage={() => setCurrentPage(1)} nextPage={() => setCurrentPage(3) } /> : null
			}
			{
				currentPage === 3 ?
					<Page3 prevPage={() => setCurrentPage(2)} nextPage={() => setCurrentPage(4)} /> : null
			}
			{
				currentPage === 4 ?
					<Page4 prevPage={() => setCurrentPage(3)} nextPage={() => setCurrentPage(5)} /> : null
			}
			{
				currentPage === 5 ?
					<Page5 prevPage={() => setCurrentPage(4)} nextPage={() => setCurrentPage(6)} /> : null
					
			}
			{
				currentPage === 6 ?
					<Page6 prevPage={() =>setCurrentPage(5)} nextPage={() => setCurrentPage(7)}  /> : null					
			}
			{
				currentPage === 7 ?
				<Page7/>  : null 
			}
		</div>
	)
	
}

export default ReviewForm;