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

export default class addPurpose extends React.Component {
  constructor(props){
        super(props);
  }
  static propTypes = {
        _savePlan: PropTypes.func.isRequired
   };
  state={
    newPlan:""
  };

  
  _controllInput=text=>{
    this.setState({
      newPlan:text
    });
  };
  _clickBtn=(event)=>{
    event.stopPropagation;
    const {_savePlan } = this.props;
    const {newPlan} = this.state;
    _savePlan(newPlan);
  };

  render() { 

    return(
      <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
          <Text style={styles.title}>Daily Check Plan</Text>
          <View style={styles.card}>
            <TextInput 
              style={styles.input}
              onChangeText={this._controllInput}
            />
          </View>
          <TouchableOpacity 
            style={styles.btnView}
            onPress={this._clickBtn}>
              <Text style={styles.actionText}> Cheer up! </Text>
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
  card:{
    flex:5,
    
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50,50,50)",
        shadowOpacity:0.5,
        shadowRadius:5,
        shadowOffset:{
          height:-1,
          width:0
        }
      },
      android:{
        elevation:3
      }
    })
  },
  input:{
    width: width - 25,
    borderRadius:10,
    elevation:3,
    backgroundColor: 'white',
    padding:20,
    borderBottomColor:"#bbb",
    borderBottomWidth:1,
    fontSize:25
  },
  btnView:{
    flex:5,
  },
  actionText:{
    color:'white',
    fontSize : 30,
    fontWeight: "500",
  }
  
});
