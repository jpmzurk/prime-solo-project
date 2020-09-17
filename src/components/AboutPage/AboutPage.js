import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <p>If you’ve ever worked on a long term project you know that its easy to lose track of small changes.  <br/>
      If you’re a songwriter you know it is especially difficult to keep track of all the small ideas that go into <br/>
      a great song. Lyrics and the many recordings of your song will surely be in six different places and ultimately you <br/>
      lose a great lyric you wrote one day. Or, worse yet, you’ve lost your bearings on the song and why you <br/>
      even wrote it in the first place.  My application solves these problems by creating a quick and centralized method <br/>
      to organize song ideas at their inception while also keeping a working draft.  Add a name, a few lyrics and <br/>
       a recording that captures the idea and you’re off!</p>
    </div>
  </div>
);

export default AboutPage;
