import { nanoid } from "nanoid";

export default function RowObject (rawRows) {
    const gameRows = [];
    rawRows.map((rawRow, index)=>{
        const rowNum = index+1;
        const row = [];
        rawRow.map((square, index)=>{
            const colNum = index+1;
            if(square=== true) {
                row.push({value:true, id:"square-"+nanoid(), rowindex:rowNum, colindex:colNum},);
            } else {
                row.push({value:false, id:"square-"+nanoid(), rowindex:rowNum, colindex:colNum});
            }
        })
        gameRows.push(row);
    });
    
    return gameRows;
}