import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { TodoProvider } from '../contexts';
import 'bootswatch/dist/united/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
      }}
    >
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </SWRConfig>
  );
}

export default MyApp;
