import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';

const root = resolve(process.cwd());
const webDir = resolve(root, 'www');

const copyList = [
  'index.html',
  'manifest.json',
  'sw.js',
  'offline.html',
  'icon-192.png',
  'icon-512.png'
];

const removeList = ['node_modules', '.git', '.github', 'android', 'www', 'scripts'];

function cleanDir(path) {
  if (existsSync(path)) rmSync(path, { recursive: true, force: true });
  mkdirSync(path, { recursive: true });
}

function copyFileIfExists(fileName) {
  const source = join(root, fileName);
  const target = join(webDir, fileName);
  if (existsSync(source) && statSync(source).isFile()) {
    cpSync(source, target, { force: true });
  }
}

cleanDir(webDir);

for (const fileName of copyList) {
  copyFileIfExists(fileName);
}

for (const item of readdirSync(root)) {
  if (removeList.includes(item)) continue;
  const source = join(root, item);
  const target = join(webDir, item);
  if (statSync(source).isDirectory()) {
    cpSync(source, target, { recursive: true, force: true });
  }
}

console.log('Prepared web assets in ./www');
