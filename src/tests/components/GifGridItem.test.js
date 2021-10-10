import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas GifGridItem', () => {
  let wrapper;

  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';

  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />)
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un párrafo con el título', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  
  test('Debe tener una imágen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener la clase animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('animate__fadeIn')).toBe(true);
  });
})
