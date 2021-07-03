import React from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import Bounce from 'react-reveal/Bounce';

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  
  card: {
    // position: 'relative',
     marginTop: theme.spacing(2),
    height: 500,
    width: 500,
    elevation: 2,
    borderRadius:5,
    display: 'flex',
    
 },
  media: {
    // width:'70%',
    // height:'70%',
      paddingTop: '50%',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'contain',
    // backgroundSize: 'contain',
    width: '100%',
    height: '80%',
    objectFit: 'cover',
},

  title: {
    fontWeight: 'bold',
    //color: 'white',
  },

  control: {
    padding: theme.spacing(2),
  },
}));


const ImageList = ({ url, key, text }) => {

  const classes = useStyles();

  return (
    <>
      <div align="center" className={classes.root}>
        <Bounce bottom>
      <Card key={key} className={classes.card}>
              <CardActionArea>
              <CardMedia
                      image={url}
                      // title={title}
                      className={classes.media}>
              </CardMedia>
              <Typography variant="h5" align="center" 
                          className={classes.title}>{text} 
                        </Typography>
              </CardActionArea>   
              
        </Card>
        </Bounce>
        
      </div>
      
    </>
  )
}

export default ImageList;
