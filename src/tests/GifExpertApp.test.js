import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas GifExpertApp', () => {
  test('debe renderizar el componente correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar una lista de categorías', () => {
    const categories = ['Pokemon', 'Digimon'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
})
