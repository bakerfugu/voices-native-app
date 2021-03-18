import storyPlaylists from './index';
import storyLocations from '../StoryLocations';

function getLocationIndex(title) {
  for (const location of storyLocations) {
    for (const story of location.stories) {
      if (story.title == title) return story.locationIndex;
    }
  }
  return -1;
}

export const printNewPlaylists = () => {
  for (const playlist of storyPlaylists)  {
    const newStories = playlist.stories.map(story => ({
      title: story.title,
      locationIndex: getLocationIndex(story.title),
    }));
    console.log(playlist.title, "\n", newStories);
  }
}
