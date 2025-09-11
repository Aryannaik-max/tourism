import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "@heroicons/react/24/outline";

const youtubeVideos = [
  { id: '6NJJMH2k9LE', title: 'Jharkhand Scenic Water Reservoir' },
  { id: 'aAYUoBpaXT0', title: 'Netarhat' },
  { id: '81LD2PJrBmc', title: 'Chandil Dam' },
  { id: 'pjOHHazNBss', title: 'Kiriburu' },
  { id: 'kzgw0qjQRgw', title: 'Parasnath' },
];

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
    <div className="flex flex-col items-center justify-center p-4 md:p-8 bg-[#243B55] rounded-2xl shadow-2xl text-white">
      <div className="w-full max-w-6xl">
        {/* Main Player */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8 border-4 border-[#4CAF50]">
          <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe
              key={selectedVideo.id}
              src={videoSrc}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Carousel Header & Nav */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#4CAF50]">{selectedVideo.title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => scrollCarousel('prev')}
              disabled={carouselStartIndex === 0}
              className="p-2 rounded-full bg-white shadow-md transition-colors duration-200 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous videos"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600 hover:text-[#4CAF50]" />
            </button>
            <button
              onClick={() => scrollCarousel('next')}
              disabled={carouselStartIndex >= youtubeVideos.length - videosPerPage}
              className="p-2 rounded-full bg-white shadow-md transition-colors duration-200 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next videos"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600 hover:text-[#4CAF50]" />
            </button>
          </div>
        </div>

        {/* Carousel Body */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(carouselStartIndex * 100) / videosPerPage}%)` }}
          >
            {youtubeVideos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => selectVideo(index)}
                className="flex-shrink-0 cursor-pointer"
                style={{ width: `${100 / videosPerPage}%`, padding: '0 8px' }}
              >
                <div 
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] ${selectedVideoIndex === index ? 'ring-4 ring-[#4CAF50]' : ''}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-[#152A4C] bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                    <PlayIcon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCarousel;
