import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './components/context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const quaryClient = new QueryClient();
  return (
    <QueryClientProvider client={quaryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
