import { addDoc, collection } from '@firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase';

const Modal = (props) => {
  const [name, setName] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  };

  const sendScore = async () => {
    if (name.length < 3) {
      alert(`Please enter a name longer than 2 letters`);
    } else {
      try {
        const docRef = await addDoc(collection(db, `users${props.image}`), {
          name: name,
          time: props.time,
        });
        console.log('User uploaded with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
      props.modalOff();
      alert('Uploaded to database! :D');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">You Win!</h4>
        </div>
        <div className="modal-body">
          <div>You cleared in {props.time} seconds!</div>
        </div>
        <div className="name">
          Enter name: &nbsp;
          <input className="input" type="text" onChange={changeName} />
        </div>

        <div className="modal-footer">
          <button className="close" onClick={() => props.modalOff()}>
            Close
          </button>
          <button className="send" onClick={() => sendScore()}>
            Send
          </button>

          {console.log(name)}
        </div>
      </div>
    </div>
  );
};

export default Modal;
