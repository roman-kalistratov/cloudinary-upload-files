export const uploadFile = async (req, res) => {
  console.log(cloudinaryUrl);

  try {
    const cloudinaryUrl = req.cloudinaryUrl;
    res.status(200).json({ cloudinaryUrl });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const uploadFiles = async (req, res) => {
  console.log(cloudinaryUrls);

  try {
    const cloudinaryUrls = req.cloudinaryUrls;
    res.status(200).json({ cloudinaryUrls });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};
