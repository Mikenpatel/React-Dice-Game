
import './App.css';
import { nanoid } from 'nanoid'
import React from 'react';
import Dice from './components/Dice';

function App() {

   const [diceArray,setDiceArray]=React.useState(numberGenerator())

   React.useEffect(()=>{
      const allHeld=diceArray.every(die=>die.isHeld)
      
      const anyElement=diceArray[0].value
      const allSame=diceArray.every(die=>die.value===anyElement)

      if(allHeld && allSame){
        console.log('Game Won')
      }

   },[diceArray])

    console.log(diceArray)
   

   function numberGenerator(){
     let numArray=[];
     for(let i=1;i<=10;i++){
       numArray.push(randomNumberGenerator())
     }
     return numArray;
   }

   function randomNumberGenerator(){
     return {
      value:Math.ceil(Math.random()*6),
      id:nanoid(),
      isHeld:false,
     }
   }

   


   function onHeld(id){
     setDiceArray(oldDiceArray=>oldDiceArray.map(eachObject=>{
       return eachObject.id===id?
       {...eachObject,isHeld:!eachObject.isHeld}:
       eachObject
     }))
   }


   function rollDice(){
     setDiceArray(oldDiceArray=>oldDiceArray.map(eachObject=>{
       return eachObject.isHeld?
       eachObject:randomNumberGenerator()
       
     }))
      // setDiceArray(numberGenerator())
   }


   const allDice=diceArray.map(element=><Dice key={element.id} value={element.value}  isHeld={element.isHeld} onHeld={()=>onHeld(element.id)}/>)
   
  return (
   <main>
    <h1 className="tenzies">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className='dice-container'>
      {allDice}
    </div>
    <button className="roll-button"  onClick={rollDice}>Roll</button>
   </main>
  );
}

export default App;
