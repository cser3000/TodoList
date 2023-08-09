
export function GETINFO (url, setFunc) {
    fetch(url)
        .then( (response) => response.json() )
        .then( (data) => setFunc(data) )
}

export function DELETE (url, key, setFunc, data) {
    fetch(url + '/' + String(key), {
        method: 'DELETE',
    })
        .then( (response) => response.json() )
        .then( () => setFunc(data.filter( (el) => el.id !== key) ) )
}

const createId = () => Math.round(Math.random() * 1000000)

export function POST (url, title, description, setFunc, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:  JSON.stringify({
            title,
            description,
            id: createId(),
        })
    })
        .then((response) => response.json())
        .then((info) => {
            setFunc([info, ...data])
        });
}