import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';

export default class Drawer extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop:20}}>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#99d9f4'
                                    onPress={this.props.transitions[0]()}>
                    <Text style={styles.navText}>Entrance</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#99d9f4'
                                    onPress={this.props.transitions[1]()}>
                    <Text style={styles.navText}>Full Cage</Text>
                </TouchableHighlight>

            </View>
        );
    }

}

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
        alignItems: 'flex-end'
    },
    navText: {
        fontSize: 22,
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'dimgray',
        alignSelf: 'flex-start'
    },
});
