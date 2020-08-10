import React from 'react';

const Page1 = ({ nextPage }) => {

    return (
        <div className='content-area2 page-1' >
            <div className='start-button-row'>
                <div className='start-Button' onClick={nextPage}>Start</div>
             
            </div>

        </div>

    );
}

export default  Page1;