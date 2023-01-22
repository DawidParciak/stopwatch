import Container from './components/Container/Container';
import Counter from './components/Counter/Counter';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <Container>
      <Counter />
      <Navigation />
    </Container>
  );
}

export default App;
