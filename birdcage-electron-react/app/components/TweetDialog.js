import React, { Component } from 'react';
import { Dialog, Button } from 'react-desktop/macOs';

export default class TweetDialog extends Component {
  render() {
    return (
      <div style={{flex: 1}}>
      <form>
        <div className="form-group" >
          <label>Say something relevant later:</label>
          <textarea ref='title' className="form-control" rows="5" ></textarea>
        </div>
      </form>
        <Button color="blue" onClick={this.captureTweet.bind(this)}>
          Capture Tweet
        </Button>
      </div>
    );
  }

  captureTweet(){
    const {repo} = this.props;

    repo.addTweet(this.refs.title.value);
    this.refs.title.value = '';
  }

}
