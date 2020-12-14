import React from 'react';
import './icon.scss'
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('./', true, /\.svg$/));} catch (error) {console.log(error);}

interface Props extends React.SVGAttributes<SVGElement>{
  name?: string
}
const Icon: React.FunctionComponent<Props> = (props) => {
  const {className,...rest}=props
  return (
    <div>
      <svg className="ui-icon" {...rest}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </div>
  );
};

export {Icon}