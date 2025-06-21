'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronDown } from 'lucide-react'

const TreeNode = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="ml-0">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer text-white hover:text-cyan-300 transition-colors"
      >
        {children ? (
          isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
        ) : (
          <span className="w-4 inline-block" />
        )}
        <span>{label}</span>
      </div>

      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            className="pl-2 mt-0 border-l border-gray-600"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Tree_webdev() {
  return (
    <div className="mt-0 p-3 bg-blue-950 border-none lg:rounded-b-3xl rounded-3xl lg:text-md text-sm font-mono w-fit h-fit">
      <TreeNode label="Web Development">
        <TreeNode label="Frontend">
          <TreeNode label="HTML" />
          <TreeNode label="CSS" />
          <TreeNode label="JavaScript" />
          <TreeNode label="React" />
          <TreeNode label="Framer Motion" />
          <TreeNode label="Threejs"/>
          <TreeNode label="Vantajs"/>
          <TreeNode label="Shadcn" />
        </TreeNode>

        <TreeNode label="Backend">
          <TreeNode label="Node.js" />
          <TreeNode label="Express" />
          <TreeNode label="Laravel" />
        </TreeNode>

        <TreeNode label="Database">
          <TreeNode label="Firebase" />
          <TreeNode label="PostgreSQL" />
          <TreeNode label="MongoDB" />
        </TreeNode>
      </TreeNode>
    </div>
  )
}
