import React, {useState, useEffect} from "react"

import '../styles/globals.css'

import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import PuffLoader from "react-spinners/PuffLoader";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(1);

  useEffect(() => {
    // Set a timeout to update the message after 3 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(isLoading + 1);
    }, 2900);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    isLoading == 1 ?
      <div className="Loading-header">
        <PuffLoader
          size={'55vw'}
          color={"#fff"}
          loading={true}
        />
      </div>
    :
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
  )
}
