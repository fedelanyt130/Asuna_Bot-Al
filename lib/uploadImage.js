import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type';

/**
 * Upload file to wirksi-box.vercel.app and return the raw.githubusercontent URL
 * @param {Buffer} buffer - The file buffer
 * @return {Promise<string>} - The public raw URL
 */
export default async (buffer) => {
  const { ext, mime } = await fileTypeFromBuffer(buffer);
  const form = new FormData();

  // 💡 CORRECTA conversión de Buffer a ArrayBuffer
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  const blob = new Blob([arrayBuffer], { type: mime });

  // Asegúrate que el campo sea 'file' si tu backend espera eso
  form.append('file', blob, `upload-${Date.now()}.${ext}`);

  const res = await fetch('https://wirksi-box.vercel.app/api/upload', {
    method: 'POST',
    body: form
  });

  const result = await res.json();

  if (result?.success && result.url) {
    return result.url;
  } else {
    console.error('❌ Upload failed response:', result);
    throw new Error(`❌ Error uploading to WirksiBox: ${result?.error || 'Unknown error'}`);
  }
};