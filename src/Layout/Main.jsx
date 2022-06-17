import React, { Component } from 'react';
import {Movies} from '../Components/Movies';
import Preloader from '../Components/Preloader';
import {Search} from '../Components/Search';
// мой ключ 3c1facc8, 78584b3c


class Main extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          movies: [],
        }
    
        this.searchMovies = this.searchMovies.bind(this);
      }
    
    componentDidMount() {
        // получаем массив с сервера и записываем его в сетстейт, и потом достаем из него нужную инфо
        // массив с данными находится в ключе Search в объекте дата, 
        // поэтому обращаемся к этому ключу data.Search
    fetch('http://www.omdbapi.com/?apikey=3c1facc8&s=terminator')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    // для реализации поиска нужна функция которая будет спускаться вниз и обновлять наш стейт с фильмами
    // функция будет принимать поисковую строку str , которую мы отправляем через фетч шаблонной строкой
    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=3c1facc8&s=${str}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    

    render() {
        
        // сделаем прелоудер, для этого сначала сделаем деструктуризацию стейта
        const {movies} = this.state;
        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {/* будем проверять, если ли movies в стейте не равно ли оно нулю 
            если длина есть то возвращаем наши фильмы, если нет то preloader*/}
            {/* передаем компоненту Search функцию поиска */}
            {
                movies.length ? (<Movies movies={this.state.movies}/>) : <Preloader />
            }
            </main>
        
    }
}

export default Main; 