import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StoryBox from './components/story-box.jsx'
import AppBarMenu from './components/home.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <StoryBox />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);