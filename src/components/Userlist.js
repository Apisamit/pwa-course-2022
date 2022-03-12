import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");

  function onButtonClicked() {
    if (trayStatus === "open"){
      setTrayStatus("closed");
    }
    else if (trayStatus === "closed"){
      setTrayStatus("open");
    }
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>x</div>
    </div>
  )
}

export default Userlist;