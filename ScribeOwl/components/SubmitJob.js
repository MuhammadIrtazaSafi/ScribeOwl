import {Text, View} from "react-native";
import React from 'react';


export default class SubmitJob extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Submit New Job</Text>
            </View>
        );
    }
}