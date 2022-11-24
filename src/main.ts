import { getVideoFile } from './ts/getVideo';
import { getTextFile } from './ts/getText';
import { getImageFile } from './ts/getImage';
import { createDataUrl } from './ts/constants';

const textSelect: any = document.getElementById('textSelect');
const imgSelect: any = document.getElementById('imgSelect');
const vidSelect: any = document.getElementById('vidSelect');

const fileContentTag: any = document.getElementById('fileContent');
const imgContentTag: any = document.getElementById('imgContent');
const vidContentTag: any = document.getElementById('vidContent');

const fileNameTag: any = document.getElementById('fileName');

let isTextOpen = false;
let isImageOpen = false;
let isVideoOpen = false;

const removeOtherElements = () => {
  if (!isTextOpen) {
    fileContentTag.innerText = '';
  }
  if (!isImageOpen) {
    imgContentTag.src = '';
  }
  if (!isVideoOpen) {
    vidContentTag.style.display = 'none';
    vidContentTag.src = '';
  }
};

const hideVideoPlayer = () => {
  if (vidContentTag.getAttribute('src') === '') {
    vidContentTag.style.display = 'none';
  } else {
    vidContentTag.style.display = 'block';
  }
};

hideVideoPlayer();

textSelect.onclick = async () => {
  const { contents, file } = await getTextFile();
  fileContentTag.innerText = contents;
  fileNameTag.innerText = `File name: ${file.name}`;
  isTextOpen = true;
  isImageOpen = false;
  isVideoOpen = false;
  hideVideoPlayer();
  removeOtherElements();
};

imgSelect.onclick = async () => {
  const file = await getImageFile();
  const imgUrl = createDataUrl(file);
  fileNameTag.innerText = `File name: ${file.name}`;
  imgContentTag.src = imgUrl;
  isTextOpen = false;
  isImageOpen = true;
  isVideoOpen = false;
  hideVideoPlayer();
  removeOtherElements();
};

vidSelect.onclick = async () => {
  const file = await getVideoFile();
  const vidUrl = createDataUrl(file);
  fileNameTag.innerText = `File name: ${file.name}`;
  vidContentTag.src = vidUrl;
  isTextOpen = false;
  isImageOpen = false;
  isVideoOpen = true;
  hideVideoPlayer();
  removeOtherElements();
};
