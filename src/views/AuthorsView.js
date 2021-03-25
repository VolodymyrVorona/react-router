import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import AuthorBooks from '../components/AuthorBooks';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const { data } = await axios.get(
      'http://localhost:4040/authors?_embed=books',
    );

    this.setState({ authors: data });
  }

  render() {
    const { url, path } = this.props.match;

    return (
      <>
        <h1>Єто страница Книги</h1>
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>

        <Route
          path={`${path}/:authorsId`}
          render={props => {
            const bookId = Number(props.match.params.authorsId);
            const author = this.state.authors.find(({ id }) => id === bookId);

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default AuthorsView;
