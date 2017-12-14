import React, { Component } from 'react';
import { Input, Button, Card, CardSection } from './common';
import { employeeUpdate } from '../actions';
import { connect } from 'react-redux';

class EmployeeCreate extends Component{
    render()
    {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name:"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({prop:'name',value:text})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone: "
                        keyboardType="phone-pad"
                        placeholder="555-55-555" 
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({prop:'phone',value:text})}                        
                    />
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
};

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeCreate);