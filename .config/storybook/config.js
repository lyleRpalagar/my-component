import { configure } from '@kadira/storybook';

function loadStories() {
    require('../../src/ComponentStory.js');
    require('../../src/BookTile/BookTileStory.js');
    require('../../src/Clock/Clock.story.js');
}

configure(loadStories, module);
