import React, { useState } from 'react';
import { Button} from 'react-bootstrap';

const ReadMoreParagraph = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div> 
      <p className='p-text'>{isExpanded ? text : `${text.slice(0, maxLength)}...`} <Button variant="link" onClick={toggleExpand} size='sm' className='p-0 p-text'>
        {isExpanded ? 'Read Less' : 'Read More'}
      </Button>
      </p>
    </div>
  );
};

export default ReadMoreParagraph;
