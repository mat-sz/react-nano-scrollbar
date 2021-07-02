import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScrollArea } from '../src/ScrollArea';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScrollArea />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
