import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ImageGrid from './ImageGrid';
import ImageList from './ImageList';


const Main = () => {
    return (
        
        <Switch>

            <Route exact path='/listView' component={ImageList}></Route>
            <Route exact path='/gridView' component={ImageGrid}></Route>
            
        </Switch>
    );
}

export default Main;
