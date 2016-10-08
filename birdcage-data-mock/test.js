import 'babel-polyfill';
import assert from 'assert';

import {repo} from './lib/index';

describe('Tweet Repository', () => {
    it('should return tweets', async () => {
        const tweets = await repo.getTweets();
        assert.equal(tweets.length, 2);
    });

    it('should add a tweet', async () => {
        const initialTweets = await repo.getTweets();
        await repo.addTweet(`Hello at ${new Date()}`);
        const newTweets = await repo.getTweets();
        assert.equal(initialTweets.length + 1, newTweets.length);
    })
});
