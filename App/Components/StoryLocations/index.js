//Imports for Barcelona
import {barcelonaParlamentStories} from "./barcelonaParlament";
import {barcelonaCascadaStories} from "./barcelonaCascada";
import {barcelonaParcGuell} from "./barcelonaParcGuell";
import { barcelonaLaSagradaStories } from "./barcelonaLaSagrada";
//Imports for SF
import {sfWharfStories} from "./sfWharf";
import {sfDelPopoloStories} from "./sfDelPopolo";
import {sfMissionDoloresPark} from "./sfMissionDolores";
import {ZonaOmbra} from './barcelonaZonaOmbre'
import {Images} from '../../Themes';
import { manipulateAsync } from "expo-image-manipulator";
import metrics from "../../Themes/Metrics";
import { sfHippieHillStories } from "./sfHippieHill";
import { sfBayToBreakers } from "./sfBayToBreakers";
import {sfSmitten } from "./sfSmitten";



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
    title: "La Sagrada Familia",
    stories: barcelonaLaSagradaStories,
    coordinates: { 
      latitude: 41.4036, 
      longitude: 2.1744
      },
  image: Images.laSagradaHistory
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
      stories: ZonaOmbra,
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
  }, 
  {
    title: "Hippie Hill",
    stories: sfHippieHillStories,
    coordinates: { 
    latitude: 37.7699, 
    longitude: -122.4579
    },
    image: Images.hippieHillCulture
  },
  {
    title: "Bay to Breakers",
    stories: sfBayToBreakers,
    coordinates: { 
    latitude: 37.7594, 
    longitude: -122.5107
    },
    image: Images.sfBayToBreakers
  },
  {
    title: "Smitten Ice Cream",
    stories: sfSmitten,
    coordinates: {
      latitude: 37.7891, 
      longitude: -122.43416
    },
    image: Images.smitten1
  }
];

export default storyLocations; 