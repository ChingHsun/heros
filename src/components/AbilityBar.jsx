const AbilityBar = ({ ability, points, onPlus, onMinus }) => {
    return (<>
        <div>{ability}</div>
        <button onClick={onMinus}>minus</button>
        <div>{points}</div>
        <button onClick={onPlus}>plus</button>

    </>)
}

export default AbilityBar;