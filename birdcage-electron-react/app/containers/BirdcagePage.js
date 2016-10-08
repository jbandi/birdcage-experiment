import Birdcage from '../components/Birdcage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TweetActions from '../actions/tweets'

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TweetActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Birdcage);
