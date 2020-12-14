import React from 'react';
import './icon.scss'
import {classnames} from './helpers/classnames';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('./', true, /\.svg$/));} catch (error) {console.log(error);}

interface Props extends React.SVGAttributes<SVGElement>{
  name?: string
}
const Icon: React.FunctionComponent<Props> = (props) => {
  const {className,name,...rest}=props
  return (
    <div>
      <svg className={classnames('ui-icon',className)} {...rest}>
        <use xlinkHref={`#${name}`}/>
      </svg>
    </div>
  );
};

export {Icon}