import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    const { book, onDelete } = this.props;

    return (
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button type="button" onClick={() => onDelete(book.id)}>Delete</button>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
