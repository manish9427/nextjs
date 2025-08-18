import { useApiMessage } from '../hooks/use-api-message';

export default function HomePage() {
  const apiMessage = useApiMessage();
  return (
    <div>
      <p>API Message: {apiMessage || 'Loading...'}</p>
    </div>
  );
}
