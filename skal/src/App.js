
import './App.css';
import LoginForm from './components/LoginForm';

function App() {

  const login = (credentials) => {
    console.log(credentials);
  }

  return (
    <div className='container'>
      <h3>Fruity Gang at it again</h3>
      <LoginForm onLogin={login} />
    </div>
  );
}

export default App;
