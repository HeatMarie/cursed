import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Page from './page/Page';
import chapters from './chapters';

const Container = () => {
    return (
        <div>
            <Header />
            <Page  chapters={chapters}/>
            <Footer />
        </div>
    )
}

export default Container;