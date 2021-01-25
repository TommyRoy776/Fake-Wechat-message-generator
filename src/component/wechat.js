import React, {Component} from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import reply_tool_add from './img/wechat-footer-image.webp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Dialogue from './dialogue';

class Wechat extends Component{
    render(){
        return(
           <div className ="wechat">
                    <div className="chat-header">
                         <span className="recipient"> 
                            <ArrowBackIosIcon/>
                         </span>
                         <span className="recipient" > 
                            <span className="name">{this.props.receipant}</span> 
                         </span>
                        <span className="dots">&#8943;</span>
                     </div>
                     <div className="chat-content">
                        <span className="message-date">{this.props.date}</span>  
                        {this.props.messages.map(item => {return(<Dialogue newMessage={item.text} type={item.type} delF={this.props.delF} id={item.id}/>)})}
                     </div>
                      <footer>
                         <i class="icon icon-voice"></i>
                          <input type="text" class="text-input"/>
                          <i class="icon icon-face"></i>
                         <i class="icon icon-plus"></i>
                      </footer>
                
                     {/* 逃げるは恥だが役に立つ (不好的做法)
                        <Paper elevation={0} style={{height:60, width:'100%',background:'inherit', position:'absolute', bottom:0}}>
                            <img src= {reply_tool_add} style={{width:'100%',height:'100%',position:'relative',top:'5px'}}/>
                         </Paper>
                     
                     */}
                
           </div>
        );
    }
}

export default Wechat;