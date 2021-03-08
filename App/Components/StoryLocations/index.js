import {barcelonaParlamentStories} from "./barcelonaParlament";
import {barcelonaCascadaStories} from "./barcelonaCascada";
import {barcelonaParcGuell} from "./barcelonaParcGuell";
import {sfWharfStories} from "./sfWharf";
import {sfDelPopoloStories} from "./sfDelPopolo";
import {sfMissionDoloresPark} from "./sfMissionDolores";
import {Images} from '../../Themes';
import { manipulateAsync } from "expo-image-manipulator";
import metrics from "../../Themes/Metrics";



const storyLocations = [
  {
    title: "Palau del Parlament de Catalunya",
    stories: barcelonaParlamentStories,
    coordinates: { 
      latitude: 41.3880, 
      longitude: 2.1887
      },
  image: Images.parliament
  },
  {
    title: "Cascada del Parc de la Ciutadella",
    stories: barcelonaCascadaStories,
    coordinates: { 
      latitude: 41.3901, 
      longitude: 2.1866
      },
    image: Images.fountainsEu
  },
  {
    title: "Parc Güell",
    stories: barcelonaParcGuell,
    coordinates: { 
      latitude: 41.4145, 
      longitude: 2.1527
      },
    image: Images.parkGuell
  },
  {
      title: "Zona d'Ombra",
      coordinates: { 
      latitude: 41.382750, 
      longitude: 2.175700
      },
    image: Images.zona
  },
  {
      title: "Fisherman's Wharf",
      stories: sfWharfStories,
      coordinates: { 
      latitude: 37.8080, 
      longitude: -122.4177
      },
    image: Images.wharf
  },
  {
      title: "Del Popolo",
      stories: sfDelPopoloStories,
      coordinates: { 
      latitude: 37.789530, 
      longitude: -122.411280
      },
    image: Images.delPopolo
  },
  {
    title: "Mission Dolores Park",
    stories: sfMissionDoloresPark,
    coordinates: { 
    latitude: 37.7596, 
    longitude: -122.4269
    },
    image: Images.dolores
  }
];

export default storyLocations; 