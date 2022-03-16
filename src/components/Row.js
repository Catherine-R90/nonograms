import { nanoid } from "nanoid";
import Square from "./Square";

export default function Row(props) {
    const rows = props.row;

    const row = rows.map(square => {
        return (
            <Square
                value={square.value}
                id={square.id}
                rowindex={square.rowindex}
                colindex={square.colindex}
                handleClick={props.handleClick}
                key={nanoid()} 
            />
        ); 
    });

    return (
        <div className="board-row">
            {row}
        </div>
    );
}