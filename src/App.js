import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {Typography} from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Load} from './components/Load';
import styled from 'styled-components'; 
import ViewListIcon from '@material-ui/icons/ViewList';
import ImageList from './components/ImageList';
import ImageGrid from './components/ImageGrid';
import { XlviLoader } from "react-awesome-loaders";
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Grid = styled.section`
  max-width: 70rem;
  margin: 1rem auto;
  display: inline;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
`;

function App() {

  const classes = useStyles();

  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])
  const ACCESSKEY= "WUvOf2d8QvkvBW7yBTwNzcLsccUiGTzRElIWBwitTZY";

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }

  const list = {...images.map(image=>(
        
    <ImageList url={image.urls.regular} key={image.id} text= {image.alt_description}/>
    
      
      ))}

  const grid = {...images.map(image=>(
        
    <ImageGrid url={image.urls.regular} key={image.id} text= {image.alt_description}/>
      
      ))}

  return (
    
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <Header/>
      
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={
          <div align="center" style={{margin:'2rem'}}>
            <XlviLoader
                  boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
                  desktopSize={"50px"}
                  mobileSize={"50px"}/>
          </div>
        }
      >

        <Grid>

        {/* <div align= "center" style={{margin:'2rem'}} >

        <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <ViewListIcon onClick={list}/>
          </IconButton>
          <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <ViewComfyIcon onClick={grid}/>
          </IconButton>
        </div> */}
          {images.map(image=>(
        
        <ImageList url={image.urls.regular} key={image.id} text= {image.alt_description}/>
        //<ImageGrid url={image.urls.regular} key={image.id} text= {image.alt_description}/>
          
          ))}
          
        </Grid>
      </InfiniteScroll>
    </div>
  );
}

export default App;
