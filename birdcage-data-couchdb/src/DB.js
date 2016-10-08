import uuid from 'uuid';

export async function initDb() {
    console.log('Initializing DB ...');

    await fetch('http://127.0.0.1:5984/birdcage', {method: 'DELETE'});
    console.log('db deleted');

    await fetch('http://127.0.0.1:5984/birdcage', {method: 'PUT'});
    console.log('db created')

    const tweetView = {
        "_id": "_design/tweets",
        "language": "javascript",
        "views": {
            "all": {
                "map": "function(doc) { if (doc.type == 'tweet')  emit(doc.priority, doc) }"
            }
        }
    };
    await fetch(`http://127.0.0.1:5984/birdcage/_design/tweets`, {method: 'PUT', body: JSON.stringify(tweetView)});
    console.log('tweet view created');

    const tweet = {
        type: 'tweet',
        content: 'Use CouchDB',
        priority: Date.now(),
        created: new Date(),
        tweeted: null,
        count: 0,

    };
    await fetch(`http://127.0.0.1:5984/birdcage/${uuid.v4()}`, {method: 'PUT', body: JSON.stringify(tweet)});
    console.log('tweet created');
}
