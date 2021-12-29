// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

const path = {
  build: {},
  src: {},
  watch: {},
  clean: buildFolder,
  buildFolder: srcFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
