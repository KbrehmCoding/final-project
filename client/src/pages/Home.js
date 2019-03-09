
export default User;
import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import { withAuth } from '@okta/okta-react';
import FrontNav from "../components/FrontNav";
import CoverPic from "../components/CoverPic";
import SectionA from "../components/SectionA";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";


// withAuth(class Home extends Component {
//     state = { authenticated: null };

//     checkAuthentication = async() => {
//         const authenticated = await this.props.auth.isAuthenticated();
//         if (authenticated !== this.state.authenticated) {
//             this.setState({ authenticated });
//         }
//     }

//     async componentDidMount() {
//         this.checkAuthentication();
//     }

//     async componentDidUpdate() {
//         this.checkAuthentication();
//     }

//     login = async() => {
//         this.props.auth.login('/');
//     }

//     logout= async() => {
//         this.props.auth.logout('/');
//     }

//     render() {
//         if (this.state.authenticated === null) return null;

//         const button = this.state.authenticated ?
//             <button onClick={this.logout}>Logout</button> :
//             <button onClick={this.login}>Login</button>;

//         return (
//             <div>
//                 {button}
//             </div>
//         );
//     }
// });

// export default withAuth;




class User extends Component {
    render() {
        return (
            <Wrapper>
                <FrontNav />
                <CoverPic />
                <SectionA className="sectionA" />
                <Footer /> 
            </Wrapper>
        )
    };
    };
    export default User;
    



