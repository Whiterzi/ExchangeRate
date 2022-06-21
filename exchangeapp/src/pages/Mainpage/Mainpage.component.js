import Dropdown from '../../components/Dropdown/Dropdown';
import { GetApi } from '../../services/utilities/FetchApi';
import './Mainpage.component.scss'
import { useState, useEffect } from 'react'

const Mainpage = () => {
    const [currencyrate, setrate] = useState(null)
    const url = 'http://localhost:3001/currency'
    const [storage, updatestorage] = useState()
    const onStorage = (ovk) => {
        updatestorage(prev => ({
            ...prev,
            ...ovk
        }))
    }
    const onClick = (e) => {
        console.log(storage)
        const left = document.getElementById('linput')
        const right = document.getElementById('rinput')
        switch (e.target.id) {
            case 'ltr':
                right.value = parseInt(left.value) / storage.Lrate * storage.Rrate;
                break;
            case 'rtl':
                left.value = parseInt(right.value) / storage.Rrate * storage.Lrate;
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        GetApi({ url: url }).then(res => setrate(res)).catch(err => console.log(err))
    }, [0]);
    return (
        <div className="mainpage-wrapper">
            <div className="main-panel">
                <div className="title-row">
                    <span>通貨換算</span>
                </div>
                <div className="input-field l">
                    <input type="number" id="linput" min="0" />
                </div>
                <div className="input-field r">
                    <input type="number" id="rinput" min="0" />
                </div>
                <div className="convert-button">
                    <input type="button" value=">" id='ltr' onClick={onClick} />
                    <input type="button" value="<" id='rtl' onClick={onClick} />
                </div>
                <div className="currency-select l">
                    <Dropdown data={currencyrate} setVal={(v) => onStorage({ Lrate: v })} />
                </div>
                <div className="currency-select r">
                    <Dropdown data={currencyrate} setVal={(v) => onStorage({ Rrate: v })} />
                </div>
            </div>
        </div>
    )

}
export default Mainpage;