import {PORT} from '../config';

export default class BirdcageRepository {
    getTweets() {
        return fetch(`http://localhost:${PORT}/api/tweets`, {headers: {'Cache-Control': 'no-cache'}})
            .then(r => r.json())
            .then(r => r.data)
            .catch(e => console.log(e))
    }
}
