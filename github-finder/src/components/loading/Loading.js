import React from 'react'
import LoadingImg from './loading.gif'

const Loading = () => {
  return (
    <>
        <img src={LoadingImg} alt='Loading...' style={{width:'200px', display:'block',margin:'auto'}}/>
    </>
  )
}

export default Loading