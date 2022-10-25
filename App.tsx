import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavBar from '../screens/Navbar';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { ctx } from './context/context';
import { StateInterface } from './types';
import React, { useState } from 'react';
import Navbar from './screens/navbar';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

const [state, setState] = useState<StateInterface>({products:[]})

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ctx.Provider value={state}>
      <SafeAreaProvider>
      
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <Navbar />
      </SafeAreaProvider>
      </ctx.Provider>
    );
  }
}
