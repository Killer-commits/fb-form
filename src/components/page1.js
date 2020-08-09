import React from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import Grid from '@material-ui/core/Grid';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Page1 = ({ nextPage }) => {

    return (
        <div className='content-area2 page-1' >
            <div className='start-button-row'>
                <div className='start-Button' onClick={nextPage}> Start Review </div>
                {/* <Grid justify='space-between' container spacing={24}>
                    <IconButton>
                        <ArrowForwardIcon onClick={nextPage} />
                    </IconButton>
                </Grid> */}
            </div>

        </div>

    );
}

export default Page1
