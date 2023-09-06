function Controls({onDecrement,onIncrement}){
    return(
        <div>
        <button onClick={onIncrement}>Increase</button>
        <button onClick={onDecrement}>Decrease</button>
    </div>
    )
}
export default Controls;