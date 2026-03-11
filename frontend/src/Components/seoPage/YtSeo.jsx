import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// --- All content can be easily changed here ---
const videoData = {
  mainHeading: "Recognized for Excellence in Play School Toys and Furniture",
  mainDescription: "Maskeen Overseas proudly stands as an industry leader, recognized for its commitment to quality and innovation. Awarded the prestigious titles of “Best Playschool Toys and Furniture Brand of the Year” and “Most Trusted Play School Toys Manufacturer in India,” we continue to craft toys and furniture that inspire joy, learning, and trust. These accolades reflect our dedication to creating safe, educational, and delightful experiences for children across the nation.",
  videos: [
    {
      videoId: '7y3uk_SI-Ys', // Replace with your actual YouTube Video ID
      title: 'Maskeen Overseas Won GEA2022 For Best Playschool Toys and Furniture Brand of the Year',
    },
    {
      videoId: 'Q0HQlCzq0Hs', // Replace with your actual YouTube Video ID
      title: 'Maskeen Overseas won GEA2019 award for Most Trusted Play School Toys Manufacturer in India',
    },
  ],
};

// A reusable component for the YouTube embed.
const YouTubeEmbed = ({ videoId, title }) => (
  <>
    <iframe
      className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded-xl"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    {/* This overlay is now set to ignore pointer events, allowing clicks to pass through */}
    <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black/20 group-hover:tw-bg-black/40 tw-transition-all tw-duration-300 tw-rounded-xl tw-pointer-events-none">
        <svg className="tw-w-16 tw-h-16 tw-text-white/80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
    </div>
  </>
);


function YtSeo() {
  return (
    <section className="tw-bg-gray-100 tw-py-20">
      <Container>
        {/* --- Main Heading and Description --- */}
        <div className="tw-text-center tw-max-w-4xl tw-mx-auto tw-mb-12">
          <h2 className="tw-font-bold tw-text-3xl md:tw-text-4xl tw-mb-4">
            {videoData.mainHeading.split('Play School Toys and Furniture').map((part, index, array) => 
                index < array.length - 1 ? (
                    <span key={index}>{part}<span className="tw-text-yellow-500">Play School Toys and Furniture</span></span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
          </h2>
          <p className="tw-text-gray-600 tw-text-base md:tw-text-lg">
            {videoData.mainDescription}
          </p>
        </div>

        {/* --- Video Section --- */}
        <Row className="justify-content-center">
          {videoData.videos.map((video, index) => (
            <Col key={index} md={10} lg={6} className="mb-8">
              <div className="tw-bg-white tw-p-4 tw-rounded-xl tw-shadow-md">
                 {/* This div creates the correct aspect ratio for the video. The 'group' class is now here. */}
                <div className="tw-relative tw-w-full tw-overflow-hidden tw-rounded-xl tw-cursor-pointer group" style={{ paddingBottom: '56.25%' }}>
                    <YouTubeEmbed videoId={video.videoId} title={video.title} />
                </div>
                <p className="tw-font-semibold tw-text-center tw-mt-4 tw-px-2">
                  {video.title}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default YtSeo;