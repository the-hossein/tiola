import React, { useEffect, useState } from 'react';
import Board from './Board';
import Square from './Square';

//stylesheet
import style from './Board.module.css';

const defaultSquare = [1,2,3,4,5,6,7,8,9].fill(null);

const lines = [
  [0,1,2] , [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
]


const XoGame = () => {

  const linesThatAre = (a,b,c) => {
    return lines.filter(squareIndex => {
      const squareValue = squareIndex.map(index=> squares[index]);
      return JSON.stringify([a,b,c].sort()) === JSON.stringify(squareValue.sort())
    })
  };

  const [wins, setWins] = useState({player: 0, computer:0})

  const [squares, setSquares] = useState(defaultSquare);

  useEffect(()=> {
    const isCoumpeterTurn = squares.filter(square => square !== null).length % 2 === 1;
    
    let playerWon = linesThatAre('x', 'x', 'x').length > 0 ;

    let coupeterWon = linesThatAre('o','o','o').length > 0 ;
    
    if(coupeterWon === true) {
      setWins(prevState => {
        return{
          ...wins,
          computer: prevState.computer + 1
        }
      });
      setSquares([1,2,3,4,5,6,7,8,9].fill(null));
      coupeterWon = false;
      return;
    }else if(playerWon === true){
      setWins(prevState => {
        return{
          ...wins,
          player: prevState.player + 1
        }
      });
      setSquares([1,2,3,4,5,6,7,8,9].fill(null));
      playerWon = false;
      return;
    }

    linesThatAre('x','x','x');

    const putCoumpeterAt = index => {
      let newSquares = squares;
      newSquares[index] = 'o';
      setSquares([...newSquares]);
    }
    if(isCoumpeterTurn){
      const emptyIndex = squares
          .map((item, index) => item === null ? index : null)
          .filter(val => val !== null);
                            
      const randomIndex = emptyIndex[Math.ceil(Math.random() * emptyIndex.length)];
      putCoumpeterAt(randomIndex);
    }

    const copelate = squares.filter(square => square !== null);

    if(copelate.length === squares.length) {
      setSquares([1,2,3,4,5,6,7,8,9].fill(null));
    }

  }, [squares])

  const handlerSquare = (square,index) => {
    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
    if(square === "o") {
      return;
    }
    if(isPlayerTurn){
      let newSquares = squares;
        newSquares[index] = 'x';
        setSquares([...newSquares]);
    }

  }

  return (
    <div className={style.container}>
      <Board>
        {
          squares.map((square, index)=>{
            return <Square 
            key={index}
            name={index}
            x={square === 'x' ? 1 : 0}
            y={square === 'o' ? 1 : 0}
            onClick={()=>handlerSquare(square,index)} 
            />
          })
        }
      </Board>
      {
        <div className={style.rand}>
          <span>player:{wins.player}</span>
          <span>computer:{wins.computer}</span>
        </div>
      }
      <button onClick={()=> {
        setSquares([1,2,3,4,5,6,7,8,9].fill(null));
        setWins({player: 0, computer:0});
      }}>Reset</button>
    </div>
  );
};

export default XoGame;