import { useState } from 'react';
import { Dropdown } from './components/dropdown/Dropdown';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      {selectedOption && <div>Opção selecionada: {selectedOption}</div>}
      <Dropdown
        title="Selecione uma opção"
        options={['Opção 1', 'Opção 2', 'Opção 3']}
        onSelect={setSelectedOption}
      />
    </div>
  );
}

export default App;
