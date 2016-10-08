import React, {Component} from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';


export default class TweetListItem extends Component {
    render() {
        let swipeBtns = [{
            text: 'Delete',
            backgroundColor: 'red',
            onPress: () => { this.props.onDelete(this.props.item) }
        }];

        return (
            <Swipeout right={swipeBtns} key={this.props.item._id}>
                <TouchableHighlight>
                    <View style={styles.li}>
                        <Text style={styles.liText}>{this.props.item.content}</Text>
                    </View>
                </TouchableHighlight>
            </Swipeout>
        );
    }
}


const styles = StyleSheet.create({
    li: {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
    liText: {
        color: '#333',
        fontSize: 16,
    },
});
