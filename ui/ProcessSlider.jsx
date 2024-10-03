"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const images = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-SBjeFqcGifasCShOVybpw7VihprwkG.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-HIOZBajLKasQ6HWgzICBAFmSz3BY7I.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-nmpMZpdqWnqQ2VicxymjKqKtBQZR9z.png',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-a4qnEAaMyMfMlpxpCNjjZ0Eys4YTDO.png'
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartX('touches' in e ? e.touches[0].pageX : e.pageX)
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const currentX = 'touches' in e ? e.touches[0].pageX : e.pageX
    const diff = startX - currentX
    if (diff > 50) {
      handleNext()
      setIsDragging(false)
    } else if (diff < -50) {
      handlePrev()
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleClick = (e) => {
    const rect = sliderRef.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX - rect.left
      if (x > rect.width / 2) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    const touchStartHandler = handleDragStart
    const touchMoveHandler = handleDragMove
    const touchEndHandler = handleDragEnd

    if (slider) {
      slider.addEventListener('touchstart', touchStartHandler)
      slider.addEventListener('touchmove', touchMoveHandler)
      slider.addEventListener('touchend', touchEndHandler)
    }

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', touchStartHandler)
        slider.removeEventListener('touchmove', touchMoveHandler)
        slider.removeEventListener('touchend', touchEndHandler)
      }
    }
  }, [])

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden touch-pan-y">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out cursor-pointer"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onClick={handleClick}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
