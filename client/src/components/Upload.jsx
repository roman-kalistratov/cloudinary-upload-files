import React, { useState } from "react";
import axios from "axios";
const Upload = () => {
  const [file, setFile] = useState(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/files",
        formData
      );

      console.log(response.data);
      setCloudinaryUrl(response.data.cloudinaryUrl); // Устанавливаем URL загруженного файла
      setFileName(file.name); // Устанавливаем название файла
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {cloudinaryUrl && (
        <div>
          <h3>Uploaded File:</h3>
          <p>File Name: {fileName}</p>
          <a href={cloudinaryUrl} target="_blank" rel="noopener noreferrer">
            View File
          </a>
        </div>
      )}
    </div>
  );
};

export default Upload;
