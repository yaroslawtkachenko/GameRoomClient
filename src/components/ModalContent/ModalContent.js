import {games} from '../../../__mocks__/gameDataMock';
import PropTypes from 'prop-types';
import React from 'react';

class ModalContent extends React.Component{
    constructor (props){
        super(props);
    }

    render(){
        const maxPlayersArray = [];
        for(let i = 1; i<= this.props.maxPlayers; i++)
        {
            maxPlayersArray.push(i);
        }
        return (
            <div className='modal-content'>
                <div className='game-info'>
                    <img src={this.props.image}/>
                    <h3>{this.props.title}</h3>
                </div>
                <div className='host-info'>
                    <h3>Host:</h3>
                    <h3>{this.props.host}</h3>
                </div>
                <div className='game-settings'>
                    <h3>Game settings:</h3>
                    <div className='playercount'>
                        {maxPlayersArray.map((player) =>
                            <input type="radio"  placeholder={player} name="322"/>
                        )}
                    </div>
                </div>
                <div className='game-info-'>
                    <h3>Players:</h3>
                    <div className='playerscount'>
                        {this.props.players.map((players) =>
                            <h4>{players}</h4>
                        )}
                    </div>
                </div>
                <div className='modalButtons'>
                    <input type="button" value="Start Game"/>
                    <input type="button" value="Cancel" onClick={this.props.onRequestClose}/>
                </div>
            </div>
        );
    }
}

ModalContent.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    maxPlayers: PropTypes.number.isRequired,
    players: PropTypes.array
};

export  default ModalContent;
