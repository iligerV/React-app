import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types
import ModalToDlt from './ModalToDlt'
// далее просто скопировано все что было, кроме последней строки
class Article extends React.Component {
    state = {
        visible: false,
        articleStory: this.props.data.text,
        btnVisibleInput: false,
        btnVisibleModalToDelete: false,
    };

    handleReadMoreClick = () => {
        this.setState({visible: true})
    };

    handleArticleStorySaveChanges = e => {
        this.setState({articleStory: e.currentTarget.value})
    };

    handleBtnMakeVisibleInput = () => {
        const {btnVisibleInput} = this.state;

        this.setState({btnVisibleInput: !btnVisibleInput});
    };

    handleBtnMakeVisibleModalToDelete = () => {
        const {btnVisibleModalToDelete} = this.state;

        this.setState({btnVisibleModalToDelete: !btnVisibleModalToDelete});
    };

    render() {
        const {author, bigText} = this.props.data;
        const {visible, btnVisibleInput, articleStory, btnVisibleModalToDelete} = this.state;
        return (
            <React.Fragment>
                {
                    btnVisibleModalToDelete
                    ? <
                        ModalToDlt
                            handleBtnMakeVisibleModalToDelete = {this.handleBtnMakeVisibleModalToDelete}
                        />
                    : null
                }
                <div className="article">
                    <div className='article_top_div'>
                        <p className="news__author">{author}:</p>
                        {!btnVisibleInput
                            ? <p className="news__text">{articleStory}</p>
                            : <input
                                onChange={this.handleArticleStorySaveChanges}
                                type="text"
                                value={articleStory}
                            />
                        }
                        {!visible
                            ? <a
                                onClick={this.handleReadMoreClick}
                                href="#readmore"
                                className="news__readmore"
                            >
                                Подробнее
                            </a>
                            : <p className="news__big-text">{bigText}</p>
                        }
                    </div>
                    <div className="article_btm_div">
                        <button
                            className='delete_news'
                            onClick={this.handleBtnMakeVisibleModalToDelete}
                        >Удалить</button>

                        {!btnVisibleInput
                            ? < button
                                onClick={this.handleBtnMakeVisibleInput}
                            >
                                Изменить
                            </button>
                            : <button
                                onClick={this.handleBtnMakeVisibleInput}
                            >
                                Сохранить
                            </button>
                        }
                    </div>
                </div>
            </React.Fragment>
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

export {Article} // именованный экспорт