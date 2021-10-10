import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas GifGrid component', () => {
  // let wrapper;
  const cat = 'Pokemon'

  /* beforeEach(() => {
    wrapper = shallow(<GifGrid category={cat}/>)
  }) */

  test('Debe renderizar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={cat}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imágenes', () => {
    const gifs = [{
      id: 'abc',
      url: 'https://localhost/cualquiera.jpg',
      title: 'título'
    }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={cat}/>);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
})
