import React from 'react';
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.footer2}>
            </View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')} >
                  <Image 
                    source={{uri:'https://lh3.googleusercontent.com/OY69IefFeaUtNlODv9rK2KLdGBLEk82MkaqCRzIwel4r1Sg0-e2eyVirMhts1IwG-sO653wZTUo5lSwOABXfoL5cg2XG1QjR11gNMEAEyfjGC3qIw8xpo-HAuk0SrQ77pbLb86f4lR84Q3nz45Mbh7NPuS-DJ-nq7AtYZHiHVl51CeAa_QW609I8UHSd9YSsswC9Jn3Balmg7F_i2iKUU1FzhdDupCtOUS7nzKQ2qjMgcodl1bHNteVTSN3PD6oAwv1syahaJGmBwbJ6BnkcmSt9OUabKvK-gXS4KmSlVUJC1iPauCl-A2u8Fz6-wTBIDMqzwjDJ3X3FjbxeRiiQkVVl0wpoo9QDIZXNvCJVF_DsvmX6HoGfpAW5bxtSdeWNoKGrGMC1q3f-xsyQ2YlnbNwajU_szsc_AynYl177iVN4IPo-ml_EEtzWgQEOdCYzNM_K0DiMDbVuoD98MZ3nDS7SXAQF93mfqO8JXYtvpiKzO4coe7ATTgxt0lWta7zpo0CyHpBBFxAP9JJi-8ACex1oid5jDgm7ooZLWMQPtFTcagTmQLzAtiyAzatkWu5f2N8KJbmzCuO14H3bZuvxgkcfQbMgUGS4gknJIWJzQBwWCLZ7ZLB9SmHzy-BPTjQiN9JBAG4Bopqi45gCBawnisqiNXxdB2AOQbQGntIKv7vnWypJsg031AMws6FT7xujycnDDzTN46LbDsCJqL8iAvPk=w139-h128-no?authuser=1'}}
                    style={styles.logo}
                    resizeMode='contain'
                  />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
            </View>
        </View>
    );
}

const imgUrl = 'https://www.freepnglogos.com/uploads/new-google-logo-transparent--14.png';

const {height} = Dimensions.get('screen');
const height_logo = height * 0.20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'row'
  },
  footer: {
    height: hp('40%'),
    backgroundColor: '#ffb404',
    marginRight: hp('20%'),
    borderTopRightRadius: hp('80%'),
  },
  footer2: {
    height: hp('20%'),
    backgroundColor: '#ffb404',
    marginLeft: hp('35%'),
    borderBottomLeftRadius: hp('35%')
  },
  logo: {
    marginTop: 50,
    width: height_logo,
    height: height_logo,
  },
});

export default Home;