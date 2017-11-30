import './CreateRoom.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ModalContent from '../ModalContent/ModalContent';
import {gameData} from '../../../__mocks__/gameDataMock';

class CreateRoom extends  Component{
    constructor (props) {
        super(props);
    }
    render(){
        return(
            <Modal
                isOpen={true}
                contentLabel="Game Lobby"
            >
            <ModalContent {...gameData} onRequestClose={this.props.onCloseModal}/>
            </Modal>
        );
    }
}



export default CreateRoom;
