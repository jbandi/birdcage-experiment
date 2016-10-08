import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, ListView } from 'react-native';
import TweetListItem from './TweetListItem';

import {repo} from './tweetRepo';

const data = [{title:'row 1'}, {title:'row 2'}];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TweetScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderItem.bind(this)}
            />
        );
    }

    componentDidMount(){
        repo.getTweets()
            .then(tweets => {
                this.setState({ dataSource: ds.cloneWithRows(tweets)})
            });
    }

    _renderItem(item) {

        return (
            <TweetListItem item={item} onDelete={this._deleteItem.bind(this)}/>
        );
    }

    _deleteItem(item){
        data.splice(data.indexOf(item),1);

        this.setState({
            dataSource: ds.cloneWithRows(data),
        });
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
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
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
        color: '#48BBEC'
    }
});
