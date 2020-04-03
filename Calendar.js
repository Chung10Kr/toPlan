import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import PropTypes from "prop-types";
import moment ,  { Moment as MomentTypes }  from "moment"; 


export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today : moment()
    };
  }
  static propTypes = {
    _toResults: PropTypes.object.isRequired , 
    _curPlans: PropTypes.string.isRequired
  }
  _changeDate(current){
    this.setState({today:current})
  }
  _generate(today , _toResults){
        
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    
    let calendar = [];
    
      for (let week = startWeek; week <= endWeek; week++) {
        calendar.push(
          <View style={styles.row} key={week} >
            {
              Array(7).fill(0).map((n, i) => {
                let current = today.clone().week(week).startOf('week').add(n + i, 'day')
                let imgStatus = null; 
                if( _toResults.hasOwnProperty( current.format('YYYY-MM-DD') )  ){
                  imgStatus = _toResults[ current.format('YYYY-MM-DD') ].result ;
                };
                return (
                  <TouchableOpacity style={styles.box} onPress={()=> 
                    this._changeDate(current)
                  } >
                    <View key={ week+'-'+i} >
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

    const {_toResults , _curPlans} = this.props;
    const {today} = this.state;
    
    let _toPlans = '' ; 
    
    if( _toResults.hasOwnProperty( today.clone().format('YYYY-MM-DD')  )){
      _toPlans = _toResults[ today.clone().format('YYYY-MM-DD') ].toPlans;
    };
    if( _toPlans === '' ){
      _toPlans = _curPlans;
    };
    
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{_toPlans}</Text>
          </View>
          <View style={styles.body}>
              
            <View style={styles.calendar}>
              <View style={styles.row}>
                  <TouchableOpacity style={styles.sub_} onPress={()=> this.setState({
                      today:today.clone().subtract(1, 'month')
                    })} >
                    <View style={styles.lc_}><Text>👈👈👈</Text></View>
                  </TouchableOpacity>
                  <View style={styles.main_}><Text style={styles.Title}>{today.format('MMMM YYYY')}</Text></View>
                  <TouchableOpacity style={styles.sub_} onPress={()=> this.setState({
                      today:today.clone().add(1, 'month')
                    })} >
                    <View style={styles.rc_}><Text>👉👉👉</Text></View>  
                  </TouchableOpacity>
              </View>
              <View style={styles.row}>
                  <View style={styles.box}><Text style={styles.sun}>일</Text></View>
                  <View style={styles.box}><Text>월</Text></View>
                  <View style={styles.box}><Text>화</Text></View>
                  <View style={styles.box}><Text>수</Text></View>
                  <View style={styles.box}><Text>목</Text></View>
                  <View style={styles.box}><Text>금</Text></View>
                  <View style={styles.box}><Text style={styles.sat}>토</Text></View>
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
    fontWeight:"200",
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
  Title:{
    color:'gray'
  }
});