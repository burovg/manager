import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  ReduxThunk  from 'redux-thunk'
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import RouterComponent from './Router';


class App extends Component{

    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyBHKsZx-AlC-tBLQcUp2ycXFt3B4iXeaqU',
            authDomain: 'manager-58b91.firebaseapp.com',
            databaseURL: 'https://manager-58b91.firebaseio.com',
            projectId: 'manager-58b91',
            storageBucket: 'manager-58b91.appspot.com',
            messagingSenderId: '690285969887'
          };
          firebase.initializeApp(config);
    }

    render()
    {
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));

        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;