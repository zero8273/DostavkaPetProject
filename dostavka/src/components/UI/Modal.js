import style from './Modal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onHideCart}></div>;
};
const ModalWindow = (props) => {
  return <div className={style.modal}>{props.children}</div>;
};
const portalElement = document.getElementById('modal');
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </React.Fragment>
  );
};
export default Modal;
