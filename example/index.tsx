import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';
import { Example } from './Example';

const App = () => {
  return (
    <div>
      <section>
        <h1>react-nano-scrollbar</h1>
      </section>
      <section>
        <h2>Both vertical and horizontal scrollbars:</h2>
        <Example />
      </section>
      <section>
        <h2>Vertical scrollbar only:</h2>
        <Example hideScrollbarX />
      </section>
      <section>
        <h2>Horizontal scrollbar only:</h2>
        <Example hideScrollbarY />
      </section>
      <section>
        <h2>Autohide disabled:</h2>
        <Example autohide={false} />
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
