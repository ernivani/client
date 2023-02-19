import React from 'react'
import { useParams } from 'react-router-dom'

function Home() {
  return (
    <div>Profile de l'utilisateur : {useParams().id}</div>
  )
}

export default Home