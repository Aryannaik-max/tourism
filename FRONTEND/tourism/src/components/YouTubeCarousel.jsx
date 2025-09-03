import { useState } from 'react';

const youtubeVideos = [
  { id: '6NJJMH2k9LE', title: 'Jharkhand Scenic Water Reservoir' },
  { id: 'aAYUoBpaXT0', title: 'Netarhat' },
  { id: '81LD2PJrBmc', title: 'Chandil Dam' },
  { id: 'pjOHHazNBss', title: 'Kiriburu' },
  { id: 'kzgw0qjQRgw', title: 'Parasnath' },
];

const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const PlayIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)" stroke="rgba(0,0,0,0.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="black"/>
    </svg>
);

const ComponentStyles = () => (
  <style>{`
    .yt-gallery-container {
      min-height: 100vh;
      background-color: #F0E1CF;
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .yt-gallery-wrapper {
      width: 100%;
      max-width: 64rem;
      margin: 0 auto;
    }
    .yt-gallery-main-title {
      font-size: 2.2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      color: #453A31;
      padding: 3rem 3rem 2rem 3rem;
    }
    .yt-gallery-player-wrapper {
      position: relative;
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      background-color: #000;
      margin-bottom: 2rem;
    }
    .yt-gallery-aspect-ratio {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
    }
    .yt-gallery-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .yt-gallery-carousel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .yt-gallery-carousel-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #4a5568;
    }
    .yt-gallery-carousel-nav {
      display: flex;
    }
    .yt-gallery-carousel-nav button:first-child {
        margin-right: 0.5rem;
    }
    .yt-gallery-nav-button {
      background-color: #fff;
      padding: 0.5rem;
      border: none;
      border-radius: 9999px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      cursor: pointer;
      transition: background-color 150ms ease-in-out;
    }
    .yt-gallery-nav-button:hover {
      background-color: #edf2f7;
    }
    .yt-gallery-nav-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .yt-gallery-nav-button svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #718096;
    }
    .yt-gallery-carousel-body {
      overflow: hidden;
      position: relative;
    }
    .yt-gallery-carousel-slider {
      display: flex;
      transition: transform 500ms ease-in-out;
    }
    .yt-gallery-thumbnail-item {
      flex-shrink: 0;
      cursor: pointer;
    }
    .yt-gallery-thumbnail-content {
      position: relative;
      border-radius: 0.375rem;
      overflow: hidden;
      transition: all 300ms ease-in-out;
    }
    .yt-gallery-thumbnail-item:hover .yt-gallery-thumbnail-content {
        transform: scale(1.05);
    }
    .yt-gallery-thumbnail-selected {
        box-shadow: 0 0 0 4px #06b6d4; /* ring-4 ring-cyan-500 */
    }
    .yt-gallery-thumbnail-image {
      width: 100%;
      height: auto;
      display: block;
    }
    .yt-gallery-thumbnail-overlay {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 150ms ease-in-out;
    }
    .yt-gallery-thumbnail-item:hover .yt-gallery-thumbnail-overlay {
      opacity: 1;
    }
    
    @media (min-width: 768px) {
      .yt-gallery-main-title {
        font-size: 2.25rem;
      }
    }
  `}</style>
);

const YouTubeCarousel = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const [carouselStartIndex, setCarouselStartIndex] = useState(0);

  const videosPerPage = 4;

  const selectVideo = (index) => {
    setSelectedVideoIndex(index);
  };

  const scrollCarousel = (direction) => {
    const newStart = direction === 'next'
      ? Math.min(carouselStartIndex + videosPerPage, youtubeVideos.length - videosPerPage)
      : Math.max(carouselStartIndex - videosPerPage, 0);
    setCarouselStartIndex(newStart);
  };
  
  const selectedVideo = youtubeVideos[selectedVideoIndex];
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&mute=1&rel=0`;

  return (
    <>
      <ComponentStyles />
      <div className="yt-gallery-container">
        <div className="yt-gallery-wrapper">
          <h1 className="yt-gallery-main-title">Explore Virtual Reality Experience of these Destinations</h1>
          
          <div className="yt-gallery-player-wrapper">
            <div className="yt-gallery-aspect-ratio">
              <iframe
                key={selectedVideo.id}
                src={videoSrc}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="yt-gallery-iframe"
              ></iframe>
            </div>
          </div>

          <div>
            <div className="yt-gallery-carousel-header">
              <div className="yt-gallery-carousel-nav">
                <button
                  onClick={() => scrollCarousel('prev')}
                  disabled={carouselStartIndex === 0}
                  className="yt-gallery-nav-button"
                  aria-label="Previous videos"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={() => scrollCarousel('next')}
                  disabled={carouselStartIndex >= youtubeVideos.length - videosPerPage}
                  className="yt-gallery-nav-button"
                  aria-label="Next videos"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>

            <div className="yt-gallery-carousel-body">
              <div
                className="yt-gallery-carousel-slider"
                style={{ transform: `translateX(-${(carouselStartIndex * 100) / videosPerPage}%)` }}
              >
                {youtubeVideos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => selectVideo(index)}
                    className="yt-gallery-thumbnail-item"
                    style={{ width: `${100 / videosPerPage}%`, padding: '0 8px' }}
                  >
                    <div className={`yt-gallery-thumbnail-content ${selectedVideoIndex === index ? 'yt-gallery-thumbnail-selected' : ''}`}>
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className="yt-gallery-thumbnail-image"
                      />
                      <div className="yt-gallery-thumbnail-overlay">
                          <PlayIcon />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubeCarousel;