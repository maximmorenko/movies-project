import React, { Component } from 'react';

// текстовый инпут берем тамже на сайте

class Search extends Component {
    state = {
        search: '',
        type: 'all',
    };
    // 
    // функция нажатия кнопки ентер при поиске
    handleKey = (e) => {
        if (e.key === 'Enter') {
            // по нажатию кнопки ентер в строке поиска
            // вызываем нашу функцию поиска из пропсов и передаем ей текущий стейт
            this.props.searchMovies(this.setState.search);
        }
    };
    // создадим функцию оброботчик события, которая будет обновлять стейт type
    // функция будет принимать событие выбра датаатрибута data-type из коллекции dataset
    hendleFilter = (e) => {
        this.setState({ type: e.target.dataset.type });
    };
    // добавим ф-цию в кнопки

    render() {
        return (
            <div className='row'>
                <div className='col s12'>
                    <div className='input-field'>
                        <input
                            className='validate'
                            type='search'
                            placeholder='search'
                            value={this.state.search}
                            onChange={(e) => {
                                this.setState({ search: e.target.value });
                            }}
                            // отправку поиска сделаем на событии нажатия кнопки ентер и создадим визуальную кнопку search
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className='btn search-btn'
                            onClick={() =>
                                this.props.searchMovies(this.setState.search)
                            }
                        >
                            Search
                        </button>
                    </div>
                    <div>
                        {/* добавим лейблам дата атрибуты, названия смотрим на http://www.omdbapi.com/ (type)*/}
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='all'
                                onChange={this.hendleFilter}
                                checked={this.state.type === 'all'} // сравниваем текущий стейт, если он равен 'all' то rtue
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='movie'
                                onChange={this.hendleFilter}
                                checked={this.state.type === 'movie'} // сравниваем текущий стейт, если он равен 'movie' то rtue
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='series'
                                onChange={this.hendleFilter}
                                checked={this.state.type === 'series'} // сравниваем текущий стейт, если он равен 'series' то rtue
                            />
                            <span>Series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
