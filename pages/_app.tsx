import  { AppProps } from 'next/app';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';
import { useEffect, useState } from 'react';
// import { SpacesUIProvider } from '@pushprotocol/uiweb';
 //import { useSpaceComponents } from './../components/Spaces/useSpaceComponent';
import { AccountContext } from '../contexts';
//import { Chat } from "@pushprotocol/uiweb";

const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Connect',
  projectId: 'connect',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export interface ISpacesComponentProps {
  children: React.ReactNode;
}

const SpacesComponentProvider = ({ children }: ISpacesComponentProps) => {
  // const { spaceUI } = useSpaceComponents();

  const customtheme = {
    statusColorError: 'red',
  };

  return (
    // <SpacesUIProvider spaceUI={spaceUI} theme={customtheme}>
      {children}
    // </SpacesUIProvider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  const [loadWagmi, setLoadWagmi] = useState(false);
  const [pgpPrivateKey, setPgpPrivateKey] = useState<string>('');

  useEffect(() => {
    setLoadWagmi(true);
  }, []);

  return (
    <>
      {/* hacky fix for wagmi ssr hydration errors */}
      {loadWagmi ? (
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider theme={darkTheme()} chains={chains}>
          <AccountContext.Provider value={{ pgpPrivateKey, setPgpPrivateKey }}>
              {/* <SpacesComponentProvider> */}
              <div className="bg-primary-black overflow-hidden">
              <Component {...pageProps} />
              </div>
                
              {/* </SpacesComponentProvider> */}
          </AccountContext.Provider>
          </RainbowKitProvider>
          {/* <Chat 
    account="0x6430C47973FA053fc8F055e7935EC6C2271D5174" //user address             
    supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address          
/> */}
        </WagmiConfig>
      ) : null}
    </>
  );
}

export default MyApp;
