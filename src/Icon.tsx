import React from 'react';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('./', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name?: string
}
const Icon: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </div>
  );
};

export {Icon}