"use client";

import React, { useState } from 'react';
import FileUpload from '@/components/file-upload';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-96'>
        <FilePond
          server={{
            process: '/api/upload',
            fetch: null,
            revert: null,
          }}
        />
      </div>
    </main>
  );
}
