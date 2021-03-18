import { newYorkPlaylist } from "./newYorkPlaylist";
import {utahToBelizePlaylist} from "./utahToBelizePlaylist";
import {fountainsInEurope} from "./fountainsInEurope";
import {storiesFromBarcelona} from "./storiesFromBarcelona";
import {sweetMemoriesFromSF} from "./sweetMemoriesFromSF";
import {Images} from '../../Themes';

const storyPlaylists = [
  {
    title: "Stories from Barcelona",
    stories: storiesFromBarcelona,
    image: storiesFromBarcelona[0].image,
  },
  {
    title: "Sweet Memories from San Francisco",
    stories: sweetMemoriesFromSF,
    image: sweetMemoriesFromSF[0].image,
  },
  // {
  //   title: "Memories From Utah to Belize",
  //   stories: utahToBelizePlaylist,
  //   image: utahToBelizePlaylist[0].image,
  // },
  // {
  //   title: "Fountains in Europe",
  //   stories: fountainsInEurope,
  //   image: fountainsInEurope[0].image,
  // },
];

export default storyPlaylists; 