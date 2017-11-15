import React, { Component } from 'react';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import Main from './MainPage';

//import Dashboard from './Secured';

const store= createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

class App extends Component {
    
    render() {
        return(
            <div>
        <Provider store={store}>
        <Main/>
        </Provider>
        </div>
        )
    }
}

export default App;