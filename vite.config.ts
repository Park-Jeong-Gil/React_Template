import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const projectName = 'projectName';
const date = new Date().toISOString().slice(0, 10);

// 이미지 최적화 함수
async function optimizeImages(outputDir: string) {
  const imagesDir = resolve(outputDir, 'assets/images');
  try {
    // 이미지 최적화
    const files = await imagemin([`${imagesDir}/*.{jpg,png,svg}`], {
      destination: imagesDir,
      plugins: [
        imageminWebp({ quality: 85 }) // WebP 변환 및 최적화
      ]
    });
    console.log(`Optimized ${files.length} images`);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Build 후 이미지 최적화 실행
    {
      name: 'vite-plugin-imagemin-webp',
      apply: 'build',
      async closeBundle() {
        const outputDir = resolve(__dirname, 'build');
        await optimizeImages(outputDir);
      }
    }
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  base: '',
  build: {
    cssMinify: true,
    minify: true,
    outDir: './build',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html')
      },
      output: {
        inlineDynamicImports: false,
        assetFileNames: (assetInfo) => {
          // Ensure assetInfo.name is defined
          if (!assetInfo.names || assetInfo.names.length === 0) {
            return `resources/other/[name][extname]`; // Default fallback
          }

          let extType = assetInfo.names[0].match(/\.([a-z0-9]+)$/i)?.[1];
          if (/(css)/i.test(extType || '')) {
            return `resources/${extType}/${projectName}-${date}-[hash][extname]`;
          } else if (
            /png|jpg|webp|avif|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || '')
          ) {
            extType = 'images';
          } else if (/(woff2|woff|otf|ttf)/i.test(extType || '')) {
            extType = 'fonts';
          }
          return `resources/${extType || 'other'}/[name][extname]`; // Default fallback
        },
        chunkFileNames: `resources/js/${projectName}-${date}-[hash].js`,
        entryFileNames: `resources/js/${projectName}-${date}-[hash].js`
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 추가적인 SCSS 옵션을 여기에 설정할 수 있습니다.
      }
    }
  }
});
