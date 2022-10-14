import React, { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { SearchIcon } from './svg/icon';

export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChangeInp = evt => {
    this.setState({
      searchValue: evt.target.value,
    });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <SearchIcon />
          </button>

          <input
            onChange={this.handleChangeInp}
            name="serchInput"
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
