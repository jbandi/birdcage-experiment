import firebase from 'firebase';
import {config, EMAIL, PWD, USER} from './secret';

class BirdcageRepository {

    isInitialized = false;

    init() {
        if (this.isInitialized)
            return Promise.resolve();

        firebase.initializeApp(config);
        return firebase.auth().signInWithEmailAndPassword(EMAIL, PWD)
            .then(() => {
                this.isInitialized = true;
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    getTweets() {
        return this.init()
            .then(() => {
                return new Promise(function (resolve) {

                    const postRef = firebase.database().ref(`posts/${USER}`)
                        .orderByPriority()
                        .startAt(2);
                    postRef.on('value', snapshot => {
                        var tweetsArray = [];
                        var tweetsObj = snapshot.exportVal();
                        if (tweetsObj) {
                            tweetsArray = Object.keys(tweetsObj).map(x => tweetsObj[x])
                        }
                        resolve(tweetsArray);
                    })
                });
            });
    }

    addTweet(title) {
        return this.init()
            .then(() => {
                var tweet = {
                    content: title,
                    // '.priority': Date.now(),
                    '.priority':  Math.random() * 10000 + 2,
                    sent_count: 0
                };
                return new Promise(function (resolve) {
                    firebase.database().ref(`posts/${USER}`).push(tweet);
                    resolve();
                });
            });
    }
}

export default BirdcageRepository;
