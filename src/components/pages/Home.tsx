import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Bonjour à tous</h1>
      <p>Créer vos memes personnalisees</p>
      <p>
        <Link to="/editor">Nouveau</Link>
        <Link to="/editor/0">Editer 0</Link>
        <Link to="/thumbnail">Thumbnail</Link>
      </p>
    </div>
  )
}

export default Home