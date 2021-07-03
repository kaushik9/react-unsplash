import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { CardMedia } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Marquee from 'react-double-marquee';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.secondary,
  },
  media: {
      width: '100%',
      height: '100%',
      paddingTop: '50%',
  },

  gridList: {
    width: 500,
    height: 500,
  },

}));

const ImageGrid = ({ url, key, text }) =>  {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <GridListTile key={key} cols={5}>
            
            <CardMedia image={url} className={classes.media}  title={text} />

            <GridListTileBar
              title= {<Marquee direction="left">{text}</Marquee>}/>

          </GridListTile>
      </GridList>
    </div>
  );
}

export default ImageGrid;
