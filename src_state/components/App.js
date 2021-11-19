import React from 'react';

import Accordian from 'components/Accordian';

let items = [
  {
    title: 'What is React',
    content: 'React is a frontend javascript framework',
  },
  {
    title: 'Why use React',
    content: 'React is a performance efficient framework',
  },
  {
    title: 'How do you use React',
    content: 'By creating component',
  },
];
const App = () => {
  return <div><Accordian items={items}/></div>;
};
export default App;