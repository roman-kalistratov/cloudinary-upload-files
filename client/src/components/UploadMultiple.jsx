import React, { useState } from "react";
import axios from "axios";

const UploadMultipleFiles = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/files/multiple",
        formData
      );
      console.log(response.data);
      setUploadedFiles(response.data.cloudinaryUrls); // Устанавливаем загруженные файлы в состояние
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <h2>Upload Multiple Files</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      {uploadedFiles?.length > 0 && (
        <div>
          <h3>Uploaded Files:</h3>
          <ul>
            {uploadedFiles?.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {files[index].name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadMultipleFiles;
