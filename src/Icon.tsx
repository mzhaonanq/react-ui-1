import React from 'react';
import './icon.scss'
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('./', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string
  onClick: React.MouseEventHandler<SVGElement>
}
const Icon: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <svg className="ui-icon" onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </div>
  );
};

export {Icon}