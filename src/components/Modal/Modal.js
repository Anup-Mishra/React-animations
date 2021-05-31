import React from "react";
import CSSTransition from 'react-transition-group/CSSTransition';
import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000
}

const modal = props => {

  return (
            <CSSTransition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit
            classNames={{
              enter:'',
              enterActive: 'ModalOpen',
              exit:'',
              exitActive: 'ModalClosed'
            }}>{/*these classNames is the extra property needed for csstransitions which contains fade-slide as the default name for it and defining css for that in css file*/}
            
              <div className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
    </CSSTransition>
  );
};

export default modal;
