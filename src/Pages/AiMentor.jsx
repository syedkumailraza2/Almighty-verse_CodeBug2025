import { useEffect } from 'react';

const AiMentor = () => {
  useEffect(() => {
    const resizeIframeContainer = () => {
      // Get the viewport height
      const viewportHeight = window.innerHeight;
      // Approximate height of navbar (adjust if needed)
      const navbarHeight = 64;
      // Calculate available height (subtract navbar height)
      const availableHeight = viewportHeight - navbarHeight;
      
      // Get the container element
      const container = document.getElementById('iframe-container');
      if (container) {
        container.style.height = `${availableHeight}px`;
      }
    };
    
    // Run on initial load
    resizeIframeContainer();
    
    // Add resize event listener
    window.addEventListener('resize', resizeIframeContainer);
    
    // Clean up
    return () => window.removeEventListener('resize', resizeIframeContainer);
  }, []);

  return (
    <>
      {/* Full-height container with no margin or gap */}
      <div 
        id="iframe-container"
        className="w-full bg-black"
      >
        {/* Chat Container - removed margins to eliminate gaps */}
        <div className="h-full w-full flex flex-col bg-neutral-900 overflow-hidden">
          {/* External Iframe */}
          <div className="w-full h-full">
            <iframe
              src="https://files.bpcontent.cloud/2025/02/28/11/20250228110555-100AJ0WA.html"
              className="w-full h-full border-0"
              title="External Content"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiMentor;