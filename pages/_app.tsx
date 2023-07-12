import { useRouter } from 'next/router'
import Head from 'next/head'
import '../styles/app.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Transition } from '@/components/transition'
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const pageKey = router.asPath
  
  return (
  <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0,0)}>
  <Transition>``
  <Head>
  <title>Andrew Norrey</title>
  <meta name="description" content="Andrew Norrey Paintings" />
  <link rel="icon" href="/favicon.ico" />
  </Head>
  <ChakraProvider>
  <Component key={pageKey} {...pageProps} />
  </ChakraProvider>
  </Transition>
  </AnimatePresence>
)
}
