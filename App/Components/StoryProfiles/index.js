import {Images} from '../../Themes';
// import { tlallas } from './tlallas';
// import {bsharp}  from './bsharp';
// import {knair} from './knair';
// import {adrazen} from './adrazen';
// import {shinnyshin} from './shinnyshin';
// import {vmiller} from './vmiller';

import storyLocations from "../StoryLocations";

const findStoriesOfAuthor = (authorId) => {
  // console.log("hello part 1")
  let foundStories = [];
  // console.log("hello part 2", storyLocations);
  for (const location of storyLocations) {
    foundStories.push(...(location.stories.filter(story => story.author === authorId)));
  }
  return foundStories;
}

const storyProfiles = {
  tlallas: {
    author: "tlallas",
    stories: findStoriesOfAuthor("tlallas"),
    image: Images.taylor,
    location: "San Francisco",
    bio: "I am a 22-year-old student living in the Bay Area. I am an art history buff, food lover, and a collegiate athlete!",
  }, 
  shinnyshin: {
    author: "shinnyshin",
    stories: findStoriesOfAuthor("shinnyshin"),
    location: "San Francisco",
    image: Images.janice,
    bio: "I am a member of the Stanford Women's Tennis team. I'm a Houston, TX native, but I've come to call San Francisco my home away from home.",
  },
  adrazen: {
    author: "adrazen",
    stories: findStoriesOfAuthor("adrazen"),
    location: "San Francisco",
    image: Images.ayelet,
    bio: "I'm a 22 year old living in San Francisco and studying in the Bay Area. I love travelling, learning new languages and boxing!",
  },
  knair: {
    author: "knair",
    stories: findStoriesOfAuthor("knair"),
    location: "San Francisco",
    image: Images.krishnan,
    bio: "Hi! My name is Krishnan and I am an undergraduate student at Stanford. I grew up on the West coast and have loved immsersing myself in Polynesian culture in the Bay Area.",
  },
  bsharp: {
    author: "bsharp",
    stories: findStoriesOfAuthor("bsharp"),
    location: "San Francisco",
    image: Images.baker,
    bio: "",
  },
  krishfish: {
    author: "krishfish",
    stories: findStoriesOfAuthor("krishfish"),
    location: "San Francisco",
    image: Images.krishnan,
    bio: "Hi! My name is Krishnan and I am an undergraduate student at Stanford. I grew up on the West coast and have loved immsersing myself in Polynesian culture in the Bay Area.",
  }, 
  bakers : {
    author: "bakers",
    stories: findStoriesOfAuthor("bakers"),
    location: "San Francisco",
    image: Images.janice,
    bio: "",
  }, 
  johnnydex : {
    author: "johnnydex",
    stories: findStoriesOfAuthor("johnnydex"),
    location: "Barcelona",
    image: Images.johnny,
    bio: "25 años. ex futbolista",
  }, 
  vmiller: {
    author: "vmiller",
    stories: findStoriesOfAuthor("vmiller"),
    location: "Barcelona",
    image: Images.virginia,
    bio: "I grew up on an island near Seattle, but my family moved to Barcelona when I was 11. I've loved exploring every part of the beautiful place I call home.",
  },
  maria_alfaro: {
    author: "maria_alfaro",
    stories: findStoriesOfAuthor("maria_alfaro"),
    location: "Barcelona",
    image: Images.maria,
    bio: "Bienvenidos! My name is Maria and I am from Sant Cigat del Valles, a suburb right outside of Barcelona. I love sharing stories about the city I hold dear to my heart.",
  },
  giuseppe_dolo: {
    author: "giuseppe_dolo",
    stories: findStoriesOfAuthor("giuseppe_dolo"),
    location: "Barcelona",
    image: Images.giuseppe,
    bio: "Ciao! My name is Giuseppe and I'm an Italian who found himself in Barcelona after retirement. I love sharing my stories and the knowledge I gain as I explore this new city!",
  },
  '99% Invisible Podcast': {
    author: "99% Invisible Podcast",
    stories: findStoriesOfAuthor("99% Invisible Podcast"),
    location: "San Francisco",
    image: Images.profPlaceholder,
    bio: "99% Invisible Podcast is a podcast. Feel free to listen!",
  },
  'Total Life Freedom Podcast': {
    author: "Total Life Freedom Podcast",
    stories: findStoriesOfAuthor("Total Life Freedom Podcast"),
    location: "San Francisco",
    image: Images.profPlaceholder,
    bio: "Total Life Freedom Podcast is a podcast. Feel free to listen!",
  }
};

export default storyProfiles; 