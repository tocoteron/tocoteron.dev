import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'

import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  console.log('Hi, developer.')

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
