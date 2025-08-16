import { useApiMessage } from '../hooks/useApiMessage';

export default function HomePage() {
  const apiMessage = useApiMessage();
  return (
    <div>
      <p>API Message: {apiMessage || 'Loading...'}</p>
    </div>
  );
}
