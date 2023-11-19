"use client";

import React, { useState } from 'react';
import FileUpload from '@/components/file-upload';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default function Home() {
  const [parsedPdfText, setParsedPdfText] = useState('');

  // Adding types to the parameters
  const handleProcessFile = (error: any, file: FilePondFile) => {
    if (error) {
      console.error('Error during file processing:', error);
      return;
    }

    // Handle the file processing here
    // file.serverId should be replaced with the appropriate property based on your server response
    setParsedPdfText(file.serverId);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-96'>
        <FilePond
          onprocessfile={handleProcessFile}
          server={{
            process: '/api/upload',
            fetch: null,
            revert: null,
          }}
        />
      </div>
      <div className='parsed-pdf-content'>
        {parsedPdfText ? <div>{parsedPdfText}</div> : <p>No PDF data</p>}
      </div>
    </main>
  );
}