import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, theme, withGalio, GalioProvider } from 'galio-framework'

type Theme = {
  COLORS: {
    FACEBOOK: string
  }
}

function Index() {

  const customTheme = {
    SIZES: { BASE: 18, },
    // this will overwrite the Galio SIZES BASE value 16
    COLORS: { PRIMARY: 'red', } 
    // this will overwrite the Galio COLORS PRIMARY color #B23AFC
  };


    return ( 
    <GalioProvider theme={customTheme}>
      <Text>Olá, mundo</Text>
    </GalioProvider> )
  
}
const styles = (theme: Theme) => StyleSheet.create<{ container: { flex: number; backgroundColor: string }}>({
  container: {
    flex: 1,
    backgroundColor:  theme.COLORS.FACEBOOK
  }
});

export default withGalio(Index, styles)