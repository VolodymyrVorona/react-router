import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:4040/books');
    this.setState({ books: data });
  }

  render() {
    const { url } = this.props.match;

    return (
      <>
        <h1>Єто страница Книги</h1>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <Link to={`${url}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
