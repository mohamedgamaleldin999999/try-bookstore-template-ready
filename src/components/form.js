import React from 'react';
import PropTypes from 'prop-types';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, author } = this.state;
    if (title && author) {
      this.props.onCreateBook({ title, author });
      this.setState({ title: '', author: '' });
    }
  };

  render() {
    const { title, author } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={this.handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>
    );
  }
}

BookForm.propTypes = {
  onCreateBook: PropTypes.func.isRequired,
};

export default BookForm;
