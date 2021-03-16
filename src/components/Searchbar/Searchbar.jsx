import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query: ''
    }

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }

    render() {
        return (
            <header className={s.Searchbar}>
                <form
                    className={s.SearchForm}
                    onSubmit={this.handleSubmit}>
                    <button
                        type="submit"
                        className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>
                    
                    <input
                        className={s.SearchFormInput}
                        type="text"
                        value={this.state.query}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;