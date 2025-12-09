import { useState, useEffect } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_MOBILE_API_KEY",
  authDomain: "yourproject.firebaseapp.com",
  projectId: "yourproject",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 24 }}>Early Mobile App</Text>

      <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginTop: 20, padding: 10 }}
      />

      <TextInput 
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginTop: 10, padding: 10 }}
      />

      <Button title="Sign In" onPress={signIn} />
    </View>
  );
        }
