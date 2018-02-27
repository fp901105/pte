import React, { Component } from 'react';
import {Route} from 'react-router-dom'
const content = () =>{
    return(
        <div>
            <Route path="/ra" component={ra} />
            <Route path="/rs" component={rs} />
            <Route path="/rl" component={rl} />
            <Route path="/di" component={di} />
            <Route path="/os" component={os} />
            <Route path="/fb" component={fb} />
            <Route path="/sst" component={sst} />
            <Route path="/wfd" component={wfd} />
        </div>
    )
}

const wfd = () =>{
    
}