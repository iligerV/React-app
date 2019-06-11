import React from 'react'
import PropTypes from 'prop-types'

class ModalToDlt extends React.Component {

    deleteNews = () => {
        console.log('Новость удалена');
        this.props.handleBtnMakeVisibleModalToDelete();
    };
    declineDeleteNews = () => {
        this.props.handleBtnMakeVisibleModalToDelete();
    };
    render() {
        return (
            <React.Fragment>
            {this.props.handleBtnMakeVisibleModalToDelete
                ? <div className='modal_to_dlt'>
                    <h3>Вы уверены, что хотите удалить новость?</h3>
                    <div>
                        <button
                            onClick={this.deleteNews}
                        >ДА</button>
                        <button
                            onClick={this.declineDeleteNews}
                        >НЕТ</button>
                    </div>
                 </div>
                : null}
                {this.props.handleBtnMakeVisibleModalToDelete
                    ? <div
                        className='bg'
                        onClick={this.declineDeleteNews}
                    >'</div>
                    : null
                }
            </React.Fragment>
        )
    }
}

export default ModalToDlt;