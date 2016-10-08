
const tweets = [
    {
        _id: 0,
        content: 'Wow I am using JavaScript!',
        created: new Date()
    },
    {
        _id: 1,
        content: 'Woot! I just discovered React!',
        created: new Date()
    }
];

export default class BirdcageRepository {
    getTweets(){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve([...tweets]), 0); // return a snapshot of the array
        });
    }

    addTweet(content) {

        const newTweet = {
            _id: Math.random(),
            content,
            created: new Date()
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                tweets.push(newTweet);
                resolve()
            }, 0);
        });

    }
}
