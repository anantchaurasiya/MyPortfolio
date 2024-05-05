import React from 'react';
import Button from 'react-bootstrap/Button';

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Button onClick={handleDownload} className='more-btn'>
      {fileName}
    </Button>
  );
};

export default DownloadButton;
