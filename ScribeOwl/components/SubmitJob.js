import {Button, Text, View} from "react-native";
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';



export default class SubmitJob extends React.Component {

    openGallery() {
        ImagePicker.openPicker({
            multiple: true,
            maxFiles: 15,
        }).then(images => {
            console.log(images);
        });
    }


    openCamera() {
        ImagePicker.openCamera({
            multiple: true,
            maxFiles: 15,
        }).then(images => {
            console.log(images);
        });
    }


    getCreateNewJobButton(): React.Node {
        return <View>
            <View style = {Styles.requestTranscriptionButton}>
                <Button
                    title="Add Photos From Gallery"
                    color="white"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => this.openGallery()}/>

            </View>

            <View style = {Styles.requestTranscriptionButton}>
                <Button
                    title="Add Photos From Camera"
                    color="white"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => this.openCamera()}/>

            </View>

        </View>;


    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {this.getCreateNewJobButton()}
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