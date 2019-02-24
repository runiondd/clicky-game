import React, { Component } from 'react';
import './style.scss';
import cardData from "../../cards.json";
import Card from '../Card';
import NavBar from '../NavBar';

class Game extends Component {

    state = {
        score: 0,
        highScore: 0,
        cardData: cardData,
        clickedList: []
    }

    componentDidMount() {
        const {cardData } = this.state;
        this.shuffleShit(cardData);
    }

    handleClick = (cardId) => {
        const {score, clickedList, cardData, highScore} = this.state;
        const isClicked = clickedList.includes(cardId);
        this.shuffleShit(cardData);
        if (isClicked) {
            alert("You are dumb. Don't click that one again!");
            const bestScore = Math.max(score, highScore);
            this.resetGame(bestScore);
        }
        else {
            const newScore = score + 1;
            this.setState({
                clickedList: [...clickedList, cardId],
                score: newScore
            })
            
            if (newScore === cardData.length) {
                alert("You win!");
                this.resetGame(newScore);
            }
        }        
        
        
    }

    resetGame = highScore => {
        this.setState({
            score: 0,
            clickedList: [],
            highScore: highScore
        })
    }

    shuffleShit = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        this.setState({
            cardData: array
        })
    }

    render() {
        return (
            <div>
              <NavBar 
                headingText="Score:"
                headingValue={this.state.score}
                primaryHeadingText="High Score:"
                primaryHeadingValue={this.state.highScore}
                />
                <div className="cardStyle">
               {this.state.cardData.map((card) => (
                    <Card   
                         key={card.id}
                        id={card.id}
                        image={card.image} 
                        name={card.name} 
                        handleClick={this.handleClick}
                    />  
                 ))}   
                 </div> 
            </div>
        );
    }
}

export default Game;