import cloudinary from "../utils/cloudinary.js";

const cloudinaryMultipleUpload = async (req, res, next) => {
  const files = req.files;
  if (!files || files.length === 0) {
    return res.status(400).json({ message: "Files not found" });
  }

  try {
    const uploadPromises = files.map(async (file) => {
      // Save the file name
      const fName = file.originalname.split(".")[0];
      // Upload each file to Cloudinary
      const result = await cloudinary.uploader.upload(file.path, {
        resource_type: "auto",
        folder: "files", // Folder where the file is uploaded
        public_id: fName, // Pass the saved file name
      });

      return result.secure_url;
    });

    // Wait for all asynchronous file uploads to complete
    const cloudinaryUrls = await Promise.all(uploadPromises);

    req.cloudinaryUrls = cloudinaryUrls; // Add the array of uploaded file URLs to the request object
    next();
  } catch (error) {
    console.error("Error uploading files to Cloudinary:", error);
    res.status(500).json({ message: "Error uploading files to Cloudinary" });
  }
};

export default cloudinaryMultipleUpload;
