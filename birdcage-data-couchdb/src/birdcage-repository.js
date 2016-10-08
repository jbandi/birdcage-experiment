// import 'babel-polyfill';
import uuid from 'uuid';

export default class BirdcageRepository {
    getTweets() {
        return fetch('http://localhost:5984/birdcage/_design/tweets/_view/all', {headers: {'Cache-Control': 'no-cache'}})
            .then(r => r.json())
            .then(v => v.rows.map(r => r.value))
            .catch(e => console.log(e))
    }

    addTweet(content){

        const tweet = {
            type: 'tweet',
            content: content,
            priority: Date.now(),
            created: new Date(),
            tweeted: null,
            count: 0,
        };

        return fetch(`http://localhost:5984/birdcage/${uuid.v4()}`, {method: 'PUT', body: JSON.stringify(tweet)});
    }
}
