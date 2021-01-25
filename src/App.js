import './App.css';
import Toolbar from './component/toolbar';
import Preview from './component/preview';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2} justify ="center" style={{width:'90%', margin: '0 auto',height:600}}>
         <Grid item  xs={12}>
           <h2 className="title">
              WeChat Message Generator
           </h2>
         </Grid>
         <Grid container spacing={2}  justify ="center">
            <Toolbar/>
          </Grid>
        
      </Grid>
      
    </div>
  );
}

export default App;



