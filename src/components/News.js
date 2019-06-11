import React from 'react';
import PropTypes from "prop-types";
import { Article } from './Article' // идти в components не нужно, так как мы уже в этой директории

class News extends React.Component {

    renderNews = () => {
        const { data } = this.props;
        let newsTemplate = null;

        data.length
            ?
            newsTemplate = data.map(function(item) {
                return <Article key={item.id} data={item} />;
            })
            :
            newsTemplate = <p>К сожалению новостей нет</p>;

        return newsTemplate;
    };
    render() {
        const { data } = this.props;
        return (
            <div className="news">
                {this.renderNews()}
                {data.length ? (
                    <strong className={"news__count"}>
                        Всего новостей: {data.length}
                    </strong>
                ) : null}
            </div>
        );
    }
}
News.propTypes = {
    data: PropTypes.array.isRequired
};
export { News }