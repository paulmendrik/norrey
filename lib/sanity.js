import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'oxxdvy7e',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
  apiVersion: '2023-07-02'
})
