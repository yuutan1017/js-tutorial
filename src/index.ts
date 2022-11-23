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

const hideVideoPlayer = () => {
  if (vidContentTag.getAttribute('src') === '') {
    vidContentTag.style.display = 'none';
  } else {
    vidContentTag.style.display = 'block';
  }
};

textSelect.onclick = async () => {
  const { contents, file } = await getTextFile();
  fileContentTag.innerText = contents;
  fileNameTag.innerText = `File name: ${file.name}`;
  hideVideoPlayer();
};

imgSelect.onclick = async () => {
  const file = await getImageFile();
  const imgUrl = createDataUrl(file);
  imgContentTag.src = imgUrl;
  hideVideoPlayer();
};

vidSelect.onclick = async () => {
  const file = await getVideoFile();
  const vidUrl = createDataUrl(file);
  vidContentTag.src = vidUrl;
  hideVideoPlayer();
};
