import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import Editor from './Editor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();
import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
    console.log('change',newValue);
}

// Render editor
render(
    <MuiThemeProvider>
        <Editor/>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);