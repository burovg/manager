import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

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
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;