import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

class BookList extends React.Component {
  render() {
    const { books, onDelete } = this.props;

    return (
      <div>
        {books.map(book => (
          <Book key={book.id} book={book} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
