import './Dropdown.scss';



const Dropdown = (props) => {
    const data = props.data || {}
    return (
        <div className="dropdown-wrapper">
            <select name="currency" className='drop-container' onChange={(e) => props.setVal(data[e.target.value].Exrate)}>
                {Object.keys(data).map(v =>
                    <option key={v} value={v}>{v.slice(3, 6)}</option>
                )}
            </select>
        </div>
    )
}

export default Dropdown;