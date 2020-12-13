import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyleButton from '../StyledButton/index'
import styles from './style'

const CarItem = () => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $16,999</Text>
        </View>
        <StyleButton  
        type="primary"
         content={'Custom Order'} 
         onPress={() => {
             console.warn('custom order was pressed ')
         }}/>
          <StyleButton  
        type="secondary"
         content={'Existing Inventory'} 
         onPress={() => {
             console.warn('Existing Inventory was pressed ')
         }}/>
      </View>
    )
}

export default CarItem
