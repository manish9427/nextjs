import { Provider } from 'react-redux';
import { store } from '../redux/store';
import NavBar from '../components/NavBar/NavBar';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My Next.js App</h1>
      <NavBar />
      <div style={{ marginTop: '20px' }}>
        <Component {...pageProps} />
      </div>
    </div>
    </Provider>
  );
}