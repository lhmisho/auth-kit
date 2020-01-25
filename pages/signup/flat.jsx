import React from 'react';
import SignUp from '../../features/signup/Flat'
// import image from '/images/bg7.jpg';
const Root = () => {
    return (
        <div style={{
            backgroundImage: "url(" + '/images/bg2.jpg' + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
        }}>
            <React.Fragment>
                <SignUp />
            </React.Fragment>
        </div>
    )
}
export default Root;