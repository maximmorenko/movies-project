import React, { Component } from 'react';
import {Movies} from '../Components/Movies';
import Preloader from '../Components/Preloader';
import {Search} from '../Components/Search';
// мой ключ 3c1facc8 (http://www.omdbapi.com/?apikey=3c1facc8&s=all)

const API_KEY = process.env.REACT_APP_API_KEY //создаем переменную и записываем в нее значение ключа
// ключ запишется в переменную при сборке, и на гитхаб не попадет.

class Main extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          movies: [],
          loading: true
        }
    
        this.searchMovies = this.searchMovies.bind(this);
      }
    
    componentDidMount() {
        // получаем массив с сервера и записываем его в сетстейт, и потом достаем из него нужную инфо
        // массив с данными находится в ключе Search в объекте дата, 
        // поэтому обращаемся к этому ключу data.Search
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=all`)
        .then(response => response.json())
        // когда все данные загрузятся поменяем loading на false
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err);
            // также уберем бесконечную загруку
            this.setState({loading: false})
        })
        
    }
    // для реализации поиска нужна функция которая будет спускаться вниз и обновлять наш стейт с фильмами
    // функция будет принимать поисковую строку str , которую мы отправляем через фетч шаблонной строкой
    // обновим функцию, добавим параметр type и по умолчанию сделаем all
    // будем проверять еть ли ключ у тайпа, если есть то будем его менять на тот, который прислал пользователь
    searchMovies = (str, type='all') => {
        // в начале запустим loading: true, после обновления данных остановим его
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}`: ''}`) 
        // по этому добавляем еще одно выражение ${}, так как это выражение, 
        // то мы можем сделать еще одну проверку (тайп не равно 'all' и если это так, 
        // то мы добавим еще один амперсанд & (для скрепления гет параметров), 
        // добавим тайп и добавим то значение которое пришло снаружи) если 'all' то добавим пустую строку
        .then(response => response.json())
        // здессь остановим loading
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err);
            // также уберем бесконечную загруку
            this.setState({loading: false})
        })
    }
    

    render() {
        
        // сделаем прелоудер, для этого сначала сделаем деструктуризацию стейта
        const {movies, loading} = this.state;
        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {/* будем проверять, если ли movies в стейте не равно ли оно нулю 
            если длина есть то возвращаем наши фильмы, если нет то preloader*/}
            {/* передаем компоненту Search функцию поиска */}
            {/* поменяем условие. если идет загрузка, то запускаем прелоадер, если нет, то массив movies */}
            {
                loading ? <Preloader /> : (<Movies movies={movies}/>)
            }
            </main>
        
    }
}

export default Main; 