import React, {Component} from 'react';
import  defaultImg from './img/default-user.png';
import CancelIcon from '@material-ui/icons/Cancel';

function Dialogue(props){
    return(
      <div className={'chatMessage '+ props.type}>
         <img src= {defaultImg} className="avatar"/>
        <div className="dialogue">
           <p>{props.newMessage}</p>         
        </div>
        <div className="cancel" onClick={() => props.delF(props.id)}><CancelIcon/></div>
        {/*<img src= {defaultImg} style={{}}/>*/}
     </div>
    )
} 

export default Dialogue