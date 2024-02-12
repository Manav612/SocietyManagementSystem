import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, Platform, Image } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { COLOR_DARK, COLOR_LIGHT } from '../../constants/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import { CheckPermission } from '../../components/CheckPermission';
import { PERMISSIONS } from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker'

const ProfileScreen = ({ navigation }) => {
  const userName = useSelector(state => state.dataReducer);
  const theme = useSelector(state => state.ThemeReducer);
  const COLOR = theme == 1 ? COLOR_DARK : COLOR_LIGHT;

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [familyMembers, setFamilyMembers] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [occupation, setOccupation] = useState('');
  const [languagePreference, setLanguagePreference] = useState('');
  const [castReligion, setCastReligion] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const handleSubmit = async () => {
    const granted = await CheckPermission(
      Platform.OS == 'ios' ?
        PERMISSIONS.IOS.PHOTO_LIBRARY :
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
    );
    setImageModalVisible(!imageModalVisible)
  };
  
  const onUploadPress = async () => {
    const granted = await CheckPermission(
      Platform.OS == 'ios' ?
        PERMISSIONS.IOS.PHOTO_LIBRARY :
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
    );

    if (granted == true || Platform.OS == 'ios') {
      ImagePicker.openPicker({
        width: 1080,
        height: 1080,
        cropping: true,
        mediaType: 'photo',
        cropperToolbarTitle: 'Crop Image',
        hideBottomControls: true,
        enableRotationGesture: true,
        showCropGuidelines: false,
        compressImageQuality: 0.9,
      }).then(image => {
        setImageModalVisible(false);
        setImageUri(image.path);
      }).catch((e) => {
        setImageModalVisible(false);
        console.log(e);
      })
    }
  }

  const onCapturePress = async () => {
    setImageModalVisible(false);
    const granted = await CheckPermission(
      Platform.OS == 'ios' ?
        PERMISSIONS.IOS.CAMERA :
        PERMISSIONS.ANDROID.CAMERA
    );
    if (granted == true || Platform.OS == 'ios') {
      ImagePicker.openCamera({
        width: 1080,
        height: 1080,
        cropping: true,
        mediaType: 'photo',
        cropperToolbarTitle: 'Crop Image',
        hideBottomControls: true,
        enableRotationGesture: true,
        showCropGuidelines: false,
        compressImageQuality: 0.9,
      }).then(image => {
        setImageModalVisible(false);
        setImageUri(image.path);
      }).catch((e) => {
        setImageModalVisible(false);
        console.log(e);
      })
    }
  }

  return (
    <ScrollView>
      <View style={{ paddingTop: 20, paddingHorizontal: 15, flexDirection: 'row', gap: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={26} color={COLOR.BLACK} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.BLACK }}>Profile</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 15 }}>
        <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: COLOR.DARKBLUE,justifyContent: 'center', alignItems: 'center' ,elevation:3,shadowColor:'#000'}}>
        
  <Image source={{ uri: imageUri }} style={{ height: 100, width: 100, borderRadius: 50 }} />

    <TouchableOpacity onPress={handleSubmit} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: COLOR.LIGHTGRAY, borderRadius: 25, height: 30, width: 30,position:'absolute',right:1,top:1 }}>
      <AntDesign name="camera" size={18} color={COLOR.DARKBLUE} />
    </TouchableOpacity>

     
         </View>
         <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.DARKBLUE, marginVertical: 15 }}>{userName?.userData?.name}</Text>
         <View style={{ width: '90%', marginVertical: 15 }}>
           <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR.DARKBLUE, marginVertical: 5 }}>Personal Details : </Text>
           <TextInput
            mode="outlined"
            label="Full Name"
            right={<TextInput.Affix />}
            value={fullName}
            onChangeText={setFullName}
            style={{ marginVertical: 5 }}
          />
          <TextInput
            mode="outlined"
            label="Phone Number"
            right={<TextInput.Affix />}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            style={{ marginVertical: 5 }}

          />
          <TextInput
            mode="outlined"
            label="Email Address"
            right={<TextInput.Affix />}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={{ marginVertical: 5 }}

          />
          <TextInput
            mode="outlined"
            label="Address"
            right={<TextInput.Affix />}
            value={address}
            onChangeText={setAddress}
            style={{ marginVertical: 5 }}

          />
          <TextInput
            mode="outlined"
            label="Emergency Contact"
            right={<TextInput.Affix />}
            value={emergencyContact}
            onChangeText={setEmergencyContact}
            style={{ marginVertical: 5 }}

          />
          <TextInput
            mode="outlined"
            label="Occupation/Profession"
            right={<TextInput.Affix />}
            value={occupation}
            onChangeText={setOccupation}
            style={{ marginVertical: 5 }}

          />

          <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR.DARKBLUE, marginVertical: 5 }}>Number of Family Members : </Text>


          <TextInput
            mode="outlined"
            label="Family Members"
            right={<TextInput.Affix />}
            value={familyMembers}
            onChangeText={setFamilyMembers}
            keyboardType='numeric'
            style={{ marginVertical: 5 }}

          />

          <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR.DARKBLUE, marginVertical: 5 }}>Vehicle Information : </Text>


          <TextInput
            mode="outlined"
            label="Vehicle Information"
            right={<TextInput.Affix />}
            value={vehicleInfo}
            onChangeText={setVehicleInfo}
            style={{ marginVertical: 5 }}
          />

          <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR.DARKBLUE, marginVertical: 5 }}>Bank Details : </Text>


          <TextInput
            mode="outlined"
            label="Payment Information"
            right={<TextInput.Affix />}
            value={paymentInfo}
            onChangeText={setPaymentInfo}
            style={{ marginVertical: 5 }}

          />

          <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLOR.DARKBLUE, marginVertical: 5 }}>Others : </Text>

          <TextInput
            mode="outlined"
            label="Language Preference"
            right={<TextInput.Affix />}
            value={languagePreference}
            onChangeText={setLanguagePreference}
            style={{ marginVertical: 5 }}

          />
          <TextInput
            mode="outlined"
            label="Cast/Religion"
            right={<TextInput.Affix />}
            value={castReligion}
            onChangeText={setCastReligion}
          />
        </View>

        <Button title="Submit" onPress={handleSubmit} />
       
            <Modal
                transparent
                visible={imageModalVisible}
                animationType='fade'
                statusBarTranslucent
                
            >
              <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:'100%',backgroundColor:'#000'}}>
              <View style={{justifyContent:'center',alignItems:'center',height:'50%',width:'80%',backgroundColor:'red'}}>
              <TouchableOpacity
            onPress={onCapturePress}
        >
           <AntDesign name="camera" size={18} color={COLOR.DARKBLUE} />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={onUploadPress}
        >
           <AntDesign name="upload" size={18} color={COLOR.DARKBLUE} />
           
        </TouchableOpacity>
              </View>
                 </View>

            </Modal>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({})
