import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function HiddenWord() {
  const hiddenWord = "btndato"
  const [typed, setTyped] = useState("")
  const [found, setFound] = useState(false)

   useEffect(() => {
    const handleKeyPress = (e) => {
      setTyped((prev) => {
        const updated = prev + e.key
        if (updated.includes(hiddenWord)) {
          setFound(true)
        }
        return updated
      })
    }

    window.addEventListener("keypress", handleKeyPress)
    return () => {
      window.removeEventListener("keypress", handleKeyPress)
      console.log(" HiddenWord component unmounted")
    }
  }, [])
  return (
    <div className="box">
      <h2>Hiddemn word</h2>
      <p>TYpEEEEEEEEEEEEEAS</p>
      {found && <p className="found">Find hidden word: <b>{hiddenWord}</b></p>}
      <p>Current input: {typed}</p>
    </div>
  );
}
