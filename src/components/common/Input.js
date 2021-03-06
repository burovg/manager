import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {

    const { inputStyle,labelStyle, containerStyle } = styles;

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                value={value} 
                keyboardType={keyboardType}
                onChangeText={onChangeText} 
                style={inputStyle} 
                autoCorrect={false}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        padding: 1
    },
    containerStyle: {
        height: 40,
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };