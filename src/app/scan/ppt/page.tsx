"use client"
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const Ppt = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
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

      // Upload file to API and get preview image URL
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://157.245.152.247:8000/upload', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          setPreviewImage(data.preview_image);
        } else {
          console.error('Failed to upload file');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleScanButtonClick = () => {
    // Navigate to quiz page when scanning is done
    router.push('/quiz');
  };

  return (
    <main className="sm:ml-64 h-[90vh]">
      <div className="bg-[#685ACB] h-full px-8 py-12 flex flex-col gap-2 justify-center items-center">
        {!previewImage && (
          <>
            <h1 className="text-[2rem] font-semibold">Scan your PPT!</h1>
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
          </>
        )}
        {previewImage && (
          <div className="mt-4 flex flex-col justify-center items-center">
            <iframe src={previewImage} width="100%" height="500" title="PPT Preview" />
            <p className="text-lg font-medium mt-2">{selectedFile?.name}</p>
            <div className="max-w-md mt-2 w-full flex justify-center">
              <button
                onClick={handleScanButtonClick}
                className="border-2 border-[#320083] rounded-2xl bg-[#F7C93D] py-5 px-7 w-full text-2xl text-black font-medium"
              >
                Scan File
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Ppt;
