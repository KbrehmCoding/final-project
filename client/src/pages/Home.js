import React, { Component } from "react";
import FrontNav from "../components/FrontNav";
import CoverPic from "../components/CoverPic";
import SectionA from "../components/SectionA";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";

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