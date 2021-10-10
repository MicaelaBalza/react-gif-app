import { shallow } from 'enzyme';

import AddCategory from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {
  let wrapper;
  const setCategories = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories}/>)
  });

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value }});
  });

  test('no debe submittear el formulario si el campo está vacío', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  })
  
  test('debe llamar el setCategories y limpiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = "Digimon";
    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
})
