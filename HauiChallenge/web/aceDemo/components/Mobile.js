import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import Editor from './common/Editor.mobile';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import 'brace/mode/java';
import 'brace/theme/github';

function onChange(newValue) {
    console.log('change',newValue);
}

render(
    <MuiThemeProvider>
        <Editor width={400} height={600}/>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);