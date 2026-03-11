import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// --- All content can be easily changed here in the future ---
const seoContent = [
  {
    // Add the path to your image here. If you set it to null, the text will take up the full width.
    image: '/path/to/your/playschool-toys-image.png',
    sections: [
      {
        title: 'Playschool Toys in Ranchi',
        paragraphs: [
          'In Ranchi, Maskeen Overseas is one of the leading and most dignified names in the industry related to the manufacturing of playschool toys and school furniture. We are a renowned manufacturer in Ranchi of playschool toys and were founded in 1948 to bring joy and happiness to the fascinating and vibrant world of children. This kid’s brand was incepted under the majestic leadership of CEO Mr. Sahibjeet Singh, who aims to deliver valuable and money-worthy products.',
          'The nature of our business in Ranchi involves trusted manufacturers, suppliers, and exporters of this industry. The key features of our unmatched services in Ranchi include the best customer care support, fast-paced delivery, high-quality material, undamaged product shipment. In Ranchi, with our years of expertise in this respective domain, we have made momentous growth to understand the need of this sector and are dedicated to serving in Ranchi an exquisite range of safe and durable playschool toys at competitive price rates.',
          'Introducing Maskeen Overseas - your go-to destination for high-quality toys in Ranchi that inspire imagination and foster creativity. As one of the leading Play School Toys Manufacturers in Ranchi, we take immense pride in crafting a diverse range of toys that cater to the unique needs of young learners. Our commitment to excellence and safety ensures that every toy in Ranchi we create not only entertains but also educates, making playtime an enriching experience for children. You can trust in the power of play and the importance of a conducive learning environment in Ranchi. We are dedicated to providing you with top-notch toys and school furniture in Ranchi. Our products in Ranchi are made to enrich the lives of children and help them grow.',
        ],
      },
      {
        title: 'School Furniture Suppliers in Ranchi',
        paragraphs: [
          'We understand that a conducive learning environment in Ranchi is crucial for students’ growth and development. Therefore, our school furniture in Ranchi is thoughtfully designed to promote comfort and ergonomic support, fostering an ideal atmosphere for learning. Beyond our captivating selection of toys, we extend our expertise as one of the most reliable School Furniture Suppliers in Ranchi. From colourful playroom setups to functional classroom arrangements, we offer durable and aesthetically pleasing furniture solutions in Ranchi to elevate any educational space. As suppliers of school furniture in Ranchi, we are committed to providing affordable and safe products that encourage children to learn and grow in a healthy environment.',
        ],
      },
    ],
  },
];

function MainContentSeo() {
  const contentBlock = seoContent[0];
  const mainSection = contentBlock.sections[0];
  const otherSections = contentBlock.sections.slice(1);

  return (
    <section className="tw-bg-[#ffcc00] tw-py-16">
      
            
      <Container>
        {/* Main, Centered Heading */}
        
        <div className="tw-text-center tw-mb-12">
          <h1 className="tw-font-bold tw-text-4xl tw-text-gray-800">
            {mainSection.title}
          </h1>
          {/* Underline */}
          <div className="tw-mt-2 tw-mx-auto tw-w-24 tw-h-1 tw-bg-[#f6e6aa]"></div>
        </div>

        <Row className="tw-items-center">
          {/* Image Column */}
          {contentBlock.image && (
            <Col md={5} className="tw-mb-8 md:tw-mb-0">
              <img
                src={contentBlock.image}
                alt="Promotional collage of playschool toys"
                className="tw-rounded-lg tw-shadow-lg tw-w-full"
              />
            </Col>
          )}

          {/* Text Content Column */}
          <Col md={contentBlock.image ? 7 : 12}>
            {/* Paragraphs from the first section */}
            <div className="tw-space-y-4">
              {mainSection.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="tw-text-black tw-leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Subsequent Sections */}
            {otherSections.map((section, secIndex) => (
              <div key={secIndex} className="tw-mt-8">
                <h2 className="tw-font-bold tw-text-3xl tw-text-gray-800 tw-mb-4">
                  {section.title}
                </h2>
                <div className="tw-space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="tw-text-black tw-leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainContentSeo;
