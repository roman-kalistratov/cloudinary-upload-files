import express from "express";
import { uploadFile, uploadFiles } from "../controllers/file.controller.js";
import upload from "../middleware/multer.middleware.js";
import cloudinaryUpload from "../middleware/cloudinary.middleware.js";
import cloudinaryMultipleUpload from "../middleware/cloudinaryMultiple.middleware.js";

const router = express.Router();

router.post("/", upload.single("file"), cloudinaryUpload, uploadFile);
router.post(
  "/multiple",
  upload.array("files"),
  cloudinaryMultipleUpload,
  uploadFiles
);

export default router;
