import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbutton from './toolbutton';
import Typography from '@material-ui/core/Typography';
import Preview from './preview';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Toolbar extends Component{
     constructor(){
         super()
         this.state = {
             receipant: "",
             list:[],
             newMessage: "",
             radioValue: "chatMessage-right",
             date: "",
             id: 0
         }
     }

     handleReceipant(value){
         this.setState({receipant:value})
     }

     handleRadio(value){
         this.setState({radioValue:value})
         console.log(this.state.radioValue)
     }

     updateInput(key,value){
        this.setState({
            [key]:value
        })
     }

     handleDate(value){
       this.setState({date:value});
       console.log(this.state.date);
     }

     addMessage(){
          const newItem = {
            text: this.state.newMessage,
            type:this.state.radioValue,
            id:this.state.id
          }
          const list = [...this.state.list]
          if(newItem.text != ""){
            list.push(newItem)
            this.setState({
              list,
              id: this.state.id+1
            })
           // console.log(this.state.id)
          }
     }

     deleteMessage(id){
        const list = [...this.state.list];
        const newList = list.filter(item => item.id !== id);
        this.setState({
          list:newList
        })
    }

    render(){
       return(
        <React.Fragment>  
        <Grid item  xs={12} sm={12} md ={3} justify ="center">
          <Paper elevation={3} style={{paddingBottom:50,width:'100%'}}>                
          <Typography variant="h6">
           Toolbar
          </Typography>
          <ButtonGroup orientation="vertical">
             <TextField id="standard-basic" label="Receipant" 
             onChange={e => this.handleReceipant(e.target.value)}/> 
             <Button onClick={e => this.addMessage()}>
                 Add Messasge
             </Button>
             <TextField id="standard-basic" label="Message" multiline  rows={3} 
             onChange={e => this.updateInput("newMessage",e.target.value)}/>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                      checked={this.state.radioValue === "chatMessage-right"}
                      value="chatMessage-right"
                      onChange={e => this.handleRadio(e.target.value)}
                      control={<Radio color="primary" />}
                      label="Yours"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      checked={this.state.radioValue === "chatMessage-left"}
                      value="chatMessage-left"
                      onChange={e => this.handleRadio(e.target.value)}
                      control={<Radio color="primary" />}
                      label="recipient's"
                      labelPlacement="start"
                    />            
                </RadioGroup> 
             <Button>
                 Select image
             </Button>
             <Button>
                 Select Wallpaper
             </Button>
             <Button>
                 Select Your Icon
             </Button>
             <Button>
                 Select receipant Icon
             </Button>
             <TextField
                id="date"
                label="Date of message"
                type="date"
                onChange={
                  e => this.handleDate(e.target.value)
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
           </ButtonGroup>
         </Paper>  
        </Grid>
        <Preview receipant={this.state.receipant} messages={this.state.list} type={this.state.radioValue} date={this.state.date} delF={this.deleteMessage.bind(this)}/>
       </React.Fragment>
       );
    }
}

export default Toolbar;