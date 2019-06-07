import React from 'react'; // подключение библиотеки React
import { Add } from './components/Add' // ./ = текущая директория,
import { News } from './components/News' // далее мы идем в директорию components и в нужный компонент
import newsData from './data/newsData'
import './App.css'; // подключение файла стилей

class App extends React.Component {
    state = {
        news: newsData,
    };
    handleAddNews = data => {
        const nextNews = [data, ...this.state.news]
        this.setState({ news: nextNews })
    };
    render() {
        return (
            <React.Fragment>
                <Add onAddNews={this.handleAddNews} />
                <h3>Новости</h3>
                <News data={this.state.news} />
            </React.Fragment>
        )
    }
}
export default App;
