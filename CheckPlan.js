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
import moment from 'moment'

import PlanList from "./PlanList";
import Calendar from "./Calendar";

const { height,width} = Dimensions.get("window");

export default class CheckPlan extends React.Component {
  constructor(props){
        super(props);
  }
  static propTypes = {
    _toPlans: PropTypes.string.isRequired,
    _toResults: PropTypes.object.isRequired
  }

  render() { 
    const {_toResults , _toPlans } = this.props;
    

    return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{_toPlans}</Text>
          </View>
          <View style={styles.body}>
            <Calendar
              style={styles.Calendar}
              _toResults={_toResults}
            />
          </View>
          <View style={styles.bottom}>
              
          </View>
          
      </View>
    );

   }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  header:{
    flex:2
  },
  body:{
    flex:6
  },
  bottom:{
    flex:1
  },
   title:{
    color:"white",
    fontSize:30,
    fontWeight : "600",
    marginTop:50,
    fontWeight:"200",
    marginBottom:30,
  },
  Calendar:{
    flex:10,
  },
  dumy:{
    flex:1
  }
  
});
