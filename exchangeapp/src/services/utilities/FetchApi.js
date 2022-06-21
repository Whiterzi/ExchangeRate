import axios from 'axios';


export function GetApi({ url, method, headers = {}, data, mode }, option = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: method || 'GET',
            url: url,
            data: data ? data : null,
            headers: headers || {},
            mode: mode || null,
            ...option
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    })
}
