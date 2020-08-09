import React from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import { RecoilRoot } from 'recoil'
function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <ReviewForm />
            </div>
        </RecoilRoot>

    );
}

export default App;
