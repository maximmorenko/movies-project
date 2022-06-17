import React, { Component } from 'react';
import Movies from '../Components/Movies';
import Preloader from '../Components/Preloader';


class Main extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        // получаем массив с сервера и записываем его в сетстейт, и потом достаем из него нужную инфо
        // массив с данными находится в ключе Search в объекте дата, 
        // поэтому обращаемся к этому ключу data.Search
    fetch('http://www.omdbapi.com/?apikey=3c1facc8&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render() {
        // сделаем прелоудер, для этого сначала сделаем деструктуризацию стейта
        const {movies} = this.state;
        return (<main className="container content">
            {/* будем проверять, если ли movies в стейте не равно ли оно нулю 
            если длина есть то возвращаем наши фильмы, если нет то preloader*/}
            {
                movies.length ? (<Movies movies={this.state.movies}/>) : <Preloader />
            }
            
            
        </main>
        )
    }
}

export default Main; 