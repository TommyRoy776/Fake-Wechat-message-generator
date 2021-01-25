import React, {Component} from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GetAppIcon from '@material-ui/icons/GetApp';
import Wechat from './wechat';
import html2canvas from 'html2canvas';

class Preview extends Component{
    constructor(){
        super();
        this.ref = React.createRef();
    }
    toImg(){
        const node = document.getElementsByClassName('wechat')[0];
        html2canvas(node,{
         scale: 2,
         scrollY: -window.scrollY
        }).then(
            canvas =>{
              var image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
              //console.log(image);
              //window.location.href = image;
              this.saveAs(canvas.toDataURL(1), 'fakechat.png');
            }
        )
    }

    saveAs(uri, filename) {

        var link = document.createElement('a');
    
        if (typeof link.download === 'string') {
    
            link.href = uri;
            link.download = filename;
    
            //Firefox requires the link to be in the body
            document.body.appendChild(link);
    
            //simulate click
            link.click();
    
            //remove the link when done
            document.body.removeChild(link);
    
        } else {
            window.open(uri);
        }
    }

  

    componentDidMount(){
        console.log(document.getElementsByClassName('wechat')[0])
    }
    render(){
        return(
            <React.Fragment>
              <Grid item  xs={12} sm={12} md ={6} spacing={1} justify ="center">
                 <Paper elevation={3} style={{height:700, width:'100%',backgroundColor:'transparent'}}>
                   <Typography variant="h6" style={{color:'#fff'}}>
                       Preview
                   </Typography>
                    <Wechat receipant={this.props.receipant} messages={this.props.messages} type={this.props.type} ref={this.ref} date={this.props.date} delF={this.props.delF}/>
                 </Paper> 
                 <Grid item  xs={12} justify ="center" >
                  <Button variant="contained"  
                  size="large" 
                  style={{margin:'10px',backgroundColor: '#ffffff'}} 
                  startIcon={<GetAppIcon/>} onClick={this.toImg.bind(this)}>
                      Download
                </Button>
               </Grid>              
             </Grid>     

         </React.Fragment>                   
        );
    }
}

export default Preview;