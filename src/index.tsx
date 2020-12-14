import React from 'react';
import ReactDoM from 'react-dom';
import {Icon} from './Icon';

const onClick2 = (event: React.MouseEvent<SVGElement | SVGUseElement>) => {
  console.log(event.target);
  console.log((event.target as SVGUseElement).href);
};

ReactDoM.render(
  <Icon name="left" onClick={onClick2}/>,
  document.getElementById('root')
);