import React, { Component } from 'react';
import { graphql } from 'react-apollo'; //help to bind Apollo to react
import { getAuthorsQuery, addBookMutation } from '../queries/queries';




class AddBook extends Component {
    constructor(props) {

        super(props)
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    displayAuthors() {
        var data = this.props.getAuthorsQuery;
        //console.log(data.authors)
        if (data.loading) {
            return (<option disabled>Loadig authors ...</option>)
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }

    submitForm(e) {
        e.preventDefault();
        //this.props.addBookMutation();
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            }
        });
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => this.setState({ authorId: e.target.value })}>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>

            </form>
        );
    }
}

export default graphql(addBookMutation, { name: "addBookMutation" })(graphql(getAuthorsQuery, { name: "getAuthorsQuery" })(AddBook));