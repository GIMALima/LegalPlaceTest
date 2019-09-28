import React from 'react';
import { Toast, ToastBody, ToastHeader, Button, Input } from 'reactstrap';
import {FaRegTrashAlt, FaPlus, FaRegEdit} from 'react-icons/fa'
const TaskCard = (props) => {
  return (
    
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            {props.title}
            
          </ToastHeader>
         
          <ToastBody>
            
            <p>{props.description}</p>
            <span>{props.dueDate}</span>
            <div className="actions-container">
                <Button color="link"><FaRegEdit color='#b24966'/></Button>
                <Button color="link"><FaRegTrashAlt color='#b24966'/></Button>
                <Button color="link" onClick={props.handleClick}><FaPlus color='#b24966'/></Button>
            </div>
          </ToastBody>
        </Toast>
      </div>
  );
};

export default TaskCard;