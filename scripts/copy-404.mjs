import { copyFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const index = join(root, 'dist', 'index.html');
const dest = join(root, 'dist', '404.html');

if (!existsSync(index)) {
  process.exit(0);
}

copyFileSync(index, dest);
