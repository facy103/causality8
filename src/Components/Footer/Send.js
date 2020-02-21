import React from 'react';

const Send = (props) => {
    const styled = {
        padding: "5px",
    };

    return (
              <div style={styled}>
              <button  id="myBtnId2" onClick={props.setNextStep}><i className="fas fa-paper-plane icon-4x fa-flip-horizontal fa-2x">
              </i></button>
              </div>


    )
}

export default Send;