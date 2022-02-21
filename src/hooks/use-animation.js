import { useState } from 'react'

const useAnimation = (time = 200) => {
  const [animation, setAnimation] = useState('')

  const addAnimation = (animate, customTime = time) => {
    setAnimation(animate)
    setTimeout(() => {
      setAnimation('')
    }, customTime)
  }

  return { addAnimation, animation }
}

export default useAnimation
