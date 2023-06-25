import './queue.css'
import Navbar from '../../components/navbar/Navbar'
import PlayerComponent from '../../components/Player/PlayerComponent'
import React, { useState } from 'react'

const QueuePage = () => {
  const [videoUrls, setVideoUrls] = useState([])
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const handleUrlChange = (event) => {
    const urls = event.target.value.split('\n')
    setVideoUrls(urls)
    setIsQueueCleared(false)
  }

  const handleLoadVideo = (playerRef) => {
    if (playerRef.current) {
      playerRef.current.load() // Reset the player
      playerRef.current.seekTo(0) // Reset the player's progress

      // Set the new video URL
      if (videoUrls.length > 0) {
        const currentVideoUrl = videoUrls[currentVideoIndex]
        playerRef.current.url = currentVideoUrl
        playerRef.current.seekTo(0) // Start playing from the beginning
      }
      console.log('Load video:', videoUrls[currentVideoIndex])
    }
  }

  const handleNextVideo = () => {
    if (currentVideoIndex < videoUrls.length - 1)
      setCurrentVideoIndex(currentVideoIndex + 1)
  }

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) setCurrentVideoIndex(currentVideoIndex - 1)
  }

  const [isQueueCleared, setIsQueueCleared] = useState(false)
  const clearQueue = () => {
    setVideoUrls([])
    setIsQueueCleared(true)
  }

  return (
    <>
      <Navbar />
      <p style={{ color: 'white', paddingLeft: '1rem', fontSize: '18px' }}>
        QUEUE RUNNER
      </p>
      <div className='queue_container'>
        <div className='queue_player'>
          <PlayerComponent videoUrl={videoUrls[currentVideoIndex]} />
        </div>
        <div className='queue_loader'>
          <div className='queue_loader_header'>
            <h1>Queue</h1>
            <button onClick={clearQueue} disabled={isQueueCleared}>
              Clear Queue
            </button>
          </div>
          <div className='clip_status'>
            <p>
              {' '}
              {currentVideoIndex + 1} of {videoUrls.length} clips
            </p>
          </div>
          <textarea
            value={videoUrls.join('\n')}
            onChange={handleUrlChange}
            placeholder='Enter video URLs (one URL per line)'
          />
          {/* <button onClick={handleLoadVideo}>Load Video</button> */}
          <button onClick={handleNextVideo}>Next</button>
          <button onClick={handlePreviousVideo}>Previous</button>
        </div>
      </div>
    </>
  )
}

export default QueuePage
