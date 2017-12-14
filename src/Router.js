import React, { Component } from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

class RouterComponent extends Component{
    render()
    {
        return(
            <Router>
                    <Scene key="root" tabs={false}>
                    <Scene key="auth">
                        <Scene key="login" component={LoginForm} title="Login"/>
                    </Scene>
                    <Scene key="main">
                        <Scene 
                            key="employeeList" 
                            component={EmployeeList} title="List" 
                            rightTitle="Add"
                            onRight={() => Actions.employeeCreate()}
                        />
                        <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create"/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;