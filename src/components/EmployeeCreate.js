import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { Input, Button, Card, CardSection } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import { connect } from 'react-redux';

class EmployeeCreate extends Component{


    onButtonPressed(){
        const {name,phone,shift} = this.props;
        this.props.employeeCreate({name,phone,shift:shift || 'Monday'});
    }

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
                    
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex : 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({prop:'shift',value:day})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thusday" value="Thusday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                    
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPressed.bind(this)}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    pickerTextStyle : {
        fontSize:18,
        paddingLeft:20
    }
};

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return {name,phone,shift};
};

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);