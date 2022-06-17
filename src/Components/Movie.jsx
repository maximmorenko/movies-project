import React from 'react';

function Movie(props) {
    // делаем деструктуризацию пропсов, что именно придет смотрим через постман
    const {
      Title: title, 
      Year: year, 
      imdbID: id, 
      Type: type, 
      Poster: poster
    } = props;
    return (
        // вставляем карточку из библиотеки https://materializecss.com/cards.html#
        // меняем class на className
        // закрываем одинарные теги
        <div id={id} className="card movie">
          <div className="card-image waves-effect waves-block waves-light">
            {/* картинку вудем получать динамически, через пропс постер */}
            {/* на случай если картинка не придет, или придет в другом формате, устроим проверку и
            подгрузим другую, (заглушку) с сайта placeholder.com*/}
            {/*  на пустышку, в качестве текста динамически подставляем {Title}*/}
            {
              poster === 'N/A' ? 
              <img className="activator" src={`https://via.placeholder.com/300x420?text=${title}`}/> 
              : <img className="activator" src={poster}/>
            }
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year}<span className="right">{type}</span></p>
          </div>
        </div>
  );
}

export {Movie};