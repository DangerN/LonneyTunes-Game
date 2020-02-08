import React, { Component } from "react"
import Wrapper from "./components/Wrapper";
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import looney from  "./looney.json"


class App extends Component{
    state={
        looney,
        highscore:0,
        score:0,
        answer:[]
    }
    render(){
        return(
    <div>
        <Navbar
        score={this.state.score}
        highscore={this.state.highscore}
        />
        <Wrapper>
            {this.state.looney.map(character=>{
                return(
                <Card
                id={character.id}
                key={character.id}
                image={character.image}
                />
                )
            })}
        
        </Wrapper>
    </div>
        )
    }
}

export default App;