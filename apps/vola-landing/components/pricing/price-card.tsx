'use client'

import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import { InfoIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface PriceCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  buttonText?: string;
}

export function PriceCard({ 
  title, 
  description, 
  price, 
  originalPrice,
  features,
  popular,
  buttonText = "Get Started"
}: PriceCardProps) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden w-[22rem] sm:w-[26rem] flex flex-col h-full ${popular ? 'border-primary' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex flex-col space-y-1.5 p-6"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
          {popular && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              Popular
            </motion.div>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="p-6 pt-0 flex-grow flex flex-col"
      >
        <div className="flex items-baseline gap-2 mb-4">
          {originalPrice && (
            <span className="text-lg line-through text-muted-foreground">${originalPrice}</span>
          )}
          <span className="text-5xl font-extrabold">${price}</span>
          <span className="text-xs text-muted-foreground uppercase font-semibold">USD</span>
        </div>
        <span className="text-sm text-muted-foreground mb-4">
          {price === 0 ? 'Free to get started' : 'One-time payment'}
        </span>
        <ul className="space-y-2.5 leading-relaxed text-base">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
              className="flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span>{feature}</span>
              <button data-state="closed">
                <InfoIcon className="w-4 h-4 text-muted-foreground" />
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex items-center p-6 pt-0 mt-auto"
      >
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {popular && <Zap className="w-4 h-4 mr-2" />}
          {buttonText}
        </Button>
      </motion.div>
    </div>
  )
}