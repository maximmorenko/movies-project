import React from 'react';
import {Movie} from './Movie';
// ожидает массив фильмов

function Movies(props) {
    const {movies = [] } = props; // чтобы не было ошибки Undefined сделаем значение по умолчанию пустой массив
    return (
        <div className="movies">
            {/* пройдем по массиву фильмов мапом и передадим пропсы карточке (movie) */}
            {/* // чтобы отдельно каждый пропс не прописывать развернем их все спред оперратором ...item
                // где item это объект с данными об одном фильме, 
                // таким образом мы все ключи объекта отправляем вниз в movie 
                // проверим условие, если массив не пустой, то запускае мап по нему, если пустой, то выведем текст */}
            {movies.length ? movies.map(item => (
                <Movie key={item.imdbID} {...item}/>
                )) : <h4>Movies not found</h4>}
        </div>
    );
}

export {Movies};