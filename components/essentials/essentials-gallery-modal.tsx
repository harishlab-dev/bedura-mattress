'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryModalProps {
  open: boolean
  onClose: () => void
  title: string
  folder: string
}

export function EssentialsGalleryModal({
  open,
  onClose,
  title,
  folder,
}: GalleryModalProps) {
  const [current, setCurrent] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!open) return

    setCurrent(0)
    setLoading(true)

    fetch(`/api/gallery/${folder}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
        setLoading(false)
      })
      .catch(() => {
        setImages([])
        setLoading(false)
      })
  }, [open, folder])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open || images.length === 0) return

      if (e.key === 'Escape') onClose()

      if (e.key === 'ArrowRight') {
        setCurrent((prev) => (prev + 1) % images.length)
      }

      if (e.key === 'ArrowLeft') {
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
      }
    }

    window.addEventListener('keydown', handleKey)

    return () => window.removeEventListener('keydown', handleKey)
  }, [open, images.length, onClose])

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
className="relative bg-white rounded-2xl w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"        >
          {/* Close */}

          <button
  onClick={onClose}
  className="
    absolute
    top-3
    right-3
    md:top-6
    md:right-6
    z-50
    rounded-full
    bg-white
    p-2
    shadow-lg
    hover:bg-primary
    hover:text-white
    transition
  "
>
            <X size={22} />
          </button>

          <div className="p-3 md:p-7">

            <h2 className="mb-8 text-center font-playfair text-4xl font-bold">
              {title}
            </h2>

            {loading ? (
              <div className="flex h-[380px] items-center justify-center">
                <p className="text-lg text-gray-500">Loading images...</p>
              </div>
            ) : images.length === 0 ? (
              <div className="flex h-[380px] items-center justify-center">
                <p className="text-lg text-gray-500">
                  No images available.
                </p>
              </div>
            ) : (
              <>
                {/* Main Image */}

                <div className="relative mx-auto h-[280px] max-w-3xl overflow-hidden rounded-2xl bg-[#fafafa]">
                  <Image
                    src={images[current]}
                    alt={title}
                    fill
                    className="object-contain"
                
                  />
                </div>

                {/* Thumbnails */}

                <div className="mt-8 flex flex-wrap justify-center gap-4">

                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition ${
                        current === index
                          ? 'border-primary'
                          : 'border-gray-200'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}

                </div>

                {/* Navigation */}

                {images.length > 1 && (
                  <div className="mt-8 flex justify-center gap-4">

                    <button
                      onClick={() =>
                        setCurrent(
                          (prev) =>
                            (prev - 1 + images.length) %
                            images.length
                        )
                      }
                      className="rounded-full border p-3 transition hover:bg-primary hover:text-white"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={() =>
                        setCurrent(
                          (prev) =>
                            (prev + 1) %
                            images.length
                        )
                      }
                      className="rounded-full border p-3 transition hover:bg-primary hover:text-white"
                    >
                      <ChevronRight />
                    </button>

                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}