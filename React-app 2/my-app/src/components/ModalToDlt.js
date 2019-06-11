import React from 'react'
import PropTypes from 'prop-types'

class ModalToDlt extends React.Component {
    state = {
      hideModal: false,
    };
    deleteNews = () => {

        console.log('Новость удалена');
        this.setState({hideModal: true})
    };
    declineDeleteNews = () => {
        this.setState({hideModal: true})
    };
    render() {
        const { hideModal } = this.state;
        return (
            <React.Fragment>
            {!hideModal
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
                {!hideModal
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