import React, { Component } from 'react';

// текстовый инпут берем тамже на сайте 

class Search extends Component {
    state = {
        search: '',
    }
    // функция нажатия кнопки ентер при поиске
    handleKey = (e) => {
        if (e.key === 'Enter') {
            // по нажатию кнопки ентер в строке поиска
            // вызываем нашу функцию поиска из пропсов и передаем ей текущий стейт
            this.props.searchMovies(this.setState.search)
        }
    }
    render() {
        return <div className="row">
                <div className="col s12">
                    <div className="input-field ">
                        <input 
                        className='validate'
                        type='search'
                        placeholder='search'
                        value={this.state.search}
                        onChange={(e) => {this.setState({search: e.target.value})}}
                        // отправку поиска сделаем на событии нажатия кнопки ентер и создадим визуальную кнопку search
                        onKeyDown={this.handleKey}
                        />
                        <button className='btn search-btn' onClick={() => this.props.searchMovies(this.setState.search)} >Search</button>
                    </div>
                </div>
            </div>
    }
}

export {Search};