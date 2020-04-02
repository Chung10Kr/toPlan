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
    _toResults: PropTypes.object.isRequired
  }
  onDateChange(date) {
    this.setState({
      
    });
  }
  
  render() {

    function generate(today , _toResults){
        
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    
    let calendar = [];
    
      for (let week = startWeek; week <= endWeek; week++) {
        
        calendar.push(
          <View style={styles.row} key={week} >
            {
              Array(7).fill(0).map((n, i) => {
                let current = today.clone().week(week).startOf('week').add(n + i, 'day')
                let imgNm = null; 
                if( _toResults.hasOwnProperty( current.format('YYYY-MM-DD') )  ){
                  imgNm = 'icon'+_toResults[ current.format('YYYY-MM-DD') ].result ;
                };
                console.log(imgNm)
                 
                return (
                  <View style={styles.box} key={ week+'-'+i} >
                    <Text
                      style={[
                        (i === 0) && { color:'red' },
                        (i === 6) && { color:'blue' },
                      ]}
                    >
                      {current.format('D')}
                      {/* <ImageBackground
                        style={{ width: "100%", height: "100%" }}
                        source={require("./assets/icon1.png")}
                        resizeMode="cover"
                        >
                      </ImageBackground> */}
                    </Text>
                  </View>
                )
              })
            }
          </View>
        );
      };
    return calendar;
    };

    const {_toResults} = this.props;
    const {today} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity style={styles.sub_} onPress={()=> this.setState({today:today.clone().subtract(1, 'month')})} >
              <View style={styles.lc_}><Text>👈👈👈</Text></View>
            </TouchableOpacity>
            <View style={styles.main_}><Text style={styles.Title}>{today.format('MMMM YYYY')}</Text></View>
            <TouchableOpacity style={styles.sub_} onPress={()=> this.setState({today:today.clone().add(1, 'month')})} >
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
        {generate(today , _toResults )}
      </View>
    );
}

}
 
const styles = StyleSheet.create({
  container: {
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
    color:'gray',
  }
});