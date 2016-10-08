import React from 'react';

export default class NewToDo extends React.Component {

    state = {
        todo: {}
    };

    render() {
        return (
            <div className="well">
                <form className="form-horizontal">
                    <legend> Add a Tweet</legend>
                    <div className="form-group">
                        <div className="col-md-9">
                            <input id="description" type="text" name="description" placeholder="Add a description"
                                   className="form-control"
                                   value={this.state.todo.title} onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    <div className="form-group">

                        <div className="col-md-9 col-md-offset-3">
                            <input id="addBtn" type="button" className="btn btn-primary" value="Add" onClick={this.addTodo.bind(this)}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    handleChange(event){
        this.setState({todo: {title: event.target.value}})
    }

    addTodo(){
        this.props.onAddToDo(this.state.todo);
        this.setState({todo:{}});
    }
}
