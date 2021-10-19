import React from 'react'
import { hydrate, render } from 'react-dom'
import Default from './layouts/default'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Default />
    </React.StrictMode>,
    rootElement
  )
} else {
  render(
    <React.StrictMode>
      <Default />
    </React.StrictMode>,
    rootElement
  )
}
