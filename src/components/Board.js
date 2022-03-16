import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Row from "./Row";
import Number from "./Number";
import CheckRow from "./Helpers/CheckRow";
import CheckCol from "./Helpers/CheckCol";
import WinState from "./Helpers/WinState";

export default function Board(props) {
    const gameRows = props.gameRows;
    const [rowNums, setRowNums] = useState(props.rowNums);
    const [colNums, setColNums] = useState(props.colNums);

    const rowNumbers = rowNums.map(row=>{
        return <Number number={row.nums} rowId={row.rowId} key={"num-"+nanoid()} complete={row.complete}/>;
    });

    const colNumbers = colNums.map(col => {
        return <Number number={col.nums} rowId={col.rowId} key={"num-"+nanoid()} complete={col.complete}/>;
    });

    const bRows = gameRows.map(row=>{
        const boardRow = row.map(square=>{
            return {square, value:false, rowindex:square.rowindex, colindex:square.colindex, id:"square-"+nanoid(), key:nanoid()}
        })
        return boardRow;
    });

    const [boardRows, setBoardRows] = useState(bRows);


    const handleClick = (e, id) => {
        let rowId;
        let colId;
        const updatedRow = boardRows.map(row => {
            const updatedSquare = row.map(square=>{
                if(square.id === id) {
                    rowId = square.rowindex;
                    colId = square.colindex;

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
        
        if(CheckRow(gameRows, updatedRow, rowId) === true) {
            const completedRow = updatedRow.map(row=>{
                const completedSquares = row.map(square=>{
                    if(square.value === false && square.rowindex === rowId) {
                        return {...square, value:"x-square"}
                    }
                    return square;
                });
                return completedSquares;
            });
            setBoardRows(completedRow);

            const updatedRowNums = rowNums.map(num=>{
                if(num.rowId === rowId) {
                    return {...num, complete:true}
                }
                return num;
            });
            setRowNums(updatedRowNums);
        }

        if(CheckCol(gameRows, updatedRow, colId) === true) {
            const completedCol = updatedRow.map(row=>{
                const completedColSquares = row.map(square=>{
                    if(square.value === false & square.colindex === colId) {
                        return {...square, value:"x-square"}
                    }
                    return square;
                });
                return completedColSquares;
            });
            setBoardRows(completedCol);
            const updatedColNums = colNums.map(num=>{
                if(num.colId === colId) {
                    return {...num, complete:true}
                }
                return num;
            });
            setColNums(updatedColNums);
        }
    }

    const board = boardRows.map(row => {
        return (
            <Row 
                row={row}
                key={'row-'+nanoid()}
                handleClick={handleClick}
            />
        );  
    });

    useEffect(()=>{
        if(WinState(gameRows, boardRows) === true) {
            alert("Woohoo you won!");
        }
    });

    return (
        <div className="board">
            <div className="row-nums">{rowNumbers}</div>
            <div className="col-nums">{colNumbers}</div>
            <div className="game-board">{board}</div>
        </div>        
    );
}