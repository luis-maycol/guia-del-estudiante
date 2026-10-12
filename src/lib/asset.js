// Ruta de un archivo de /public respetando `base` de Vite (necesario en GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
