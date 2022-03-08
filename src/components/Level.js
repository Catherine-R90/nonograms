import Board from './Board';
import Columns from './Helpers/ColumnHelper';
import Rows from './Helpers/RowHelper';
import RowObject from './Helpers/RowObject';

export default function Level(props) {
    const rawRows = props.rawRows;

    const gameRows = RowObject(rawRows);

    const colNums = Columns(gameRows);

    const rowNums = Rows(gameRows);
    
    return (
        <div>
            <Board gameRows={gameRows} rowNums={rowNums} colNums={colNums} declareWinner={props.declareWinner} />
        </div>
    );
}