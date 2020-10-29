import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Dimensions} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

var itemArray = new Array(25).fill('nothing'); 
let flag = 15;
let gameOver = 0;
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      randomNumber: "",
      isScratched: false,
      difficulty: 'Normal',
      gameStatus: "Let's start"
    };
  }

  componentDidMount(){
    this.setState({randomNumber:this.generateRandomNumber()});
  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random()* 25);
    this.setState({ randomNumber: randomNumber, isScratched:true});
    return randomNumber;
  };

  scratchItem = (number) => {
    if(flag>0 && gameOver === 0 && itemArray[number] === "nothing"){
    if(this.state.randomNumber === number){
      itemArray[number] = "lucky";
      gameOver = 1
    }
    else{
      itemArray[number] = "unlucky";
      flag -= 1;
    }
    this.gameStatusShow();
    this.forceUpdate();
  }
  };

  gameStatusShow = () =>{
    if(flag < 1){
      this.setState({gameStatus: 'Try Again :('});
    }else if(gameOver === 1){
      this.setState({gameStatus: 'Congratulations :)'});
    }
    else {
      this.setState({gameStatus: ''});
    }
  }

 scratchItemColor = (number) => {
  if(itemArray[number] === "lucky"){
    return "green";
  } else if(itemArray[number] === "unlucky"){
    return "red";
  }
    return "#535C68";
 } 

 scratchItemIcon = (number) =>  {
  if(itemArray[number] === "lucky"){
    return "dollar";
  } else if(itemArray[number] === "unlucky"){
    return "frown-o";
  }return "circle";
 }

 showAllItem = () =>  {
   itemArray.fill('unlucky');
   itemArray[this.state.randomNumber] = 'lucky';

   this.forceUpdate();
 };

 restartGame = () =>  {
  this.setState({gameStatus: "Let's start"});
  this.setState({difficulty: "Normal"}); 
  this.setState({randomNumber: this.generateRandomNumber()},
   () => {
     itemArray.fill('nothing');
     flag = 20;
     gameOver = 0;
     this.forceUpdate();
   });
 };
 levelSelector = (level) => {
      if(level === 'easy' && flag>0){
        this.setState({gameStatus: "Let's start"});
        this.setState({difficulty: "Easy"});
        this.setState({randomNumber: this.generateRandomNumber()},
        () => {
          itemArray.fill('nothing');
          flag = 20;
          gameOver = 0;
          this.forceUpdate();
        });
      } else if(level === 'normal' && flag>0)
      {
        this.setState({randomNumber: this.generateRandomNumber()},
        () => {
          this.setState({gameStatus: "Let's start"});
          this.setState({difficulty: "Normal"});
          itemArray.fill('nothing');
          flag = 15;
          gameOver = 0;
          this.forceUpdate();
        });
      }
      else if(level === 'hard' && flag>0)
      {
        this.setState({gameStatus: "Let's start"});
        this.setState({difficulty: "Hard"});
        this.setState({randomNumber: this.generateRandomNumber()},
        () => {
          itemArray.fill('nothing');
          flag = 10;
          gameOver = 0;
          this.forceUpdate();
        });
      }
      else {
        this.setState({difficulty: 'Normal'});
        flag = 15;
        this.forceUpdate();
      }
 }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}> Scratch & win Game</Text>
        </View>
        <View style={styles.detailsContainer}>
        <View style={styles.detailsMinContainer}>
        <Text style={styles.details}> Difficulty</Text>
        <Text style={styles.details}> {this.state.difficulty}</Text>
        </View>
        <View style={styles.detailsMinContainer}>
        <Text style={styles.details}> Turn Remaining</Text>
        <Text style={styles.details}> {flag}</Text>
        </View>
        </View>
        <View style={styles.grid}>
          <View style={styles.rowItem}>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(0)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(0)}
              size={50}
              color={this.scratchItemColor(0)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(1)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(1)}
              size={50}
              color={this.scratchItemColor(1)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(2)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(2)}
              size={50}
              color={this.scratchItemColor(2)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(3)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(3)}
              size={50}
              color={this.scratchItemColor(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(4)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(4)}
              size={50}
              color={this.scratchItemColor(4)}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(5)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(5)}
              size={50}
              color={this.scratchItemColor(5)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(6)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(6)}
              size={50}
              color={this.scratchItemColor(6)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(7)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(7)}
              size={50}
              color={this.scratchItemColor(7)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(8)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(8)}
              size={50}
              color={this.scratchItemColor(8)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(9)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(9)}
              size={50}
              color={this.scratchItemColor(9)}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(10)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(10)}
              size={50}
              color={this.scratchItemColor(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(11)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(11)}
              size={50}
              color={this.scratchItemColor(11)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(12)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(12)}
              size={50}
              color={this.scratchItemColor(12)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(13)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(13)}
              size={50}
              color={this.scratchItemColor(13)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(14)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(14)}
              size={50}
              color={this.scratchItemColor(14)}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(15)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(15)}
              size={50}
              color={this.scratchItemColor(15)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(16)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(16)}
              size={50}
              color={this.scratchItemColor(16)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(17)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(17)}
              size={50}
              color={this.scratchItemColor(17)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(18)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(18)}
              size={50}
              color={this.scratchItemColor(18)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(19)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(19)}
              size={50}
              color={this.scratchItemColor(19)}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(20)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(20)}
              size={50}
              color={this.scratchItemColor(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(21)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(21)}
              size={50}
              color={this.scratchItemColor(21)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(22)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(22)}
              size={50}
              color={this.scratchItemColor(22)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(23)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(23)}
              size={50}
              color={this.scratchItemColor(23)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => { 
            this.scratchItem(24)
          }}
          >
            <FontAwesome 
              name = {this.scratchItemIcon(24)}
              size={50}
              color={this.scratchItemColor(24)}
            />
          </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.congratulationsText}>{this.state.gameStatus}</Text>
        </View>
        <View> 
        <Text style={styles.plainText}>Difficulty Level</Text>
        </View>
        <View style={styles.diffLevel}>
          <TouchableOpacity style={styles.level} onPress={() => {this.levelSelector('easy')}}>
          <Text style={styles.levelText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.level} onPress={() => {this.levelSelector('normal')}}>
          <Text style={styles.levelText}>Normal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.level} onPress={() => {this.levelSelector('hard')}}>
          <Text style={styles.levelText}>Hard</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gameSettings}>
          <TouchableOpacity style={styles.gameSettingsButt} onPress={() => {this.restartGame()}}>
          <Text style={styles.levelText}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameSettingsButt} onPress={() => {this.showAllItem()}}>
          <Text style={styles.levelText}>Show All</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAE0E2",
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 40,
    //fontWeight: 'bold',
    marginBottom: 7,
    color: '#7CEC9F',


  },
  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  detailsMinContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: '#75DA8B',
    marginBottom: 8,
    borderRadius: 5,
    padding: 4,
  },
  details:{
    fontSize: 30,
    color: '#ffffff',
  },
  rowItem: {
    flexDirection: 'row'
  },
  item: {
    alignItems: 'center',
    padding: 10,
    //borderWidth: 2,
    //borderColor: '#333945',
    minWidth: 70,
    margin: 2,
    borderRadius: 50,
    backgroundColor: '#75DA8B',
    
  },
  grid: {
    marginVertical: 10
  },
  diffLevel:{
    flexDirection: 'row',
    alignItems: "center"
  },
  level:{
    marginHorizontal: 10,
    backgroundColor: '#7CEC9F',
    borderRadius: 5,
  },
  levelText: {
    fontSize: 40,
    padding: 5,
    color: "#ffffff"
  },
  plainText:{
    fontSize: 20,
    marginBottom: 10,
    color: '#333945'
  },
  gameSettings:{
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 10
  },
  gameSettingsButt:{
    marginHorizontal: 10,
    backgroundColor: '#A4B0BD',
    borderRadius: 5,
  },
  congratulationsText:{
    fontSize: 30,
    color: '#45CE30',
    //marginHorizontal: 10
    marginBottom: 5
  },
  tryAgainText:{
    fontSize: 30,
    color: '#E8290B',
    //marginHorizontal: 10
    marginBottom: 5
  }
});