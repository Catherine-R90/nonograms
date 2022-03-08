export default function Columns(gameRows) {
    // ASSIGN COL ROWS
    const nums = gameRows.map((row, index) => row[index].col);

    const gameCols = [];

    nums.forEach(num=>{
        const col = [];
        gameRows.map(row=>{
            const colNum = row.map(square=>{
                if(square.col === num) {
                    return col.push(square);
                }
            });
            return colNum;
        })
        return gameCols.push(col);
    });

    // GET NUMBERS FOR COLS
    const sequences = gameCols.map(col=>{
        let sequences = [];
        col.map(square=>{
            if(square.value === false) {
                sequences.push(0);
            }
            if(square.value === true) {
                sequences.push(1);
            }
        })
        return sequences;
    });

    const colCount = sequences.map(seq =>{        
        let countSequences = [];
        let count = 0;

        seq.forEach(num=>{
            if(num === 0) {
                countSequences.push(count);
                count = 0;
            }
            if(num === 1) {
                count++
            }
        });
        countSequences.push(count);
        return countSequences;
    });

    const colNums = colCount.map(seq=> {
        const onlyZero = (num) => num === 0;

        let obj;

        if(seq.every(onlyZero)) {
            obj = {nums:"0"};
        } else {
            const cleanNums = seq.filter(num => num !== 0);
            obj = {nums:cleanNums.join()};
        }

        return obj;
    });

    return colNums;
}