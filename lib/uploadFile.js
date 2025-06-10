import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';
import fs from 'fs/promises'; // Para leer archivos del disco en Node.js
import path from 'path';     // Para manejar rutas de archivos

/**
 * Sube un buffer de archivo a wirksi-box.vercel.app y devuelve la URL pública.
 * @param {Buffer} buffer - Archivo en buffer
 * @param {string} filename - Nombre con extensión (ejemplo 'image.jpg')
 * @returns {Promise<string>} URL pública del archivo subido
 */
async function uploadToWirksiBox(buffer, filename) {
  // Convierte el Buffer a Blob
  // Esto es necesario para que el Buffer de Node.js sea compatible con Blob
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  const blob = new Blob([arrayBuffer]);

  // Prepara los datos del formulario con el archivo
  const form = new FormData();
  form.append('file', blob, filename);

  // El endpoint de subida de wirksi-box
  // Este es el URL al que tu bot enviará el archivo.
  // El HTML sugiere que wirksi-box.vercel.app/api/upload es un proxy
  // que maneja la interacción con la API de GitHub y la gestión del token.
  const uploadUrl = 'https://wirksi-box.vercel.app/api/upload';

  // Realiza la petición POST
  const res = await fetch(uploadUrl, {
    method: 'POST',
    body: form,
  });

  if (!res.ok) {
    let errorText = await res.text();
    try {
      const errorJson = JSON.parse(errorText);
      if (errorJson.message) {
        errorText = errorJson.message;
      }
    } catch (e) {
      // Si no es un error JSON, usa el texto plano
    }
    throw new Error(`Error en subida: ${res.status} ${res.statusText}. Detalles: ${errorText}`);
  }

  const json = await res.json();

  // El objeto JSON debería contener la URL, por ejemplo:
  // { success: true, url: 'https://raw.githubusercontent.com/...' }
  if (!json.success || !json.url) {
    throw new Error(`Respuesta inválida del servidor: ${JSON.stringify(json)}`);
  }

  return json.url;
}

// --- Ejemplo de uso en un entorno Node.js ---
(async () => {
  // 1. Cambia 'path/to/your/image.jpg' a la ruta real de tu archivo en tu computadora
  const filePath = './mi-imagen-de-ejemplo.jpg';
  const filename = path.basename(filePath); // Obtiene solo el nombre del archivo de la ruta

  try {
    // 2. Lee el archivo desde el disco en un Buffer
    const exampleBuffer = await fs.readFile(filePath);

    // 3. Llama a la función de subida
    const url = await uploadToWirksiBox(exampleBuffer, filename);
    console.log('🎉 ¡Archivo subido con éxito en:', url);
    // Aquí tu bot puede usar esta URL donde la necesite (ej. enviarla a un chat)
  } catch (e) {
    console.error('❌ Error al subir el archivo:', e.message);
  }
})();
