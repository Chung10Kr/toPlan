import React from 'react';
import {
   StyleSheet
   ,Text
   ,View
   ,TouchableOpacity
   ,Dimensions
   ,ImageBackground
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

export default class addResult extends React.Component {
  constructor(props){
        super(props);
  }
  static propTypes = {
    _addToResults: PropTypes.func.isRequired,
    _toPlans:PropTypes.string.isRequired
  };
  
  _clickBtn=(status)=>{
    
    const {_addToResults } = this.props;
    
    _addToResults(status);
    
  };
  _click1=(event)=>{
    event.stopPropagation;
    this._clickBtn("1");
  };
  _click2=(event)=>{
    event.stopPropagation;
    this._clickBtn("2");
  };
  _click3=(event)=>{
    event.stopPropagation;
    this._clickBtn("3");
  };
  _click4=(event)=>{
    event.stopPropagation;
    this._clickBtn("4");
  };
  _click5=(event)=>{
    event.stopPropagation;
    this._clickBtn("5");
  };

  render() { 
    const { _toPlans } = this.props;
    return(
      <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
          <Text style={styles.title}>{_toPlans}</Text>
          
          <TouchableOpacity 
            style={styles.btnView}
            onPress={this._click1}>
            
              <Text style={styles.actionText}> Perfect </Text>
              <ImageBackground source={require('./assets/status1.png')} style={{ width: "80%", height: "80%" }} resizeMode="cover" ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnView}
            onPress={this._click2}>
              <Text style={styles.actionText}> Good </Text>
              <ImageBackground source={require('./assets/status2.png')} style={{ width: "80%", height: "80%" }} resizeMode="cover" ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnView}
            onPress={this._click3}>
              <Text style={styles.actionText}> So So </Text>
              <ImageBackground source={require('./assets/status3.png')} style={{ width: "80%", height: "80%" }} resizeMode="cover" ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnView}
            onPress={this._click4}>
              <Text style={styles.actionText}> Not bad </Text>
              <ImageBackground source={require('./assets/status4.png')} style={{ width: "80%", height: "80%" }} resizeMode="cover" ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnView}
            onPress={this._click5}>
              <Text style={styles.actionText}> Bad </Text>
              <ImageBackground source={require('./assets/status5.png')} style={{ width: "80%", height: "80%" }} resizeMode="cover" ></ImageBackground>
          </TouchableOpacity>

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
  title:{
    flex:1,
    color:"white",
    fontSize:30,
    marginTop:50,
    fontWeight:"200",
    marginBottom:30,
    fontWeight : "600"
  },
  btnView:{
    flex:1,
  },
  actionText:{
    color:'white',
    fontSize : 30,
    fontWeight: "500",
  }
  
});
