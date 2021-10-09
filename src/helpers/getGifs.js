const apiKey = 'xoPVTVp6dIO2n1HtzFQXcmJS1Ak3zksb';

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=${apiKey}`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  const gifs = data.map(img => ({ id: img.id, title: img.title, url: img.images.downsized_medium.url }))
  return gifs;
};
