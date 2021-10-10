import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs', () => {
  test('debe traer 9 elementos', async() => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(9);
  })

  test('debe traer un arreglo vacío si no se envía la categoría', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
})
