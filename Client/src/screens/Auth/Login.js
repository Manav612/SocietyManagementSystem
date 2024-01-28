import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = ({ navigation }) => {
  const handleLogin = (values) => {
    console.log('Logging in with:', values);
    navigation.navigate('HomeTabs');
  };

  const handleSignUp = () => {
    // Navigate to the sign-up screen
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <Button title="Login" onPress={handleSubmit} />

          </View>
        )}
      </Formik>

      {/* Sign Up link */}
      <TouchableOpacity onPress={handleSignUp} style={{flexDirection:'row'}}>
        <Text style={{marginTop:16}}>Don't have an account?</Text>
        <Text style={styles.signUpLink}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  signUpLink: {
    marginTop: 16,
    color: 'blue',
  },
});

export default Login;
