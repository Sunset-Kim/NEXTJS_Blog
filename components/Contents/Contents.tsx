import { GetStaticProps } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface P {
  data: any;
}

function Contents(props: P) {
  return (
    <div>
      <ReactMarkdown>{`## 안녕`}</ReactMarkdown>
    </div>
  );
}

export default Contents;
