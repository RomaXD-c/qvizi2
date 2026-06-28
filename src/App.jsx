import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'

// 1
// რეაქტს გააჩნია კომპონენტები რაც იმის საშუალებას გვაძლევს რომ ერთხელ დაწერილი კომპონენტი გამოვიყენოთ ბევრგან
// ასევე გააჩნია ვირტუალური დომი რომელიც მთლიანი გვერდის მაგივრად ანახლებს მხოლოდ იმ ნაწილს რომელშიც ცვლილებაა




function App() {
  
  const userNames =['anna', 'nini', 'luka', 'nika']

  return (
    <>
      <Header></Header>
      <div>
        <ul>
          {userNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>


      <Cards></Cards>
      
    </>
  )
}

export default App
