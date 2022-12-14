//Imports for Barcelona
import { barcelonaParlamentStories } from "./barcelonaParlament";
import { barcelonaCascadaStories } from "./barcelonaCascada";
import { barcelonaParcGuell } from "./barcelonaParcGuell";
import { barcelonaLaSagradaStories } from "./barcelonaLaSagrada";
//Imports for SF
import { sfWharfStories } from "./sfWharf";
import { sfDelPopoloStories } from "./sfDelPopolo";
import { sfMissionDoloresPark } from "./sfMissionDolores";
import { ZonaOmbra } from "./barcelonaZonaOmbre";
import { Images } from "../../Themes";
import { manipulateAsync } from "expo-image-manipulator";
import metrics from "../../Themes/Metrics";
import { sfHippieHillStories } from "./sfHippieHill";
import { sfBayToBreakers } from "./sfBayToBreakers";
import { sfSmitten } from "./sfSmitten";
import { barcelonaCampNou } from "./barcelonaCampNou";
import { barcelonaRazzmatazz } from "./barcelonaRazzmatazz";
import { barcelonaTeleferic } from "./barcelonaTeleferic";
import { sfCrossroads } from "./sfCrossroads";
import AsyncStorage from '@react-native-async-storage/async-storage'


const storyLocations = [
  { //0
    title: "La Sagrada Familia",
    stories: barcelonaLaSagradaStories,
    coordinates: {
      latitude: 41.4036,
      longitude: 2.1744,
    },
    image: Images.laSagradaHistory,
  },
  {  //1
    title: "Camp Nou",
    stories: barcelonaCampNou,
    coordinates: {
      latitude: 41.38096,
      longitude: 2.122825,
    },
    image: Images.campNou,
  },
  {  //2
    title: "Cascada del Parc de la Ciutadella",
    stories: barcelonaCascadaStories,
    coordinates: {
      latitude: 41.3901,
      longitude: 2.1866,
    },
    image: Images.cascada,
  },
  {  //3
    title: "Teleferic",
    stories: barcelonaTeleferic,
    coordinates: {
      latitude: 41.3909,
      longitude: 2.16079,
    },
    image: Images.teleferic,
  },
  {  //4
    title: "Parc Güell",
    stories: barcelonaParcGuell,
    coordinates: {
      latitude: 41.4145,
      longitude: 2.1527,
    },
    image: Images.parkGuell,
  },
  {  //5
    title: "Razzmatazz",
    stories: barcelonaRazzmatazz,
    coordinates: {
      latitude: 41.39788,
      longitude: 2.19114,
    },
    image: Images.razzmatazz,
  },
  {  //6
    title: "Zona d'Ombra",
    stories: ZonaOmbra,
    coordinates: {
      latitude: 41.38275,
      longitude: 2.1757,
    },
    image: Images.zona,
  },
  {  //7
    title: "Hippie Hill",
    stories: sfHippieHillStories,
    coordinates: {
      latitude: 37.7699,
      longitude: -122.4579,
    },
    image: Images.hippieHillCulture,
  },
  {  //8
    title: "Bay to Breakers",
    stories: sfBayToBreakers,
    coordinates: {
      latitude: 37.7594,
      longitude: -122.5107,
    },
    image: Images.traditionB2B,
  },
  {  //9
    title: "Crossroads Trading",
    stories: sfCrossroads,
    coordinates: {
      latitude: 37.76824,
      longitude: -122.4293,
    },
    image: Images.sfCrossroads,
  },
  {  //10
    title: "Smitten Ice Cream",
    stories: sfSmitten,
    coordinates: {
      latitude: 37.7891,
      longitude: -122.43416,
    },
    image: Images.smittenWithSmitten,
  },
    // { 
  //   title: "Fisherman's Wharf",
  //   stories: sfWharfStories,
  //   coordinates: {
  //     latitude: 37.808,
  //     longitude: -122.4177,
  //   },
  //   image: Images.wharf,
  // },
  // { 
  //   title: "Del Popolo",
  //   stories: sfDelPopoloStories,
  //   coordinates: {
  //     latitude: 37.78953,
  //     longitude: -122.41128,
  //   },
  //   image: Images.delPopolo,
  // },
  // { 
  //   title: "Mission Dolores Park",
  //   stories: sfMissionDoloresPark,
  //   coordinates: {
  //     latitude: 37.7596,
  //     longitude: -122.4269,
  //   },
  //   image: Images.dolores,
  // },
    // {
  //   title: "Palau del Parlament de Catalunya",
  //   stories: barcelonaParlamentStories,
  //   coordinates: {
  //     latitude: 41.388,
  //     longitude: 2.1887,
  //   },
  //   image: Images.parliament,
  // },
];

export const getAppendedUserStories =  async (index) => {
  try {

    const storiesString = await AsyncStorage.getItem('userStories');    
    const userStories = storiesString ? JSON.parse(storiesString) : [];

    const userStoriesAtLocation = userStories.filter(story => story.locationIndex==index)


    const location = storyLocations[index];
    return {
      ...location,
      stories: [...location.stories, ...userStoriesAtLocation]
    }

  }
  catch (e) {
    console.log(e)
  }
}

export default storyLocations;
