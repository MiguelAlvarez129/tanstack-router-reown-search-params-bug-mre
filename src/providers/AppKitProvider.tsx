import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { useEffect, type ReactNode } from 'react'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://dashboard.reown.com

console.log(import.meta.env.VITE_APPKIT_PROJECT_ID)
const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
const networks = [mainnet, arbitrum]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  },
})

let appKitInitialized = false;

export default function AppKitProvider({ children }: { children: ReactNode }) {

  // useEffect(() => {
  //   if (!appKitInitialized) {
  //     createAppKit({
  //       adapters: [wagmiAdapter],
  //       networks,
  //       projectId,
  //       metadata,
  //       allWallets: "SHOW",
  //       features: {
  //         analytics: true,
  //       },
  //       themeVariables: {
  //         "--apkt-font-family": "Eurofighter",
  //         "--apkt-accent": "#bd33d9",
  //       },
  //     })
  //     appKitInitialized = true
  //   }
  // }, [])

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}