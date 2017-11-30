import './Game.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateRoom from "../CreateRoom/CreateRoom";

class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShowingModal: false,
        }
    }
    handleClick = () => {
        this.setState({isShowingModal: true});
    };
    closeModal = () => {
        this.setState({isShowingModal: false});
    };
    render () {
        return (
            <div className='game'>
                {this.state.isShowingModal && <CreateRoom onCloseModal={this.closeModal}/>}
                <div className='game-img'>
                    <img src={this.props.image} onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string
};

export default Game;
