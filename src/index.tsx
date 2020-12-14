import React from 'react';
import ReactDoM from 'react-dom';
import {Icon} from './Icon';

const onClick2 = (event: React.MouseEvent<SVGElement | SVGUseElement>) => {
  console.log(event.target);
};

ReactDoM.render(
  <Icon name="left" onClick={onClick2}/>,
  document.getElementById('root')
);