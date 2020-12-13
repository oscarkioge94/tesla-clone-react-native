import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyleButton from '../StyledButton/index'
import styles from './style'

const CarItem = ({name, tagLine, image}) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={image}
        style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{tagLine}</Text>
        </View>
        <View style={styles.buttonsContainer}>
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
        
      </View>
    )
}

export default CarItem
