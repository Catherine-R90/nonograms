export default function WinState(gameRows, boardRows) {
    const gameVals = gameRows.map(gameRow => {
        const values = gameRow.map(square=>{
            return square.value;
        });
        return values;
    })
    
    const boardVals = boardRows.map(boardRow => {
        const values = boardRow.map(square=>{
            if(square.value === "x-square") {
                return false
            } else {
                return square.value;
            }
        });
        return values;
    })

    const isArray = Array.isArray(gameVals) && Array.isArray(boardVals);
    const length = gameVals.length === boardVals.length;
    const matchVals = JSON.stringify(boardVals) === JSON.stringify(gameVals);

    
    if(isArray === true && length === true && matchVals === true) {
        return true;
    } else {
        return false;
    }
    
}