export default function Number(props) {
    if(props.complete === false) {
        return (
            <div className="incomplete-number">
                {props.number}
            </div>
        )
    } 
    if(props.complete === true) {
        return (
            <div className="complete-number">
                {props.number}
            </div>
        )
    }
}