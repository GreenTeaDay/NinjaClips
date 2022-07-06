import React from 'react'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Article, Brand, CTA, Feature, Navbar } from './components';

const App = () => {
    return ( 
        <div classname = "App" >
        <div classname = "gradient_bg" >
            <Navbar />
            <Header />
        </div> 
            <Brand />
            <WhatGPT3 />
        </div>
    )
}

export default App