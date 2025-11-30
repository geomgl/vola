'use client'

import { PriceCard } from './price-card'
import { motion } from 'framer-motion'

export function Pricing() {
  return (
    <section className="py-32 px-8 max-w-[84rem] mx-auto overflow-visible" id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-secondary-foreground text-sm font-medium text-center mb-4">
          Simple Pricing
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-balance">
          Grab yourself a lifetime deal
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Use this limited time offer while you can
        </p>
      </motion.div>

      <div className="mt-16 w-full flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.2 // Stagger the animations
            }}
          >
            <PriceCard {...plan} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const pricingPlans = [
  {
    title: "Free",
    description: "Want to try it out for free? No problem.",
    price: 0,
    features: [
      "Up to 100 sign-ups",
      "1 waitlist page",
      "1 template",
      "FastWaitlist branding",
      "Social proof"
    ]
  },
  {
    title: "Starter",
    description: "Start collecting sign-ups for your SaaS.",
    price: 39,
    originalPrice: 59,
    features: [
      "Collect up to 2,500 sign-ups",
      "Unlimited waitlist pages",
      "5 templates",
      "Removed FastWaitlist branding",
      "Social proof"
    ]
  },
  {
    title: "Pro",
    description: "Unleash the full potential of waitlist pages.",
    price: 69,
    originalPrice: 109,
    popular: true,
    features: [
      "Collect up to 7500 sign-ups",
      "Unlimited waitlist pages",
      "Removed FastWaitlist branding",
      "5 templates",
      "Custom Domain",
      "Access advanced analytics",
      "Integrate with Resend, Loops.so, Beehiiv",
      "Create pre-order pages with Stripe"
    ]
  }
]