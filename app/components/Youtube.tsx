'use client'

import React from 'react'

interface YouTubePlayerProps {
  videoId: string;
  width?: string;
  height?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, width = '100%', height = '400px' }) => {
  return (
    <div style={{ width, height }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-50 h-40 rounded-lg"
      ></iframe>
    </div>
  )
}

export default YouTubePlayer

