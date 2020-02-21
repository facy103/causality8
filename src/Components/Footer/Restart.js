import React from 'react';

const Restart = () => {
  const styled = {
    padding: "5px",
};

const refresh = () => {
  window.location.reload();
}

    return (
      <div style={styled}> 
        <button id="refresh" type="button" onClick={refresh}><i className="fas fa-redo fa-2x"></i></button>
    </div>

    )
}

export default Restart;