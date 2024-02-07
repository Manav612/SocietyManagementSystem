import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {STYLES} from './styles';
import {COLOR_DARK, COLOR_LIGHT} from '../../constants/Color';
import {useSelector} from 'react-redux';
import {Screen_Height, Screen_Width} from '../../constants/Constants';

const Payment = ({navigation}) => {
  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;
  const styles = STYLES(theme);
  const PaymentData = [
    {
      Price: '$15.00',
      Date: '2 December, 06:30pm',
    },
    {
      Price: '$50.00',
      Date: '6 December, 06:30pm',
    },
    {
      Price: '$150.00',
      Date: '9 December, 06:30pm',
    },
    {
      Price: '$155.00',
      Date: '5 December, 06:30pm',
    },
    {
      Price: '$150.00',
      Date: '9 December, 06:30pm',
    },
    {
      Price: '$155.00',
      Date: '5 December, 06:30pm',
    },

    // Add more notice cards here
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={26} color={COLOR.BLACK} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={PaymentData}
        renderItem={({ item }) => {
          return (
            <View style={styles.paymentContainer}>
              <View style={styles.paymentHeader}>
                <Text style={styles.paymentHeaderText}>
                  Maintenance charge June 2022
                </Text>
              </View>
              <View style={styles.paymentDetails}>
                <View>
                  <Text style={styles.priceText}>{item.Price}</Text>
                  <Text style={styles.dateText}>{item.Date}</Text>
                </View>
                <TouchableOpacity style={styles.PayButton}>
                  <FontAwesome name="money" size={20} color={COLOR.BLACK} />
                  <Text style={styles.payNowText}>Pay now</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.newLabel}>
                <Text style={styles.newLabelText}>New</Text>
              </View>
              <View style={styles.paidLabel}>
                <Text style={styles.paidLabelText}>Paid</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Payment;
