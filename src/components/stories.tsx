/* eslint-disable jsx-a11y/alt-text */
import { Component } from 'react';
import { render } from 'react-dom';
import Zuck from 'zuck.js';
import '../styles/stories.scss';


export default class App extends Component {
  storiesElement = null;
  state = {
    stories: [
      Zuck.buildTimelineItem(
        'test1',
        'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg',
        'Test 3',
        "https://ramon.codes",
        1575221470504,
        [
          [
            'test-1',
            'photo',
            3,
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg',
            '',
            false,
            false,
            1575221470504,
          ],
        ]
      ),

      Zuck.buildTimelineItem(
        'test2',
        'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg',
        'Test 2',
        "https://ramon.codes",
        1575221470504,
        [
          [
            'test-1',
            'photo',
            3,
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg',
            '',
            false,
            false,
            1575221470504,
          ],
        ]
      ),

      Zuck.buildTimelineItem(
        'test3',
        'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg',
        'Test 1',
        "https://ramon.codes",
        1575221470504,
        [
          [
            'test-1',
            'photo',
            3,
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg',
            '',
            false,
            false,
            1575221470504,
          ],
          [
            'test-2',
            'video',
            0,
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg',
            '',
            false,
            false,
            1575221470504,
          ],
          [
            'test-3',
            'photo',
            3,

            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            false,
            1575221470504,
          ],
        ]
      ),

      Zuck.buildTimelineItem(
        'Test 4',
        'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg',
        'Test 4',
        'https://ramon.codes',
        1575221470504,
        [
          [
            'test-1',
            'photo',
            3,
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            '',
            false,
            false,
            1575221470504,
          ],
          [
            'test-2',
            'video',
            0,
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg',
            '',
            false,
            false,
            1575221470504,
          ],
          [
            'test-3',
            'photo',
            3,

            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            false,
            1575221470504,
          ],
        ]
      ),
      Zuck.buildTimelineItem(
        'test 5',
        'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg',
        'Test 5',
        'https://ramon.codes',
        1575221470504,
        [
          [
            'test-1',
            'photo',
            3,
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            '',
            false,
            false,
            1575221470504,
          ],
          [
            'test-2',
            'video',
            0,
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg',
            '',
            false,
            false,
            1575221470504,
          ],
          [
            'test-3',
            'photo',
            3,

            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            false,
            1575221470504,
          ],
        ]
      ),

    ],
  };

  
 

  componentDidMount() {
    new Zuck(this.storiesElement, {
      skin: 'snapgram', // container class
      avatars: true, // shows user photo instead of last story item preview
      list: false, // displays a timeline instead of carousel
      openEffect: true, // enables effect when opening story - may decrease performance
      cubeEffect: false, // enables the 3d cube effect when sliding story - may decrease performance
      autoFullScreen: true, // enables fullscreen on mobile browsers
      backButton: false, // adds a back button to close the story viewer
      backNative: false, // uses window history to enable back button on browsers/android
      previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
      localStorage: false, // set true to save "seen" position. Element must have a id to save properly.
      reactive: true, // set true if you use frameworks like React to control the timeline (see react.sample.html)
      callbacks: {
        onDataUpdate: function (currentState, callback) {
          this.setState(
            (state) => {
              state.stories = currentState;

              return state;
            },
            () => {
              callback();
            }
          );
        }.bind(this),
      },
      stories: this.state.stories,
      
    });
  }

  render() {
    const timelineItems = [];

    this.state.stories.forEach((story, storyId) => {
      const storyItems = [];

      story.items.forEach((storyItem) => {
        storyItems.push(
          <li
            key={storyItem.id}
            data-id={storyItem.id}
            data-time={storyItem.time}
            className={storyItem.seen ? 'seen' : ''}
          >
            <a
              href={storyItem.src}
              data-type={storyItem.type}
              data-length={storyItem.length}
              data-link={storyItem.link}
              data-linkText={storyItem.linkText}
            >
            </a>
          </li>
        );
      });

      let arrayFunc = story.seen ? 'push' : 'unshift';
      timelineItems[arrayFunc](
        <div
          className={story.seen ? 'story seen' : 'story'}
          key={storyId}
          data-id={storyId}
          data-last-updated={story.lastUpdated}
          data-photo={story.photo}
        >
          <a className='item-link' href={story.link}>
            <span className='item-preview'>
              <img src={story.photo} />
            </span>
            <span
              className='info'
              itemProp='author'
              itemScope={false}
              itemType='http://schema.org/Person'
            >
              <strong className='name' itemProp='name'>
                {story.name}
              </strong>
              <span className='time'>{story.lastUpdated}</span>
            </span>
          </a>

          <ul className='items'>{storyItems}</ul>
        </div>
      );
    });

    return (
      <div>
        <div
          ref={(node) => (this.storiesElement = node)}
          id='stories-react'
          className='storiesWrapper'
        >
          {timelineItems}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
