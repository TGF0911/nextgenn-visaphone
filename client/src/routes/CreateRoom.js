import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import { v1 as uuid } from "uuid";

import '../styles/create-room.css'
import imgVideo from '../assets/video-call.png'

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('')
    const [roomId, setRoomId] = useState('')
    const history = useHistory()
    function create() {
        const id = uuid();
        history.push(`/room/${roomName}/${id}`);
    }

    function enter() {
        history.push(`/room/${roomName}/${roomId}`);
    }

    return (
        <div id="create-room-container">
            <aside>
                <img src={imgVideo} alt="Video chamada" className="video-chat" />
            </aside>
            <main>
                <form onSubmit={create} className="create-form">
                    <fieldset>
                        <legend>Criar Sala</legend>
                        <div className="input-block">
                            <label htmlFor="name">Nome da sala:</label>
                            <input type="text" id="name" value={roomName} onChange={e => setRoomName(e.target.value)} />
                        </div>
                        <button type="submit" className="confirm-btn">Criar Sala</button>


                        <p>Já tem uma sala?</p>
                        <Link to="/enter-room" >
                            Entrar na sala
                </Link>


                    </fieldset>
                </form>
            </main>
        </div>
    );
};

export default CreateRoom;
