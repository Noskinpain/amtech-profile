import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners'; // Import the ClipLoader component
import "../style/loader.css"; // Ensure you have the appropriate styles for the loader

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showLoader = setTimeout(() => {
      setLoading(false);
    }, 3000); // Display loader for at least 3 seconds

    const handleLoad = () => {
      clearTimeout(showLoader);
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(showLoader);
    };
  }, []);

  return (
    loading && (
      <div className="loader-overlay">
        <div className="loader-wrapper">
          {/* Using the ClipLoader from react-spinners */}
          <ClipLoader color="#36D7B7" loading={loading} size={150} />
        </div>
      </div>
    )
  );
};

export default Loader;
