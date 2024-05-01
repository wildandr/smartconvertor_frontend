"use client"
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Pdf = () => {
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
          console.log(data);
          
          // Decode base64 encoded image data
          const decodedImageData = atob(data.preview_image);
          // Convert decoded data to Uint8Array
          const uint8Array = new Uint8Array(decodedImageData.length);
          for (let i = 0; i < decodedImageData.length; i++) {
            uint8Array[i] = decodedImageData.charCodeAt(i);
          }
          // Create Blob from Uint8Array
          const blob = new Blob([uint8Array], { type: 'image/png' });
          // Create object URL from Blob
          const imageUrl = URL.createObjectURL(blob);
  
          setPreviewImage(imageUrl);
        } else {
          const errorData = await response.json();
          console.error('Failed to upload file:', errorData);
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
          </>
        )}
        {previewImage && (
          <div className="mt-4 flex flex-col justify-center items-center">
            <embed src={previewImage} type="application/pdf" width="100%" height="500" />
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

export default Pdf;
