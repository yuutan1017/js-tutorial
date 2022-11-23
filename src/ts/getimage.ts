import { imageFileOptions } from './constants';

export const getImageFile = async () => {
  const [fileHandle] = await showOpenFilePicker(imageFileOptions);
  const file = await fileHandle.getFile();

  return { file };
};
