import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../components/Login";
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
  return (
    <View>
      <View style={styles.loginContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
        <Text style={styles.Login}>Login</Text>
      </View>
        <Text style={styles.email}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Entre com seu e-mail" placeholderTextColor="#b0aeaeff"/>
        <Text style={styles.msgemail}>Por favor digite um e-mail válido. exemplo: user@gmail.com</Text>
        <Text style={styles.senha}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#b0aeaeff"/>
        <Text style={styles.msgsenha}>Senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.</Text>
        <TouchableOpacity style={styles.botao_login_email} onPress={()=>alert("Botão e-mail acionado")}>
          <Fontisto name="email" size={24} color="white" />
          <Text style={styles.texto_login}>Login com E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao_login_facebook} onPress={()=>alert("Botão facebook acionado")}>
          <Entypo name="facebook-with-circle" size={24} color="white" />
          <Text style={styles.texto_login}>Login com Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao_login_google} onPress={()=>alert("Botão google acionado")}>
          <AntDesign name="google" size={24} color="white" />
          <Text style={styles.texto_login}>Login com google</Text>
        </TouchableOpacity>
    </View>
  );
}
