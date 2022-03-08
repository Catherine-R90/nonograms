import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Row from "./Row";
import Number from "./Number";
import WinState from "./Helpers/WinState";

export default function Board(props) {
    const gameRows = props.gameRows;

    const bRows = gameRows.map(row=>{
        const boardRow = row.map(square=>{
            return {square, value:false, id:"square-"+nanoid(), key:nanoid()}
        })
        return boardRow;
    });

    const [boardRows, setBoardRows] = useState(bRows);


    const handleClick = (e, id) => {
        const updatedRow = boardRows.map(row => {
            const updatedSquare = row.map(square=>{
                if(square.id === id) {
                    if(e.type === 'click') {
                        return {...square, value: !square.value};
                    }
                    else if(e.type === 'contextmenu'){
                        e.preventDefault();
                        if(square.value === 'x-square') {
                            return {...square, value:false}
                        } else {
                            return {...square, value:"x-square"};
                        }
                    }
                }
                return square;
            })
            return updatedSquare
        });
        setBoardRows(updatedRow);
    }

    const rowNums = props.rowNums.map(row => {
        return <Number number={row.nums} key={"num-"+nanoid()} />;
    });

    const colNums = props.colNums.map(col => {
        return <Number number={col.nums} key={"num-"+nanoid()} />;
    })

    const board = boardRows.map(row => {
        return (
            <Row 
                row={row}
                key={'row-'+nanoid()}
                handleClick={handleClick}
                rowNums={rowNums}
                colNums={colNums}
            />
        );
    });

    useEffect(()=>{
        WinState(gameRows, boardRows, props.declareWinner);
    })

    return (
        <div className="board">
            <div className="row-nums">{rowNums}</div>
            <div className="col-nums">{colNums}</div>
            <div className="game-board">{board}</div>
        </div>        
    );
}