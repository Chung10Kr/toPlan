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
import moment ,  { Moment as MomentTypes }  from "moment"; 

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
        <Calendar
          _toResults={_toResults}
          _curPlans={_toPlans}
        />
      </View>
     );

   }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  }
  
});
