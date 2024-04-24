import multer from "multer";

// multer config
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    );

    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
