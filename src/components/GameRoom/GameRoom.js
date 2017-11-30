import './GameRoom.scss';
import React, { Component } from 'react';
import Room from '../Room/Room';

class GameRoom extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
                <div className='game-room'>
                    <h1>Game Rooms</h1>
                    <div className='rooms'>
                        {this.props.rooms.map((room) =>
                            <Room {...room}/>
                        )}
                    </div>
                </div>
        );
    }
}

export default GameRoom;
