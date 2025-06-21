'use client'

import React from 'react'
import { Download } from 'lucide-react'

export default function CV_download() {
  return (
    <a
    href="/resources/Asique_CV.pdf"
    download
    className="inline-flex items-center gap-2 px-6 py-3 mt-5 bg-emerald-800 text-white rounded-lg shadow-md hover:bg-cyan-700 transition-all border-amber-50"
    >
        <Download size={18} /> Resume
    </a>
  )
}
