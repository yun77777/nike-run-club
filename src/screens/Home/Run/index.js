import { View, Text, Pressable, TextInput } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Avatar } from '@rneui/themed';
import { styles } from './styles';
import { validateInput } from '../../../../constants/Validation';


const RunScreen = () => {
  const [metricValue, setMetricValue] = useState('0.1')
  const [metricValueError, setMetricValueError] = useState(false)
  const [metricColor, setMetricColor] = useState('black')

  const changeMetricValueHandler = input => {
    if(!validateInput(input)) {
      console.log('wrong -> ', Math.random(1))
      setMetricValueError(true)
    } else {
      console.log('@ -> ', input)
      setMetricValueError(false)
    }
    setMetricValue(input)
  }

  useEffect(()=>{
    if(metricValueError)
      setMetricColor('red')
    else
      setMetricColor('black')
  }, [metricValueError])
  
  return (
    <View style={styles.mainContainer}>
      {/* Google Maps API/Image */}
      {/* Metric - Button to change the metric value */}
      <Pressable onPress={()=>console.warn('Open modal and change value')}>
        {/* Pressable Button */}
        <TextInput 
        style={{...styles.metricValue, color:metricColor}} 
        keyboardType="decimal-pad" 
        value={metricValue}
        onChangeText={changeMetricValueHandler}
        />
        {/* <View style={styles.metricUnderLine}></View> */}
        <Text style={styles.metricUnit}>Kilometer</Text>
      </Pressable>

      {/* Start Button */}
      <View style={styles.bottomContainer}>
      
          <Avatar
            size={120}
            rounded
            title="Start"
            activeOpacity={0.7}
            titleStyle={styles.avatarTitle}
            containerStyle={styles.avatarContainer}
          />
       

        <Pressable 
        onPress={()=>console.warn('Toggling')}
        style={styles.toggleContainer}>
          {/* Pressable Button */}
          <Text style={styles.toggleTitle}>Distance</Text>
      </Pressable>
      </View>
      {/* Toggle button to change the metric from distance or time */}
    </View>
  )
}

export default RunScreen