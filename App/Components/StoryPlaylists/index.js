import { newYorkPlaylist } from "./newYorkPlaylist";
import {utahToBelizePlaylist} from "./utahToBelizePlaylist";
import {fountainsInEurope} from "./fountainsInEurope";
import {storiesFromBarcelona} from "./storiesFromBarcelona";
import {sweetMemoriesFromSF} from "./sweetMemoriesFromSF";
import {Images} from '../../Themes';
import storyLocations, { getAppendedUserStories } from '../StoryLocations';
import AsyncStorage from '@react-native-async-storage/async-storage'

const storyPlaylists = [
  {
    title: "Stories from Barcelona",
    stories: storiesFromBarcelona,
    image: Images.laSagrada99Pct,
  },
  {
    title: "Sweet Memories from San Fran",
    stories: sweetMemoriesFromSF,
    image: Images.traditionB2B,
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

// list to add to localstorage userPlaylists:
// [
//   {
//     title: "My Custom Playlist",
//     stories: [], (get filled in on retrieval)
//     image: MUST SET IMAGE ON CREATE,
//   },
//   {
//     title: "My Other custom",
//     stories: [],
//     image: MUST SET IMAGE ON CREATE,
//   },
// ]
export const getPlaylists = async () => {
  try {
    const playlistsString = await AsyncStorage.getItem(`userPlaylists`);
    const userAddedPlaylists = playlistsString ? JSON.parse(playlistsString) : [];

    const allPlaylists = [...storyPlaylists, ...userAddedPlaylists];

    // console.log("all playlists maybe", allPlaylists);

    return allPlaylists;
  }
  catch (e) {
    console.log(e)
  }
};


// list to add to localstorage `userPlaylist-${playlist.title}`:
// [
// {
//   {
//     "locationIndex": 0,
//     "title": "La Sagrada Familia",
//   },
//   {
//     "locationIndex": 2,
//     "title": "My Recorded Story",
//   },
// }
// ]
export const getPlaylistWithUserStories = async (title) => {
  try {
    const allPlaylists = await getPlaylists();
    const playlist = allPlaylists.find(tempPlaylist => tempPlaylist.title === title);

    const addedStoryReferencesString = await AsyncStorage.getItem(`userPlaylist-${playlist.title}`);
    const userAddedStoryReferences = addedStoryReferencesString ? JSON.parse(addedStoryReferencesString) : [];

    const allStoryReferences = [...playlist.stories, ...userAddedStoryReferences];

    const allFullStories = [];
    
    for (const storyReference of allStoryReferences) {
      const location = await getAppendedUserStories(storyReference.locationIndex);
      const match = location.stories.find(
        fullStory => fullStory.title === storyReference.title
      );
      allFullStories.push(match);
    }

    return {
      ...playlist,
      stories: allFullStories
    }
  }
  catch (e) {
    console.log(e)
  }
}