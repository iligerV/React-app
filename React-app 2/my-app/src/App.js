import React from 'react'; // подключение библиотеки React
import { Add } from './components/Add' // ./ = текущая директория,
import { News } from './components/News' // далее мы идем в директорию components и в нужный компонент

import './App.css'; // подключение файла стилей

class App extends React.Component {
    state = {
        news: null,
        isLoading: true,
    };
    static getDerivedStateFromProps(props, state) {
        let nextFilteredNews;
        // смотрим в state.news (ранее смотрели в props)
        // и проверяем, чтобы не клоинировать null
        // например, в момент первой отрисовки
        if (Array.isArray(state.news)) {
            nextFilteredNews = [...state.news];
            nextFilteredNews.forEach((item) => {
                if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
                    item.bigText = 'СПАМ'
                }
            });
            return {
                filteredNews: nextFilteredNews,
            }
        }
        return null
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => {
                        this.setState({ news: data, isLoading: false } );
                    }, 1000);

            })
    }

    handleAddNews = data => {
        const nextNews = [data, ...this.state.news];
        this.setState({ news: nextNews })
    };
    render() {
        const { news, isLoading } = this.state;

        return (
            <React.Fragment>
                <Add onAddNews={this.handleAddNews} />
                <h3>Новости</h3>
                {isLoading && <p>Загружаю...</p>}
                {Array.isArray(news) && <News data={news} />}
            </React.Fragment>
        )
    }
}
export default App;
