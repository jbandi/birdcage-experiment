import 'babel-polyfill';
import 'isomorphic-fetch';
import assert from 'assert';

import Repo from './lib/client/birdcage-repository';

const repo = new Repo();

describe('Tweet Repository', () => {
   it('should return tweets', done => {
       const tweets = repo.getTweets()
           .then(tweets => {
               assert(tweets.length > 0);
               done();
           })
       ;
   })
});
