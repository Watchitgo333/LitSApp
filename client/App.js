import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';
import {AppNavigator} from './src/navigation/Navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {default as myTheme} from './theme/my-theme.json';
import {ThemeContext} from './theme/context';
import { useState } from 'react';

export default function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }


  return (
    <>
      <IconRegistry icons={EvaIconsPack}/>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={{...eva[theme],...myTheme}}>
          <AppNavigator/>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
}

