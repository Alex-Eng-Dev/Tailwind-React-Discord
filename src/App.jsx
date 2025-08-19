import { useState } from 'react'
import { MyRoutes } from './router/routes'
import { useThemeStore } from './store/useThemeStore'

function App() {
  const {theme} =useThemeStore()
  document.documentElement.classList.toggle("dark", theme==="dark")
  const [count, setCount] = useState(0)

  return (
    <>
    <MyRoutes/>
    </>
  )
}

export default App
