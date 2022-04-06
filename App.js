import React,{Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      numero: 0,
      botao:'Começar',
      ultimo: null
    };
    
    this.timer= null;
    this.comecar = this.comecar.bind(this);
    this.recomecar = this.recomecar.bind(this);
  }
  comecar(){
    if(this.timer != null ){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao:'VAI'})
    }else {
      this.timer = setInterval(()=>{
        this.setState({numero: this.state.numero + 0.1})
      }, 100);
    
      this.setState({botao:'PARAR'});
    }
  }
  recomecar(){
    if (this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    } 
    this.setState({
      ultimo: this.state.numero,
      numero:0,
      botao: 'Começar'
    })
  }
  render(){
    return (
      <View style={styles.container}>
    
      <Image source={require('./assets/time3.png')}
      style={styles.cronometro}/>
      
      <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
  
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.comecar}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.recomecar}>
            <Text style={styles.btnTexto}>Recomeçar</Text>
          </TouchableOpacity>
        </View>
       
        <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ?'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : '' }
          </Text>
        </View>
      </View>
    );
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    marginTop:-270,
    fontSize:60,
    fontWeight: 'bold',
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    marginTop: 60,
    borderRadius: 10,
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  },
  areaUltima:{
    marginTop:90
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color:'#fff'
  },
  cronometro: {
    height: 450,
    width: 450,
    marginTop:-150
  }
});
export default App;