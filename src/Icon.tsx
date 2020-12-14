import React from 'react';
import  './left.svg'

type Props={
  name?: string
}
const Icon: React.FunctionComponent<Props> =(props)=>{
  return(
    <div>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </div>
  )
}

export {Icon}