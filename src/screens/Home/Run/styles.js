import { StyleSheet } from "react-native"
import colors from "../../../../constants/colors"
export const styles = StyleSheet.create({
    mainContainer: {
        height:'100%',
        weight:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:24,
        paddingVertical:48,
      },
      toggleContainer: {
        padding:12,
        borderWidth:2,
        borderRadius:28,
        borderColor:'#ccc',
        marginTop:28
      },
      metricValue: {
        fontSize:48,
        fontWeight:'bold',
        borderBottomWidth:2,
        marginBottom:4,
        alignSelf:'center'
      },
      metricUnderLine: {borderBottomWidth:2, marginBottom:4},
      metricUnit:{alignSelf:'center', fontSize:16},
      bottomContainer:{justifyContent:'space-between', alignItems:'center'},
      avatarTitle: {fontSize:28, color:'#000', fontWeight:'bold'},
      avatarContainer: {backgroundColor:colors.startButton},
      toggleTitle: {fontSize:14,fontWeight:'bold'},

})