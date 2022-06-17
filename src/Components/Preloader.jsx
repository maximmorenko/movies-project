import React from 'react';

// прелоадер копируем с сайта https://materializecss.com/preloader.html

function Preloader(props) {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>       
    );
}

export default Preloader;