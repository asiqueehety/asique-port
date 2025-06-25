'use client'

import { motion } from 'framer-motion'

export default function SkillBar(props) {
    const level = props.level;
  return (
    <div className="w-full flex flex-row items-center justify-center ">
      <div className="flex justify-between items-center mr-5">
        <span className="text-sm text-gray-300 bg-black/50 rounded-full size-6 flex items-center justify-center">{level}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full overflow-hidden h-3.5">
        <motion.div
          className="bg-cyan-400 h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
