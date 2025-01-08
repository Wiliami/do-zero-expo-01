import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withGalio, GalioProvider, ThemeType } from 'galio-framework'

const customTheme = {
  SIZES: { BASE: 18, },
  // this will overwrite the Galio SIZES BASE value 16
  COLORS: { PRIMARY: 'red', FACEBOOK: '#3B5998' } 
  // this will overwrite the Galio COLORS PRIMARY color #B23AFC
};

interface IndexProps {
  styles: {
    container: {
      flex: number,
      backgroundColor: string
    }
  }  
}


function Index({ styles }: IndexProps) {
    return ( 
      <GalioProvider theme={customTheme}>
        <View style={styles.container}>
          <Text>Olá, mundo</Text>
        </View>
      </GalioProvider> 
    );
}

const createSyles = (theme: ThemeType)  => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS?.FACEBOOK || 'white'
  }
});

// const styles = createSyles(customTheme) 

export default withGalio(Index, createSyles)