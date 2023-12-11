import TextInput from './components/TextInput';
import CharacterCount from './components/CharacterCount';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <h2>Text Counter</h2>
      <TextInput />
      <CharacterCount />
    </RecoilRoot>
  )
}

export default App;