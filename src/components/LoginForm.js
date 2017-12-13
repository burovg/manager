import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions'
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    render()
    {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        placeholder="email@emai.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    >
                    </Input>
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password:"
                        placeholder="put your password here"
                    >
                    </Input>
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null,{emailChanged})(LoginForm);