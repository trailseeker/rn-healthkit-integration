/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppleHealthKit from 'rn-apple-healthkit';
const PERMS = AppleHealthKit.Constants.Permissions;

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Weight: false,
      Height: false,
      DateOfBirth: false,
    };
  }

  componentDidMount() {
    const healthKitOptions = {
        permissions: {
            read:  [
                PERMS.DateOfBirth,
                PERMS.Weight,
                PERMS.StepCount
            ]
        }
    };

    AppleHealthKit.initHealthKit(healthKitOptions, (err, results) => {
      if (err) {
        console.log("error initializing Healthkit: ", err);
        return;
      }

     

      let options = {
        startDate: (new Date(2014,1,1)).toISOString() ,
        endDate:   (new Date()).toISOString() // optional; default now
    };
 

    const processStart  = new Date();
    AppleHealthKit.getDailyStepCountSamples(options, (err, results) => {

      var oResult = [
        {
          "endDate": "2021-02-20T08:00:00.000+0800",
          "startDate": "2021-02-20T07:00:00.000+0800",
          "value": 2
        },
        {
          "endDate": "2021-02-20T01:00:00.000+0800",
          "startDate": "2021-02-20T00:00:00.000+0800",
          "value": 16
        },
        {
          "endDate": "2021-02-20T00:00:00.000+0800",
          "startDate": "2021-02-19T23:00:00.000+0800",
          "value": 30
        },
        {
          "endDate": "2021-02-19T20:00:00.000+0800",
          "startDate": "2021-02-19T19:00:00.000+0800",
          "value": 14
        },
        {
          "endDate": "2021-02-19T19:00:00.000+0800",
          "startDate": "2021-02-19T18:00:00.000+0800",
          "value": 17
        },
        {
          "endDate": "2021-02-19T15:00:00.000+0800",
          "startDate": "2021-02-19T14:00:00.000+0800",
          "value": 17
        },
        {
          "endDate": "2021-02-19T14:00:00.000+0800",
          "startDate": "2021-02-19T13:00:00.000+0800",
          "value": 13.472364648296145
        },
        {
          "endDate": "2021-02-19T13:00:00.000+0800",
          "startDate": "2021-02-19T12:00:00.000+0800",
          "value": 9.527635351703855
        },
        {
          "endDate": "2021-02-19T11:00:00.000+0800",
          "startDate": "2021-02-19T10:00:00.000+0800",
          "value": 60
        },
        {
          "endDate": "2021-02-19T08:00:00.000+0800",
          "startDate": "2021-02-19T07:00:00.000+0800",
          "value": 838.3491157825172
        },
        {
          "endDate": "2021-02-19T07:00:00.000+0800",
          "startDate": "2021-02-19T06:00:00.000+0800",
          "value": 10.650884217482844
        },
        {
          "endDate": "2021-02-19T01:00:00.000+0800",
          "startDate": "2021-02-19T00:00:00.000+0800",
          "value": 9
        },
        {
          "endDate": "2021-02-18T23:00:00.000+0800",
          "startDate": "2021-02-18T22:00:00.000+0800",
          "value": 16
        },
        {
          "endDate": "2021-02-18T20:00:00.000+0800",
          "startDate": "2021-02-18T19:00:00.000+0800",
          "value": 16.078466332707315
        },
        {
          "endDate": "2021-02-18T19:00:00.000+0800",
          "startDate": "2021-02-18T18:00:00.000+0800",
          "value": 1.9215336672926837
        },
        {
          "endDate": "2021-02-18T17:00:00.000+0800",
          "startDate": "2021-02-18T16:00:00.000+0800",
          "value": 11
        },
        {
          "endDate": "2021-02-18T09:00:00.000+0800",
          "startDate": "2021-02-18T08:00:00.000+0800",
          "value": 25
        },
        {
          "endDate": "2021-02-17T23:00:00.000+0800",
          "startDate": "2021-02-17T22:00:00.000+0800",
          "value": 31
        },
        {
          "endDate": "2021-02-17T22:00:00.000+0800",
          "startDate": "2021-02-17T21:00:00.000+0800",
          "value": 33
        },
        {
          "endDate": "2021-02-17T08:00:00.000+0800",
          "startDate": "2021-02-17T07:00:00.000+0800",
          "value": 26
        },
        {
          "endDate": "2021-02-17T01:00:00.000+0800",
          "startDate": "2021-02-17T00:00:00.000+0800",
          "value": 2
        },
        {
          "endDate": "2021-02-16T22:00:00.000+0800",
          "startDate": "2021-02-16T21:00:00.000+0800",
          "value": 809.288267793177
        },
        {
          "endDate": "2021-02-16T21:00:00.000+0800",
          "startDate": "2021-02-16T20:00:00.000+0800",
          "value": 429.7117322068229
        },
        {
          "endDate": "2021-02-16T20:00:00.000+0800",
          "startDate": "2021-02-16T19:00:00.000+0800",
          "value": 1368
        },
        {
          "endDate": "2021-02-16T11:00:00.000+0800",
          "startDate": "2021-02-16T10:00:00.000+0800",
          "value": 8.873672282885185
        },
        {
          "endDate": "2021-02-16T10:00:00.000+0800",
          "startDate": "2021-02-16T09:00:00.000+0800",
          "value": 30.126327717114815
        },
        {
          "endDate": "2021-02-16T09:00:00.000+0800",
          "startDate": "2021-02-16T08:00:00.000+0800",
          "value": 230.69706319202714
        },
        {
          "endDate": "2021-02-16T08:00:00.000+0800",
          "startDate": "2021-02-16T07:00:00.000+0800",
          "value": 2715.302936807973
        },
        {
          "endDate": "2021-02-15T20:00:00.000+0800",
          "startDate": "2021-02-15T19:00:00.000+0800",
          "value": 45
        },
        {
          "endDate": "2021-02-15T18:00:00.000+0800",
          "startDate": "2021-02-15T17:00:00.000+0800",
          "value": 12
        },
        {
          "endDate": "2021-02-15T12:00:00.000+0800",
          "startDate": "2021-02-15T11:00:00.000+0800",
          "value": 15
        },
        {
          "endDate": "2021-02-15T08:00:00.000+0800",
          "startDate": "2021-02-15T07:00:00.000+0800",
          "value": 25
        },
        {
          "endDate": "2021-02-14T22:00:00.000+0800",
          "startDate": "2021-02-14T21:00:00.000+0800",
          "value": 40
        },
        {
          "endDate": "2021-02-14T21:00:00.000+0800",
          "startDate": "2021-02-14T20:00:00.000+0800",
          "value": 9
        },
        {
          "endDate": "2021-02-14T19:00:00.000+0800",
          "startDate": "2021-02-14T18:00:00.000+0800",
          "value": 25
        },
        {
          "endDate": "2021-02-14T18:00:00.000+0800",
          "startDate": "2021-02-14T17:00:00.000+0800",
          "value": 22
        },
        {
          "endDate": "2021-02-14T13:00:00.000+0800",
          "startDate": "2021-02-14T12:00:00.000+0800",
          "value": 38
        },
        {
          "endDate": "2021-02-14T12:00:00.000+0800",
          "startDate": "2021-02-14T11:00:00.000+0800",
          "value": 9
        },
        {
          "endDate": "2021-02-14T10:00:00.000+0800",
          "startDate": "2021-02-14T09:00:00.000+0800",
          "value": 12
        },
        {
          "endDate": "2021-02-14T09:00:00.000+0800",
          "startDate": "2021-02-14T08:00:00.000+0800",
          "value": 1663.6712531725711
        },
        {
          "endDate": "2021-02-14T08:00:00.000+0800",
          "startDate": "2021-02-14T07:00:00.000+0800",
          "value": 239.328746827429
        },
        {
          "endDate": "2021-02-13T23:00:00.000+0800",
          "startDate": "2021-02-13T22:00:00.000+0800",
          "value": 34
        },
        {
          "endDate": "2021-02-13T20:00:00.000+0800",
          "startDate": "2021-02-13T19:00:00.000+0800",
          "value": 11
        },
        {
          "endDate": "2021-02-13T18:00:00.000+0800",
          "startDate": "2021-02-13T17:00:00.000+0800",
          "value": 32
        },
        {
          "endDate": "2021-02-13T15:00:00.000+0800",
          "startDate": "2021-02-13T14:00:00.000+0800",
          "value": 20
        },
        {
          "endDate": "2021-02-13T13:00:00.000+0800",
          "startDate": "2021-02-13T12:00:00.000+0800",
          "value": 18
        },
        {
          "endDate": "2021-02-13T12:00:00.000+0800",
          "startDate": "2021-02-13T11:00:00.000+0800",
          "value": 420.6056172419659
        },
        {
          "endDate": "2021-02-13T11:00:00.000+0800",
          "startDate": "2021-02-13T10:00:00.000+0800",
          "value": 1135.3943827580342
        },
        {
          "endDate": "2021-02-13T10:00:00.000+0800",
          "startDate": "2021-02-13T09:00:00.000+0800",
          "value": 717.592654710928
        },
        {
          "endDate": "2021-02-13T09:00:00.000+0800",
          "startDate": "2021-02-13T08:00:00.000+0800",
          "value": 509.4073452890721
        },
        {
          "endDate": "2021-02-13T02:00:00.000+0800",
          "startDate": "2021-02-13T01:00:00.000+0800",
          "value": 26
        }
      ]

      oResult =  results;
      let DateSum = {};
      oResult.forEach(async function(item) {

        let keyDate = item.endDate.split("T")[0];
        if ( !DateSum[keyDate]){
          DateSum[keyDate] = parseInt(item.value);
        }else{
          DateSum[keyDate] = DateSum[keyDate] + parseInt(item.value);
        }
      })



      // this will assume the threshold step count per hour in a day.. 
      const steps_per_hour = 1000;


      let TotalValidCount = 0;

      Object.entries(DateSum).forEach(([key, value]) => {
        if (value >= steps_per_hour ){
          TotalValidCount = TotalValidCount + value;
        }
      });

      const processEnd  = new Date();
      const processTime = processEnd.getTime() - processStart.getTime();

      const total_time_spent = (TotalValidCount / steps_per_hour);
      console.log("Total Valid Steps", TotalValidCount);
      console.log("Time spent walking :  " + total_time_spent + " hours");
      console.log("Total Number of record processed : " + oResult.length);
      console.log("Total Time  to  process : " + processTime);
     
  });
 



    });

  }

  render() {
    const {
      DateOfBirth,
      Weight
    } = this.state;

    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>APPLE HEALTH KIT INTEGRATION</Text>
   
              </View>
     
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFF',
  },
  body: {
    backgroundColor: '#FFF',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#555',
  },
  sectionDescriptionError: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#A00000'
  },
});

export default App;
