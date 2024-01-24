import '@fontsource-variable/onest';
import { Form } from './components/Form';
import { Image } from './components/Image';
import { Final } from './components/Final';
import { useStoreForm } from './store/store';
function App() {
  const phase = useStoreForm(state => state.phase)

  return (
    <main className='w-full py-20'>
      {phase === 1 && <Form />}
      {phase === 2 && <Image />}
      {phase === 3 && <Final />}
    </main>
  )
}

export default App
