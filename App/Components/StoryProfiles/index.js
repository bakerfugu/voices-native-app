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
    bio: "",
  },
  knair: {
    author: "knair",
    stories: findStoriesOfAuthor("knair"),
    location: "San Francisco",
    image: Images.krishnan,
    bio: "",
  },
  bsharp: {
    author: "bsharp",
    stories: findStoriesOfAuthor("bsharp"),
    location: "San Francisco",
    image: Images.baker,
    bio: "",
  },
  
};

export default storyProfiles; 