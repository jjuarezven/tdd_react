const mapChooser = (locationName) => {
  if (!locationName) {
    locationName = "none";
  }

  const imageName = `${locationName}.png`;
  return imageName;
};

export default mapChooser;
