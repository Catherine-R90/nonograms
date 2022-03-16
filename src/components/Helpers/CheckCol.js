export default function CheckCol(gameRows, boardRows, colId) {
    const gameVals = []
    gameRows.map(row=>{
        row.map(square=>{
            if(square.colindex === colId) {
                return gameVals.push(square.value);
            }
        })
    })
    
    const boardVals = [];
    boardRows.map(row=>{
        row.map(square=>{
            if(square.colindex === colId) {
                if(square.value === "x-square") {
                    return boardVals.push(false);
                } else {
                    return boardVals.push(square.value);
                }
            }
        })
    });

    const isArray = Array.isArray(gameVals) && Array.isArray(boardVals);
    const length = gameVals.length === boardVals.length;
    const matchVals = JSON.stringify(boardVals) === JSON.stringify(gameVals);

    if(isArray === true && length === true && matchVals === true) {
        return true;
    }
}