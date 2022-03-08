export default function Rows(gameRows) {
    const sequences = gameRows.map(row=>{
        let sequences = [];
        row.map(square=>{
            if(square.value === false) {
                sequences.push(0);
            }
            if(square.value === true) {
                sequences.push(1);
            }
        })
        return sequences;
    });

    const rowCount = sequences.map(seq =>{        
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

    const rowNums = rowCount.map(seq=> {
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

    return rowNums;
}