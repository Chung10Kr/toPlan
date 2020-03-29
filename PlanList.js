import React from 'react';
import {
   StyleSheet
   ,Text
   ,View
   ,TouchableOpacity
   ,Dimensions
   ,TextInput
   ,StatusBar
   ,Platform
   ,ScrollView
   ,AsyncStorage
   ,Button,
   TouchableWithoutFeedback
  } from 'react-native';
import { render } from 'react-dom';
import PropTypes from "prop-types";

const { height,width} = Dimensions.get("window");

export default class CheckPlan extends React.Component {
  constructor(props){
        super(props);
  }
  static propTypes = {
    resultObj: PropTypes.object.isRequired
  }

  render() { 
    const {resultObj} = this.props;
    console.log( resultObj)
    var result=''
    
    switch (resultObj.result){
      case '1': result = 'Perpect';break;
      case '2': result = 'Good';break;
      case '3': result = 'So so';break;
      case '4': result = 'Not Bad';break;
      case '5': result = 'Bad';break;
    };
    var today = (resultObj.createedAt).split('T')[0];
    
    

    return(

      <View style={styles.container}>
        <Text style={styles.title}>
          {today} , {result} 111
        </Text>
      </View>
      
    );

   }
}

const styles = StyleSheet.create({
  container:{
    width:width-50,
    borderBottomColor:"#bbb",
    borderBottomWidth:StyleSheet.hairlineWidth,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  }
  
});
