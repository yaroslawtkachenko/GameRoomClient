import './Window.scss';
import React, { Component } from 'react';
import GameRoom from '../GameRoom/GameRoom';
import Games from '../Games/Games';
import {games} from '../../../__mocks__/gameDataMock';
import Info from '../LeftArea/Info';
import {rooms} from '../../../__mocks__/roomDataMock';
import User from '../LeftArea/User';
import {userData} from '../../../__mocks__/userDataMock';
import GameHead from '../GameRoom/GameHead';
import AvalGame from '../Games/AvalGame';

class Window extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <div className='window'>
                    <div className='left-area'>
                        <div> <User {...userData}/> </div>
                        <div><Info/> </div>
                    </div>
                    <div className='center-area'>
                        <div><GameHead/></div>
                        <div><GameRoom rooms={rooms}/></div>
                    </div>

                    <div className='right-area'>
                        <div><AvalGame/></div>
                        <div><Games games={games}/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Window;
