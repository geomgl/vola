"use client";

import { motion } from "framer-motion";

export function Challenge() {
  return (
    <div>
      <div
        data-testid="challenge"
        className="flex flex-col items-center justify-center pt-16 pb-24 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-primary text-sm font-medium text-center mb-4">
            The challenge
          </h3>
          <h2 className="text-3xl font-bold text-center mb-8">
            Stop losing sales opportunities and overloading your team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-4xl divide-y md:divide-y-0 md:divide-x place-items-center px-4">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Stagger the animations
              }}
              className="flex flex-col items-center text-center py-8 md:py-0 md:px-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.2, // Slightly delay the icon animation
                }}
                className="bg-primary/10 p-4 rounded-full mb-4"
              >
                {challenge.icon}
              </motion.div>
              <p className="text-sm text-muted-foreground">{challenge.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const challenges = [
  {
    icon: <ClockIcon className="w-8 h-8 text-primary" />,
    text: "Missed Calls = Missed Patients",
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-primary" />,
    text: "Staff Burnout and Overload",
  },
  {
    icon: <ChartPieIcon className="w-8 h-8 text-primary" />,
    text: "Scaling Without Hiring More Staff",
  },
];

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ChartPieIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}
