import React, {Component, PropTypes} from 'react';
import {NavPane, NavPaneItem, Text} from 'react-desktop/windows';
import TweetDialog from './TweetDialog'
import TweetList from './TweetList'

import {repo} from 'birdcage-data-mock';
// import {repo} from 'birdcage-data-couchdb';
// import {repo} from 'birdcage-data-rest';
// import {repo} from 'birdcage-data-firebase';

export default class Birdcage extends Component {
  static propTypes = {
    tweets: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  constructor() {
    super();
    this.state = {
      selected: 'Cage Entry'
    }
  }

  render() {
    return (
      <NavPane openLength={200} push color={this.props.color} theme={this.props.theme} canPaneToggle={false}
               defaultIsPaneExpanded={false} paneExpandedLength="52px">
        {this.renderItem('Cage Entry', <TweetDialog repo={repo}/>)}
        {this.renderItem('Full Cage', <TweetList {...this.props} repo={repo}/>)}
      </NavPane>
    );
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={title}
        icon={this.renderIcon(title)}
        theme="light"
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({selected: title})}
        padding="10px 20px"
        push
      >
        <Text>{content}</Text>
      </NavPaneItem>
    );
  }

  renderIcon(name) {
    const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
    switch (name) {
      case 'Cage Entry':
        return (
          <span className="icon icon-pencil" style={{fontSize: 25, paddingLeft: 0}}></span>
        );
      case 'Full Cage':
        return (
          <span className="icon icon-twitter" style={{fontSize: 25, paddingLeft: 0}}></span>

        );
    }
  }
}
