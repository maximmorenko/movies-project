// папка лейаут (макет) для шапки и подвала
// у хедера не будет никаких состояний, поэтому делаем его функциональным компонентом
// rsf снипет функционально компонента
// навбар берем из библитеки https://materializecss.com/navbar.html
// так как мы работаем в jsx то меняем классы на классНейм classNameName="nav-wrapper"
// ctrl+H - заменить все сразу
// logo меняем на React Movies

import React from 'react';

function Heder(props) {
    return (
      // меняем цвет наву, добавляем классНейм наву с названием цвета из палитры в библиотеке https://materializecss.com/color.html
        <nav className="teal darken-1">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">React Movies</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/maximmorenko/movies-project">Repo</a></li>
      </ul>
    </div>
  </nav>
    );
}

export default Heder;