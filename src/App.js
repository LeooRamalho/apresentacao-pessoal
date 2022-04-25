import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {NormalizeStyles} from './shared/NormalizeStyles';

import {ListaPerfis} from './views/ListaPerfis';
import {HobbiesPerfil} from './views/HobbiesPerfil';
import {DetalhePerfil} from './views/DetalhePerfil';
import {FormacaoPerfil} from './views/FormacaoPerfil';
import {ExperienciaPerfil} from './views/ExperienciaPerfil';
import {ComponentsDemo} from './views/ComponentsDemo';
import {NotFound} from './views/NotFound';

export const App = () => (
  <>
    <NormalizeStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaPerfis />} exact></Route>
        <Route path="/hobbies/:id" element={<HobbiesPerfil />} exact></Route>
        <Route path="/detalhes/:id" element={<DetalhePerfil />} exact></Route>
        <Route path="/formacao/:id" element={<FormacaoPerfil />} exact></Route>
        <Route path='/demo' element={<ComponentsDemo />} exact></Route>
        <Route
          path="/experiencia/:id"
          element={<ExperienciaPerfil />}
          exact
        ></Route>
        <Route path="*" element={<NotFound />} exact></Route>

      </Routes>
    </BrowserRouter>
  </>
);
