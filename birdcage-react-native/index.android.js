import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    TouchableHighlight,
    Text
} from 'react-native';
import Drawer from './src/components/android/Drawer';
import Toolbar from './src/components/android/Toolbar';
import TweetScreen from './src/TweetScreen';
import TweetListScreen from './src/TweetListScreen';





const tweetView = (
    <View style={{flex: 1}}>
        <TweetScreen/>
    </View>
);

const tweetListView = (
    <View>
        <TweetListScreen/>
    </View>
);

class birdcage extends Component {

    constructor(props) {
        super(props);
        this.state = {title: 'Cage Entry', mainView: tweetView};
    }

    render() {

        const navigationView = <View style={{flex: 1, marginTop:20}}>
            <TouchableHighlight style={styles.button}
                                underlayColor='#99d9f4'
                                onPress={this.goToTweetView.bind(this)}>
                <Text style={styles.navText}>Entrance</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                                underlayColor='#99d9f4'
                                onPress={this.goToTweetListView.bind(this)}>
                <Text style={styles.navText}>Full Cage</Text>
            </TouchableHighlight>

        </View>;

        return (

            <DrawerLayoutAndroid
                ref="drawer"
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>

                <Toolbar title={this.state.title} container={this}/>
                {this.state.mainView}

            </DrawerLayoutAndroid>


        );
    }

    goToTweetView(){
        this.setState({title: 'Cage Entry', mainView: tweetView});
        this.refs.drawer.closeDrawer();
    }

    goToTweetListView() {
        this.setState({title: 'Waiting to Escape', mainView: tweetListView});
        this.refs.drawer.closeDrawer();
    }

}


AppRegistry.registerComponent('birdcage', () => birdcage);


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
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
