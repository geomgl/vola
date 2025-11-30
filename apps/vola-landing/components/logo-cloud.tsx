'use client'

import Image from 'next/image'

const logos = [
  { src: '/x.svg', alt: 'x logo' },
  { src: '/reddit.svg', alt: 'reddit logo' },
  { src: '/product-hunt.svg', alt: 'product-hunt logo' },
  { src: '/hacker-news.svg', alt: 'hacker-news logo' },
  { src: '/linked-in.svg', alt: 'linked-in logo' },
  { src: '/youtube.svg', alt: 'youtube logo' }
]

export function LogoCloud() {
  return (
    <section className="bg-background text-foreground pt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-medium text-center mb-6 text-muted-foreground">
          As seen on
        </h2>
        <div className="relative">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:30s] py-4">
            {[...Array(4)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                {logos.map((logo, index) => (
                  <div key={index} className="mx-4 md:mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-8 w-auto"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
        </div>
      </div>
    </section>
  )
}