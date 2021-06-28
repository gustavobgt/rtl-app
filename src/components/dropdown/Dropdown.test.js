import { Dropdown } from './Dropdown';

import { screen, render, userEvent } from '../../tests';

const title = 'Selecione uma opção';
const options = ['Opção 1', 'Opção 2', 'Opção 3'];

describe('Dropdown', () => {
  // 1. Dropdown comece fechado
  it('should start closed', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    options.forEach((option) => {
      expect(
        screen.queryByRole('menuitem', { name: option })
      ).not.toBeInTheDocument();
    });
  });

  // Quero que o dropdown mostre as opções de menu quando ele for clicado
  it('should show options when open', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    options.forEach((option) => {
      expect(
        screen.queryByRole('menuitem', { name: option })
      ).not.toBeInTheDocument();
    });

    userEvent.click(screen.getByRole('button', { name: title }));

    options.forEach((option) => {
      expect(
        screen.getByRole('menuitem', { name: option })
      ).toBeInTheDocument();
    });
  });

  // 3. Quando selecionar um item de menu, fechar o dropdown e indicar qual opção foi selecionada
  it('should close dropdown and indicates what option was selected when a menuitem is clicked', () => {
    const onSelect = jest.fn();
    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    // Preciso abrir o dropdown e checar se ele realmente está aberto
    userEvent.click(screen.getByRole('button', { name: title }));

    options.forEach((option) => {
      expect(
        screen.getByRole('menuitem', { name: option })
      ).toBeInTheDocument();
    });

    // Preciso clicar em uma opção garantir que a função foi chamada e que o menu fechou
    const option0 = screen.getByRole('menuitem', { name: options[0] });
    userEvent.click(option0);
    expect(onSelect).toHaveBeenCalledWith(options[0]);
    options.forEach((option) => {
      expect(
        screen.queryByRole('menuitem', { name: option })
      ).not.toBeInTheDocument();
    });
  });
});
