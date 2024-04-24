import cloudinary from "../utils/cloudinary.js";

const cloudinaryUpload = (req, res, next) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "File not found" });
  }

  const fName = file.originalname.split(".")[0];

  // Upload file to Cloudinary
  cloudinary.uploader.upload(
    file.path,
    { resource_type: "auto", folder: "files", public_id: fName },
    (error, result) => {
      // Upload to the "files" folder
      if (error) {
        console.error("Error uploading to Cloudinary:", error);
        return res.status(500).send("Error uploading file to Cloudinary.");
      }
      req.cloudinaryUrl = result.secure_url; // Save the file URL on Cloudinary in the request object req
      next();
    }
  );
};

export default cloudinaryUpload;
