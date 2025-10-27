import React from 'react';

export default function ErrorPage({ is404, error }: { is404: boolean; error?: Error }) {
  if (is404) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>500 - Internal Server Error</h1>
      <p>Something went wrong on our end.</p>
      {error && <pre style={{ textAlign: 'left', marginTop: '20px' }}>{error.message}</pre>}
    </div>
  );
}
