import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update Description Meta Tag
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        // Insert right below the title or at the end of head
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // 3. Update Keywords Meta Tag
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Cleanup function: remove tags when component unmounts if needed
    // Actually, for SPA routing, it's better to leave them and let the next page update them,
    // so we won't remove them on unmount.
  }, [title, description, keywords]);

  return null;
};

export default SEO;
