import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Pokedex from './pages/Pokedex.tsx'
import PokemonGuess from './pages/PokemonGuess.tsx'
import PokemonQuiz from './pages/PokemonQuiz.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'pokedex',
        element: <Pokedex />
      },
      {
        path: "whosthatpokemon",
        element: <PokemonGuess />
      },
      {
        path: "quiz",
        element: <PokemonQuiz />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
