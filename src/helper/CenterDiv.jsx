import React, { Children } from 'react'

const CenterDiv = ({children}) => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}>
        {children}
    </div>
  )
}

export default CenterDiv