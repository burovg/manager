import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }

    onLoginUser(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }

    renderError()
    {
        if(this.props.error){
            return(
                <View style={{ backgroundColor:'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton()
    {
        if(this.props.loading){
            return(
              <Spinner size="large"/>
            );
        }
        else{
            return(
                <Button onPress={this.onLoginUser.bind(this)}>
                    Login
                </Button>
            );
        }
    }

    render()
    {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        keyboardType="email-address"
                        placeholder="email@emai.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    >
                    </Input>
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password:"
                        placeholder="put your password here"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    >
                    </Input>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};

const  mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);