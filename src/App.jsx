import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header'
import Nav from './components/Nav'
import theme from './theme'
import { Routes, Route, useParams } from 'react-router-dom'
import Homepage from './components/Homepage'
function reverseString(str) {
  let newString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}
const App = () => {
  setInterval(() => {
    const string = window.location.href
    var temp = ''
    var bool = 0
    for (var i = string.length - 1; i >= 0; i--) {
      if (string[i] == '/') {
        break
      } else {
        temp += string[i]
      }
    }
    var final = reverseString(temp)
    localStorage.setItem('userinfo', final)
  }, 200)

  return (
    <>
      <Routes>
        <Route path="/:userid" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
