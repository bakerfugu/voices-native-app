import { newYorkPlaylist } from "./newYorkPlaylist";
import {utahToBelizePlaylist} from "./utahToBelizePlaylist";
import {fountainsInEurope} from "./fountainsInEurope";
import {Images} from '../../Themes';

const storyPlaylists = [
  {
    title: "Memories From Utah to Belize",
    stories: utahToBelizePlaylist,
    image: Images.utahToBelize,
  },
  {
    title: "Adventures in New York",
    stories: newYorkPlaylist,
    image: Images.newYorkPlaylist,
  },
  {
    title: "Fountains in Europe",
    stories: fountainsInEurope,
    image: Images.fountainsEu,
  },
  
];

export default storyPlaylists; 