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
    bio: "",
  },
};

export default storyProfiles; 