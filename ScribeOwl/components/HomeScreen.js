import React from 'react';
import { Text, View, ScrollView, Button, FlatList} from 'react-native';
import JobStatusScreen from "./JobStatusScreen";
import { ListItem } from 'react-native-elements'


export default class HomeScreen extends React.Component {

    jobs = [];

    createButtonClicked = () => {
        this.props.navigation.navigate('SubmitJob');
    };


     getCreateNewJobButton(): React.Node {
        return <View style = {Styles.requestTranscriptionButton}>
            <Button
                title="Request New Transcription"
                color="white"
                accessibilityLabel="Learn more about this purple button"
             onPress={() => this.createButtonClicked()}/>
        </View>;
    }


    getJobStatusRow = ({ item }) => (
        <ListItem
            title={item.jobName}
            subtitle={item.jobStatus}
            leftAvatar={{ source: { uri: item.imageUrl } }}
            chevron = {true}
        />
    );

    render() {

        const job = {
            jobName: 'My Notes Transcription',
            imageUrl: 'https://static.thenounproject.com/png/42732-200.png',
            jobStatus: 'In Progress'
        };

        for (let i = 0; i < 50;i ++) {
            this.jobs.push(job);
        }
        return (
            <View style={{flex:1,flexDirection: 'column', padding: 20}}>
                {this.getCreateNewJobButton()}
                <View style = {{flex:1, paddingTop:10}}>
                <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.jobs}
                renderItem={this.getJobStatusRow}
                />
                </View>
            </View>
        );
    }
}

const Styles = {
    requestTranscriptionButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:40,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#44d6ec',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
};
