import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { v1 as uuid } from "uuid";

const CreateRoom = () => {
    const [roomName, setRoomName] = useState('')
    const history = useHistory()
    function create() {
        const id = uuid();
        history.push(`/room/${roomName}/${id}`);
    }

    return (
       <div id="create-room-container">
           <aside>
               {/* imagem */}
           </aside>
           <main>
           <form onSubmit={create} className="create-form">
               <fieldset>
                   <legend>Criar Sala</legend>
                   <div className="input-block">
                       <label htmlFor="name">Nome da sala:</label>
                       <input type="text" id="name" value={roomName} onChange={e => setRoomName(e.target.value)}/>
                   </div>
                   <button type="submit" className="confirm-btn">Criar Sala</button>
               </fieldset>
           </form>
           </main>
       </div>
    );
};

export default CreateRoom;
