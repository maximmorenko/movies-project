import React from 'react';

function Movie(props) {
    // делаем деструктуризацию пропсов, что именно придет смотрим через постман
    const {Title, Year, imdbID, Type, Poster} = props;
    return (
        // вставляем карточку из библиотеки https://materializecss.com/cards.html#
        // меняем class на className
        // закрываем одинарные теги
        <div id={imdbID} className="card movie">
          <div className="card-image waves-effect waves-block waves-light">
            {/* картинку вудем получать динамически, через пропс постер */}
            {/* на случай если картинка не придет, или придет в другом формате, устроим проверку и
            подгрузим другую, (заглушку) с сайта placeholder.com*/}
            {/*  на пустышку, в качестве текста динамически подставляем {Title}*/}
            {
              Poster === 'N/A' ? 
              <img className="activator" src={`https://via.placeholder.com/300x420?text=${Title}`}/> 
              : <img className="activator" src={Poster}/>
            }
             
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <p>{Year}<span className="right">{Type}</span></p>
          </div>
        </div>
  );
}

export default Movie;