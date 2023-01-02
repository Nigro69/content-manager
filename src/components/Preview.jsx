import React from 'react'

export default function Preview({setmodal,content}) {

    const close=()=>{
        setmodal(false);
    }

  return (
    <div>
        {content}
        <div>
            <button onClick={close}>close</button>
        </div>
    </div>
  )
}
