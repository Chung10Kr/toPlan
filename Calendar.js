import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import PropTypes from "prop-types";
import moment from "moment"; 

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  static propTypes = {
    _toResults: PropTypes.object.isRequired
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

 
 
  render() {
    const {_toResults} = this.props;
    
          
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <View style={[styles.sub_ , styles.lc_]}><Text>👈👈👈</Text></View>
            <View style={styles.main_}><Text style={styles.sun}>April 2020</Text></View>
            <View style={[styles.sub_ , styles.rc_]}><Text>👉👉👉</Text></View>
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
        <View style={styles.row}>
            <View style={styles.box}><Text style={styles.sun}>1</Text></View>
            <View style={styles.box}><Text>2</Text></View>
            <View style={styles.box}><Text>3</Text></View>
            <View style={styles.box}><Text>4</Text></View>
            <View style={styles.box}><Text>5</Text></View>
            <View style={styles.box}><Text>6</Text></View>
            <View style={styles.box}><Text style={styles.sat}>7</Text></View>
        </View>
        <View style={styles.row}>
            <View style={styles.box}><Text style={styles.sun}>8</Text></View>
            <View style={styles.box}><Text>9</Text></View>
            <View style={styles.box}><Text>10</Text></View>
            <View style={styles.box}><Text>11</Text></View>
            <View style={styles.box}><Text>12</Text></View>
            <View style={styles.box}><Text>13</Text></View>
            <View style={styles.box}><Text style={styles.sat}>14</Text></View>
        </View>
        <View style={styles.row}>
            <View style={styles.box}><Text style={styles.sun}>15</Text></View>
            <View style={styles.box}><Text>16</Text></View>
            <View style={styles.box}><Text>17</Text></View>
            <View style={styles.box}><Text>18</Text></View>
            <View style={styles.box}><Text>19</Text></View>
            <View style={styles.box}><Text>20</Text></View>
            <View style={styles.box}><Text style={styles.sat}>21</Text></View>
        </View>
        <View style={styles.row}>
            <View style={styles.box}><Text style={styles.sun}>22</Text></View>
            <View style={styles.box}><Text>23</Text></View>
            <View style={styles.box}><Text>24</Text></View>
            <View style={styles.box}><Text>25</Text></View>
            <View style={styles.box}><Text>26</Text></View>
            <View style={styles.box}><Text>27</Text></View>
            <View style={styles.box}><Text style={styles.sat}>28</Text></View>
        </View>
        <View style={styles.row}>
            <View style={styles.box}><Text style={styles.sun}>29</Text></View>
            <View style={styles.box}><Text>30</Text></View>
            <View style={styles.box}><Text>31</Text></View>
            <View style={styles.box}><Text></Text></View>
            <View style={styles.box}><Text></Text></View>
            <View style={styles.box}><Text></Text></View>
            <View style={styles.box}><Text style={styles.sat}></Text></View>
        </View>
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
  sun:{
    color:'red'
  },
  sat:{
    color:'blue'
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
  }
});