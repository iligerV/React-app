import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types
// далее просто скопировано все что было, кроме последней строки
class Article extends React.Component {
    state = {
        visible: false,
        articleStory: this.props.data.text,
        btnVisibleInput: false,
    };
    handleReadMoreClck = e => {
        e.preventDefault();
        this.setState({ visible: true })
    };
    handleArticleStorySaveChanges = e => {
        this.setState({articleStory: e.currentTarget.value})
    };
    handleBtnMakeVisibleInput = e => {
        e.preventDefault();
            this.setState({ btnVisibleInput: true });
    };
    handleBtnMakeVisiblePText = e => {
        e.preventDefault();
            this.setState({ btnVisibleInput: false });
    };
    render() {
        const { author, text, bigText } = this.props.data;
        const { visible, btnVisibleInput, articleStory } = this.state;
        return (
            <div className="article">
                <div>
                    <p className="news__author">{author}:</p>
                    {!btnVisibleInput
                        ?
                        <p className="news__text">{articleStory}</p>
                        :
                        <input
                            onChange={this.handleArticleStorySaveChanges}
                            type="text"
                            value={articleStory}
                        />
                    }
                    {!visible && (
                        <a
                            onClick={this.handleReadMoreClck}
                            href="#readmore"
                            className="news__readmore"
                        >
                            Подробнее
                        </a>
                    )}
                    {visible && <p className="news__big-text">{bigText}</p>}
                </div>
                <div className="article_btn_rewrite">
                    {!btnVisibleInput &&
                    < button
                        onClick={this.handleBtnMakeVisibleInput}
                        >Изменить</button>
                    }
                    {btnVisibleInput &&
                        <button
                            onClick={this.handleBtnMakeVisiblePText}
                        >Сохранить</button>
                    }
                </div>
            </div>
        )
    }
}
Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired, // добавили id, это число, обязательно
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired,
    }),
};
export { Article } // именованный экспорт