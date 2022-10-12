import React, { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchQuarry: '',
  };

  handleChangeInp = evt => {
    console.log(evt.target.value);
    this.setState({
      searchQuarry: evt.target.value,
    });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={onSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChangeInp}
            name="serchInput"
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuarry}
          />
        </form>
      </header>
    );
  }
}
