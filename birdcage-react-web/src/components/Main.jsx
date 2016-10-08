import React from 'react';
import NewToDo from './NewToDo';
import ToDos from './ToDos';

import {repo} from 'birdcage-data-mock';
// import {repo} from 'birdcage-data-couchdb';
// import {repo} from 'birdcage-data-rest';
// import {repo} from 'birdcage-data-firebase';

export default class Main extends React.Component {

    state = {
        newToDo: {},
        todos: [{title: 'First ToDo'}]
    };

    render() {

        let form =  <NewToDo todo={this.state.newToDo} onAddToDo={this.addToDo.bind(this)}/>;

        return (
            <div className="container">

                <div className="jumbotron">
                    <h1>Birdcage</h1>
                    <p>Capture something for later ...</p>
                </div>

                <div className="row">

                <div className="col-md-6 col-xs-12">
                    {form}
                </div>

                <div className="col-md-6 col-xs-12">
                        <ToDos todos={this.state.todos} onRemoveToDo={this.removeToDo.bind(this)}/>
                    </div>

                </div>
                <hr/>
                <footer>
                    <p>&copy; JavaScript Course</p>
                </footer>
            </div>
        );
    }

    componentWillMount() {
        repo.getTweets()
            .then(tweets => {
                console.log('Tweets');
                this.setState({todos: tweets})
            });
    }

    addToDo(todo) {

        repo.addTweet(todo.title)
            .then(() => {
                return repo.getTweets();
            })
            .then(tweets => {
                console.log('Tweets');
                this.setState({todos: tweets})
            });
    }

    removeToDo(todo) {
        alert('Not implemented!');
    }

    handleLogin({email, password}) {
        repo.init(email, password);
        this.setState({login: {name, password}});
    }
}
