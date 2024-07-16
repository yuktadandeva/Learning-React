// export const Message = ()=>{
//     return( <h1></h1> )
// }
// rafce - with deafult shorthand
//rafc without
//imr import

import React, {useState} from 'react'

const Message = (props) => {

  return (
    <h1 className={props.color}>{props.val} {props.count}</h1>
  )
}

export default Message