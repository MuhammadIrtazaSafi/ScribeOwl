import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class JobStatusScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Status: In Progress</Text>
            </View>
        );
    }
}
