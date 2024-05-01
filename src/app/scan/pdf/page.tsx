"use client"
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const Pdf = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // Upload file to API and get thumbnail
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('https://curly-cod-qrrpwr54j5w29vw6-5000.app.github.dev/upload', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          setThumbnail(data.thumbnail);
        } else {
          console.error('Failed to upload file');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleNext = () => {
    // Navigate to the dynamic route with selectedFile name as parameter
    if (selectedFile && thumbnail) {
      router.push(`/scan/pdf/${encodeURIComponent(selectedFile.name)}`);
    }
  };

  return (
    <main className="sm:ml-64 h-[90vh]">
      <div className="bg-[#685ACB] h-full px-8 py-12 flex flex-col gap-2 justify-center items-center">
        {thumbnail && (
          <div className="mt-4">
            <img src={thumbnail} alt="Thumbnail" className="w-32 h-32 object-cover rounded" />
            <p className="text-lg font-medium mt-2">{selectedFile?.name}</p>
          </div>
        )}
        <h1 className="text-[2rem] font-semibold">Scan your PDF!</h1>
        <h1 className="text-2xl font-medium">Turn your file into a quiz!</h1>
        <div className="max-w-md mt-2 w-full flex justify-center">
          <button
            onClick={handleButtonClick}
            className="border-2 border-[#320083] rounded-2xl bg-[#F7C93D] py-5 px-7 w-full text-2xl text-black font-medium"
          >
            Select File
          </button>
          <input
            onChange={handleFileChange}
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </main>
  );
};

export default Pdf;
