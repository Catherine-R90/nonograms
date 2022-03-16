export default function Square(props) {
    if(props.value === true) {
        const e = Event;
        return (
            <button 
                className="true-square"
                value={props.value}
                onClick={(e) => props.handleClick(e, props.id)}
                onContextMenu={(e) => props.handleClick(e, props.id)}
                id={props.id}
                rowindex={props.rowindex}
                colindex={props.colindex}
            ></button>
        );
    } 
    if(props.value === false) {
        const e = Event;
        return (
            <button 
                className="false-square"
                value={props.value}
                onClick={(e) => props.handleClick(e, props.id)}
                onContextMenu={(e) => props.handleClick(e, props.id)}
                id={props.id}
                rowindex={props.rowindex}
                colindex={props.colindex}
            ></button>
        );
    }
    if(props.value==="x-square"){
        const e = Event;
        return (
            <button 
                className="x-square"
                value="x-square"
                onClick={() => props.handleClick(e, props.id)}
                onContextMenu={(e) => props.handleClick(e, props.id)}
                id={props.id}
                rowindex={props.rowindex}
                colindex={props.colindex}
            >X</button>
        );
    }
}