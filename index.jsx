import * as React from 'react';
import * as ReactDOM from 'react-dom';

function Title() {
  return <h2> Bundled from esbuild </h2>;
}

function Root() {
  return (
    <>
      <h1> Hello from esbuild! </h1>
      <Title />
    </>
  );
}

ReactDOM.render(Root(), document.getElementById('root'));
