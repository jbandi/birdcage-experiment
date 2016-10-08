import React, { Component } from 'react';
import { Dialog, Button } from 'react-desktop/macOs';

export default class extends Component {

  render() {
    const {tweets} = this.props;
    return (
      <ul className="list-group">
        {/*<li className="list-group-header">*/}
          {/*<input className="form-control" type="text" placeholder="Search for text"/>*/}
        {/*</li>*/}

        <b> Tweets waiting: {tweets.length} </b>

        {tweets.map(t => {

          const date = t.created ? t.created.toLocaleString() : t.last_sent;

          return (<li className="list-group-item" key={t._id}>
            <img className="media-object pull-left" src="./assets/img/twitter.png" width="32" height="32"/>
            <div className="media-body">
              <strong>{t.content}</strong>
              <p>{date}</p>
            </div>
          </li>
          );
        })}

      </ul>
    );
  }

  componentDidMount(){
    const {actions, repo} = this.props;
    repo.getTweets()
      .then(tweets => actions.tweetsLoaded(tweets));
  }
}
