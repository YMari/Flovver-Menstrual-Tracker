import React from 'react'
import {View, StyleSheet} from 'react-native'
import * as COLORS from '../../styles/colors'
import ButtonNoBorder from './Shared/ButtonNoBorder'
import ButtonBorder from './Shared/ButtonBorder'

const BottomMenu = () => (
    <View style={styles.bottomMenu}>
        <ButtonNoBorder 
            onPress={()=>{console.log("Hello World")}}
            isGear={true}
            isFlovver={false}
        />
        <ButtonBorder 
            onPress={()=>{console.log("Hello World")}}
        />
        <ButtonNoBorder 
            onPress={()=>{console.log("Hello World")}}
            isGear={false}
            isFlovver={false}
        />
    </View>
)


const styles = StyleSheet.create({

    bottomMenu:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor:COLORS.PINK
    }

})

export default BottomMenu