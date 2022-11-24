export const textFileOptions: OpenFilePickerOptions = {
  types: [
    {
      description: 'Text Files',
      accept: {
        'text/plain': ['.txt'],
      },
    },
  ],
};

export const imageFileOptions: OpenFilePickerOptions = {
  types: [
    {
      description: 'Image Files',
      accept: {
        'image/jpeg': ['.jpg', '.jpeg'],
        'image/png': ['.png'],
        'image/svg+xml': ['.svg'],
        'image/webp': ['.webp'],
      },
    },
  ],
};

export const videoFileOptions: OpenFilePickerOptions = {
  types: [
    {
      description: 'Video Files',
      accept: {
        'video/mp4': ['.mp4'],
        'video/mkv': ['.mkv'],
        'video/webm': ['.webm'],
      },
    },
  ],
};

export const createDataUrl = (blob: Blob | MediaSource) => {
  const urlCreator = window.URL || window.webkitURL;
  const mediaUrl = urlCreator.createObjectURL(blob);

  return mediaUrl;
}
