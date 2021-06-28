/**
 * 1. Dropdown comece fechado
 * 2. Quero que o dropdown mostre as opções de menu quando ele for clicado
 * 3. Quando selecionar um item de menu, fechar o dropdown e indicar qual opção foi selecionada
 */

import { useState } from 'react';

export const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen((prevState) => !prevState)}>
        {title}
      </button>

      {isOpen && (
        <ul role="menu">
          {options?.map((option) => (
            <li
              key={option}
              role="menuitem"
              onClick={() => handleSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
