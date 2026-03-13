'use client'
import { useEffect } from 'react'
export default function page() {
    useEffect(() => { window.location.href = 'swamp://'}, [])
  return (
    <div></div>
  )
}
