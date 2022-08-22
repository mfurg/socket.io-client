import React from "react";
import { Link } from "react-router-dom";
import { UserState } from "../context/Context";


import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = React.useState("");
  const {dispatch} = UserState();

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    dispatch({
      type: 'username',
      payload: event.target.value
    })
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
        required
      />
      <input
        type="text"
        placeholder="Name"
        onChange={handleUserNameChange}
        className="text-input-field"
        required
      />
      <Link to={`/${roomName}`} onClick={() => {
          dispatch({type: 'login'})
        }} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;
