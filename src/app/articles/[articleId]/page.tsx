"use client"

import { useParams } from 'next/navigation'
import React from 'react'

export default function ArticlePage() {
  const { articleId } = useParams()
  return (
    <div>ArticlePage {articleId}</div>
  )
}
