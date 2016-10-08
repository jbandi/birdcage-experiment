import React, {Component} from 'react';
import {StyleSheet, ToolbarAndroid} from 'react-native';

export default class Toolbar extends Component {
    render() {
        return (
            <ToolbarAndroid
                navIcon={require('./tabnav_list@3x.png')}
                title={this.props.title}
                style={styles.toolbar}
                onIconClicked={this.onIconClicked.bind(this)}>
            </ToolbarAndroid>
        );
    }
    onIconClicked(){
        this.props.container.refs.drawer.openDrawer();
    }
}

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
        alignItems: 'flex-end'
    }
});
