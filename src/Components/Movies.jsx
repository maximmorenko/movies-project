import React from 'react';
import {Movie} from './Movie';
// ожидает массив фильмов

function Movies(props) {
    const {movies} = props;
    return (
        <div className="movies">
            {/* пройдем по массиву фильмов мапом и передадим пропсы карточке (movie) */}
            {/* // чтобы отдельно каждый пропс не прописывать развернем их все спред оперратором ...item
                // где item это объект с данными об одном фильме, 
                // таким образом мы все ключи объекта отправляем вниз в movie */}
            {movies.map(item => (
                <Movie key={item.imdbID} {...item}/>
                ))}
        </div>
    );
}

export {Movies};