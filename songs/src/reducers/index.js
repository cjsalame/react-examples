import {combineReducers} from 'redux'

const songsReducer = () => {
  return [
    {title: 'No Woman no Cry', duration:'4:05'},
    {title: 'No Scrubs', duration: '4:30'},
    {title: 'Macarena', duration: '3:20'},
    {title: 'All Star', dutation: '3:05'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
