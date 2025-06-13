import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY })
    };

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      console.log(" Mouse tracking stopped")
    };
  }, [])

  const handleStart = () => setIsRunning(true)
  const handlePause = () => setIsRunning(false)
  const handleReset = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  return (
    <div className="box">
      <h2> Timer</h2>
      <p>Time: {seconds}s</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>{isRunning ? "Pause" : "Resume"}</button>
      <button onClick={handleReset}>Reset</button>
      <p>Mouse Position: X: {coords.x}, Y: {coords.y}</p>
    </div>
  )
}
