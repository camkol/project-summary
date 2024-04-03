/*import { useState } from 'react'*/

import "./styles.css";
import Greeter from "./Greeter.js";
import Chicken from "./Chicken.js";
import Dog from "./Dog.js";
import LoginForm from "./LoginForm.js";
import Die from "./Die.js";
import DiceRoll from "./DiceRoll.js";
import RandomPokemon from "./RandomPokemon.js";
import Slots from "./Slots.js";
import Prop from "./Prop.js";
import Click from "./Click.js";
import Counter from "./Counter.js";
import ToggleCounter from "./ToggleCounter.js";
import ShoppingList from "./ShoppingList.js";
import ColorBoxGrid from "./ColorBoxGrid.js";
import CounterTwo from "./CounterTwo.js";
import Dumbo from "./Dumbo.js";
import ScoreKeeper from "./ScoreKeeper.js";
import EmojiClicker from "./EmojiClicker.js";
import ScoreKeeperTwo from "./ScoreKeeperTwo.js";
import Lucky7 from "./Lucky7.js";
import LuckyN from "./LuckyN.js";
import { sum } from "./utils.js";
import BoxGrid from "./BoxGrid.js";
import UsernameForm from "./UsernameForm.js";
import SignupForm from "./SignupForm.js";
import BetterSignupForm from "./BetterSignupForm.js";
import ShoppingListForm from "./ShoppingListForm.js";
import ShoppingList2 from "./ShoppingList2.js";
import FormDemo from "./FormDemo.js";
import Effects from "./Effects.js";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chicken breasts", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

export default function App() {
  return (
    <div /*className="App"*/>
      <div>
        <h3>Greeter</h3>
        <Greeter />
      </div>{" "}
      <hr />
      <div>
        <h3>Die</h3>
        <Die />
      </div>{" "}
      <hr />
      <div>
        <h3>DiceRoll</h3>
        <DiceRoll />
        <DiceRoll />
      </div>
      <hr />
      <div>
        <h3>Chicken</h3>
        <Chicken />
      </div>
      <hr />
      <div>
        <h3>Dog</h3>
        <Dog />
      </div>
      <hr />
      <div>
        <h3>LoginForm</h3>
        <LoginForm />
      </div>
      <hr />
      <div>
        <h3>RandomPokemon</h3>
        <RandomPokemon />
      </div>
      <hr />
      <div>
        <h3>Slots</h3>{" "}
        <div>
          <Slots val1="🍒" val2="🍒" val3="🍒" />
          <Slots val1="🍒" val2="🍌" val3="🍒" />
        </div>
      </div>
      <hr />
      <div>
        <h3>Property Exercise</h3>
        <Prop />
      </div>
      <hr />
      <div>
        <h3>Clicker</h3>
        <Click />
      </div>
      <hr />
      <div>
        <h3>Counter</h3>
        <Counter />
      </div>
      <hr />
      <div>
        <h3>ToggleCounter</h3>
        <ToggleCounter />
      </div>
      <hr />
      <div>
        <h3>ShoppingList</h3>
        <ShoppingList items={data} />
      </div>
      <hr />
      <div>
        <h3>Color Box Grid</h3>
        <ColorBoxGrid colors={colors} />
      </div>
      <hr />
      <div>
        <h1>State Demo</h1>
        <h3>Counter</h3>
        <CounterTwo />
        <h3>Dumbo</h3>
        <Dumbo />
        <h3>ScoreKeeper</h3>
        <ScoreKeeper />
        <h3>EmojiClicker</h3>
        <EmojiClicker />
      </div>
      <hr />
      <div>
        <ScoreKeeperTwo numPlayers={5} target={5} />
      </div>
      <hr />
      <div>
        <h3>Casino</h3>
        <BoxGrid />
        <Lucky7 />
        <LuckyN winCheck={lessThan4} title="Roll less than 4" />
        <LuckyN
          winCheck={allSameValue}
          numDice={3}
          title="Roll the same number"
        />
      </div>
      <hr />
      <div>
        <h1>React Forms</h1>
        <h3>Username Form</h3>
        <UsernameForm />
        <h3>Sign Up</h3>
        <SignupForm />
        <h3>Better Sign Up</h3>
        <BetterSignupForm />
        <h3>Shopping List</h3>
        <ShoppingList2 />
        <h3>Validated Form</h3>
        <FormDemo />
      </div>
      <hr />
      <div>
        <h1>Effects</h1>
        <Effects />
      </div>
      <hr />
      <div>
        <h3></h3>
      </div>
      <hr />
      <div>
        <h3></h3>
      </div>
      <hr />
      <div>
        <h3></h3>
      </div>
      <hr />
    </div>
  );
}

/*        
 
      
        
        
      
      
      
  
   
   
 
  
   
  
   
*/

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
