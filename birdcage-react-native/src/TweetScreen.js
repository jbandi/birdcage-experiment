import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

import {repo} from './tweetRepo';

export default class TweetScreen extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Birdcage on React Native!!!!
                </Text>

                <View style={styles.flowRight}>

                    <TextInput
                        ref="content"
                        style={styles.searchInput}
                        multiline={true}
                        onChange={this.onSearchTextChanged.bind(this)}
                        placeholder='Type something relevant ...'
                        placeholderTextColor="silver"
                    />

                </View>
                <View style={styles.flowRight}>
                    <TouchableHighlight style={styles.button}
                                        underlayColor='#99d9f4'
                                        onPress={this.onSearchPressed.bind(this)}>
                        <Text style={styles.buttonText}>Capture Tweet!</Text>
                    </TouchableHighlight>

                </View>

            </View>
        );
    }

    onSearchPressed() {
        repo.addTweet(this.refs.content._lastNativeText)
        .catch(err => console.log(err));
        this.refs.content.setNativeProps({text: ''});
    }

    onSearchTextChanged() {
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    flowRight: {
        flexDirection: 'row',
        // alignItems: 'center',
        // alignSelf: 'stretch'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxWidth: 400
    },
    searchInput: {
        height: 150,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
        backgroundColor: 'whitesmoke',
        textAlignVertical: 'top',

    }
});
