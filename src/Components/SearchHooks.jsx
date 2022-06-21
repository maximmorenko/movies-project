// перепишем классовые компоненты на функциональные
import React, { useState } from 'react';


const SearchHooks = (props) => {
    // достанем функцию из пропсов
    const {searchMovies = Function.prototype} = props; // по умолчанию сделаем 
    //создадим два состояния search и type
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');


    // функция нажатия кнопки ентер при поиске
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            // по нажатию кнопки ентер в строке поиска
            // вызываем нашу функцию поиска из пропсов и передаем ей текущий стейт
            searchMovies(search, type);
        }
    };
    // создадим функцию обработчик события, которая будет обновлять стейт type
    // функция будет принимать событие выбра датаатрибута data-type из коллекции dataset
    const hendleFilter = (event) => {
        setType(event.target.dataset.type);
            // здесь мы должны вызвать нашу функцию, но только после обновления стейта, 
            // вызовим функцию, также передаем второй параметр, тайп.
        searchMovies(search, event.target.dataset.type);
    };
    
        return (
            <div className='row'>
                <div className='col s12'>
                    <div className='input-field'>
                        <input
                            className='validate'
                            type='search'
                            placeholder='please enter name in english'
                            value={search}
                            onChange={(event) => {
                                setSearch(event.target.value); // перезаписываем наш стейт
                            }}
                            // отправку поиска сделаем на событии нажатия кнопки ентер и создадим визуальную кнопку search
                            onKeyDown={handleKey}
                        />
                        <button
                            className='btn search-btn'
                            onClick={() =>
                                searchMovies(search, type)
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
                                onChange={hendleFilter}
                                checked={type === 'all'} // сравниваем текущий стейт, если он равен 'all' то rtue
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='movie'
                                onChange={hendleFilter}
                                checked={type === 'movie'} // сравниваем текущий стейт, если он равен 'movie' то rtue
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='series'
                                onChange={hendleFilter}
                                checked={type === 'series'} // сравниваем текущий стейт, если он равен 'series' то rtue
                            />
                            <span>Series</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    
}

export { SearchHooks };
