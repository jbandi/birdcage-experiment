import React, {Component} from 'react';
import { AppRegistry, StyleSheet, NavigatorIOS } from 'react-native';
import TweetScreen from './src/TweetScreen';
import TweetListScreen from './src/TweetListScreen';

class birdcage extends Component {

    render() {
        return (

            <NavigatorIOS
                ref="nav"
                style={styles.container}
                translucent={true}
                initialRoute={{
                    title: 'Cage Entry',
                    component: TweetScreen,
                    rightButtonTitle: 'See Cage >',
                    onRightButtonPress: this.goToTweetList.bind(this)
                }}
            />
        );
    }

    goToTweetList(){
        this.refs.nav.navigator.push({
            title: 'Waiting to Escape',
            component: TweetListScreen,
            leftButtonTitle: '< Back',
            onLeftButtonPress: () => { this.refs.nav.navigator.pop(); }
        })
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

AppRegistry.registerComponent('birdcage', () => birdcage);
