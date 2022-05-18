import React from 'react';
import commonClass from "./common/classes/generalContainer.module.css"
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div className={commonClass.wrapper}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;
