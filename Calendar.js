import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Dimensions
} from 'react-native';
import uuidv1 from "uuid/v1";
import PropTypes from "prop-types";
import moment ,  { Moment as MomentTypes }  from "moment"; 
import ConfirmationAlert from './ConfirmationAlert';

const { height,width} = Dimensions.get("window");

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today : moment(),
      alertVisible: false,
      planUpd : false,
      plan:''
    };
  }
  static propTypes = {
    _toResults: PropTypes.object.isRequired , 
    _curPlans: PropTypes.string.isRequired,
    _savePlan: PropTypes.func.isRequired
  }

  componentDidMount=()=>{
    
    const { _curPlans , _toResults } = this.props;

    const td = moment();
    let alramYn = false;
    if( !_toResults.hasOwnProperty( td.clone().format('YYYY-MM-DD')  )){
      alramYn=true;
    };
    
    this.setState({
      plan : _curPlans ,
      alertVisible : alramYn
    });
  };
  toggleAlert=() => {
    this.setState({
      alertVisible : false
    });
  };
  _controllInput=text=>{
    this.setState({
      plan:text
    })
  }
  _finishEditing=(event)=>{
    event.stopPropagation;
    const {_savePlan } = this.props;
    const {plan} = this.state;
    _savePlan(plan);
    this.setState({
      planUpd:false,
    })
  }
  _changeDate(current){
    const {_toResults , _curPlans } = this.props;
    
    let _toPlans = '';

    //날짜 변경시
    if( _toResults.hasOwnProperty( current.clone().format('YYYY-MM-DD')  )){
      _toPlans = _toResults[ current.clone().format('YYYY-MM-DD') ].toPlans;
    }else{
      _toPlans = _curPlans;
    }
    this.setState({
      today:current,
      plan:_toPlans
    })
  }
  _generate(today , _toResults){
        
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    
    let calendar = [];
    
      for (let week = startWeek; week <= endWeek; week++) {
        
        calendar.push(
          <View style={styles.row} key={uuidv1()} >
            {
              Array(7).fill(0).map((n, i) => {
                let current = today.clone().week(week).startOf('week').add(n + i, 'day')
                let imgStatus = null; 
                if( _toResults.hasOwnProperty( current.format('YYYY-MM-DD') )  ){
                  imgStatus = _toResults[ current.format('YYYY-MM-DD') ].result ;
                };
                
                return (
                  <TouchableOpacity key={uuidv1()} style={styles.box} onPress={()=> 
                    this._changeDate(current)
                  } >
                    <View key={uuidv1()} >
                      {this._getCal( i , current , imgStatus)}
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        );
      };
      return calendar;
    };
    _getCal( i , current , imgStatus ){
      let iconPath = './assets/'+imgStatus+'.png';
      if(imgStatus != null){
        var icon ; 
        if( imgStatus == 1){
          icon = require('./assets/status1.png');
        }else if( imgStatus == 2){
          icon = require('./assets/status2.png');
        }else if( imgStatus == 3){
          icon = require('./assets/status3.png');
        }else if( imgStatus == 4){
          icon = require('./assets/status4.png');
        }else if( imgStatus == 5){
          icon = require('./assets/status5.png');
        };
               
        return(
          <ImageBackground
            style={{ width: "80%", height: "80%" }}
            source={icon}
            resizeMode="cover"
            >
          </ImageBackground>
        );
      }else{
        return (
          <Text
            style={[
              (i === 0) && { color:'red' },
              (i === 6) && { color:'blue' },
            ]}
            >
            {current.format('D')}
          </Text>
        );
      };
    };
     
    
  render() {

    const {_toResults  } = this.props;
    const {today , planUpd ,  plan , alertVisible  } = this.state;
    
    return (

      

      <View style={styles.container}>
          <ConfirmationAlert
          title="오늘의 목표 결과는?"
          message="9시 이후에 체크해주세요"
          visible={alertVisible}
          buttons={[
            {
              text: '확인',
              onPress: this.toggleAlert
            }
          ]}
        />

          <View style={styles.header}>
                  {!planUpd ? (
                    <TouchableOpacity onPress={()=> this.setState({ planUpd:true })} >
                        <Text style={styles.title}>{plan}</Text> 
                    </TouchableOpacity>
                  ):(
                    <View style={styles.editBox}>
                      <TextInput 
                        style={[
                            styles.editTitle,
                            styles.input
                          ]}   
                        value={plan}
                        multiline={true}
                        onChangeText={this._controllInput}
                        returnKeyType={"done"}
                        underlineColorAndroid={"transparent"}
                      />
                      <TouchableOpacity 
                        onPressOut={this._finishEditing}
                        style={styles.actionContainer}
                      >
                      <Text style={styles.actionBtn}>SAVE</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                    
            
            
          </View>
          <View style={styles.body}>
              
            <View style={styles.calendar}>
              <View style={styles.row}>
                  <TouchableOpacity style={styles.sub_} onPress={()=> this.setState({
                      today:today.clone().subtract(1, 'month')
                    })} >
                    <View style={styles.lc_}><Text>👈👈👈</Text></View>
                  </TouchableOpacity>
                  <View style={styles.main_}><Text style={styles.calTitle}>{today.format('MMMM YYYY')}</Text></View>
                  <TouchableOpacity style={styles.sub_} onPress={()=> this.setState({
                      today:today.clone().add(1, 'month')
                    })} >
                    <View style={styles.rc_}><Text>👉👉👉</Text></View>  
                  </TouchableOpacity>
              </View>
              <View style={styles.row}>
                  <View style={styles.box}><Text style={styles.sun}>Sun</Text></View>
                  <View style={styles.box}><Text>MON</Text></View>
                  <View style={styles.box}><Text>THU</Text></View>
                  <View style={styles.box}><Text>WED</Text></View>
                  <View style={styles.box}><Text>THU</Text></View>
                  <View style={styles.box}><Text>FRI</Text></View>
                  <View style={styles.box}><Text style={styles.sat}>SAT</Text></View>
              </View>
              {this._generate(today , _toResults )}
            </View>
          </View>
          <View style={styles.bottom}>
              
          </View>
          
      </View>
    );
};

};
 
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
    marginBottom:30,
  },
  dumy:{
    flex:1
  },

  calendar: {
    marginRight:5,
    marginLeft:5,
    paddingTop:30,
    paddingRight:5,
    paddingLeft:5,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius : 20,
    flexDirection:'column'
  },
  row:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  box:{
    width:'14%',
    alignItems:'center'
  },
  main_:{
    width:'40%',
    alignItems:'center'
  },
  sub_:{
    width:'30%'
  },
  lc_:{
    alignItems:'flex-start'
  },
  rc_:{
    alignItems:'flex-end'
  },
  sun:{
    color:'red'
  },
  sat:{
     color:'blue'
  },
  calTitle:{
    color:'gray'
  },
  completedText:{
    color: "#bbb",
    textDecorationLine:"line-through"
  },
  unCompletedText:{
    color: "#353839"
  },
  input:{
    width:width/2,
    marginVertical:15,
    paddingBottom:5
  },
  text:{
    fontWeight:"600",
    fontSize:20,
    marginVertical:20
  },
  editBox:{
    flexDirection:"row",
    alignItems:"center",
    width:width/2,
    justifyContent:'center'
  },
  editTitle:{
    color:"white",
    fontWeight : "600",
    marginTop:50,
    marginBottom:30,   
    fontSize:20,
  },
  actionContainer:{
    marginTop:50,
    marginBottom:30,   
  }
  
});