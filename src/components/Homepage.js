import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Nav from './Nav';
import Header from './Header';
function Homepage() {
  const stars = () => {
    const row = []
    for (let i = 0; i < 20; i++) {
      row.push(<li />)
    }
    return row
  }
  return (
    <ChakraProvider theme={theme}>
      <div className="context">
        <div className="area">
          <ul className="circles">{stars()}</ul>
        </div>
      </div>
      <Nav />
      <Header />
    </ChakraProvider>
  )
}

export default Homepage
