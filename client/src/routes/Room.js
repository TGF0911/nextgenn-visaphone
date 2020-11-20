import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";

import '../styles/room.css'

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <video className="styleVideo" id="partnerVideo" playsInline autoPlay ref={ref} />
    );
}


const videoConstraints = {
    height: window.innerHeight / 1,
    width: window.innerWidth / 1
};

const Room = (props) => {
    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = props.match.params.roomID;
    const roomName = props.match.params.roomName;

    useEffect(() => {
        socketRef.current = io.connect("/");
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                const peers = [];
                users.forEach(userID => {
                    const peer = createPeer(userID, socketRef.current.id, stream);
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })
                    peers.push({
                        peerID: userID,
                        peer,
                    });
                })
                setPeers(peers);
            })

            socketRef.current.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })

                const peersObj = {
                    peerID: payload.callerID,
                    peer,
                }

                setPeers(users => [...users, peersObj]);
            });

            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });
            socketRef.current.on("user left", id => {
                const peerObj = peersRef.current.find(p => p.peerID === id)
                peerObj.peer && peerObj.peer.destroy()
                const peers = peersRef.current.filter(p => p.peerID === id)
                peersRef.current = peers
                setPeers(peers)
            })


        })
    }, []);

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })

        peer.signal(incomingSignal);

        return peer;
    }

    return (
        <div id="container-room">
            <h2>Bem vindo(a) ao {roomName}</h2>

            <div id="container" >
                <video className="styleVideo" id="userVideo" muted ref={userVideo} autoPlay playsInline />
                {peers.map((peer) => {
                    return (
                        <Video key={peer.peerID} peer={peer.peer} />
                    );
                })}
            </div>
        </div>
    );
};

export default Room;
