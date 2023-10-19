const url = "http://localhost:3000/posts";
const createId = () => Math.round(Math.random() * 1000000)

export function getAll() {
    return fetch(url)
        .then((response) => response.json())
}

export function remove(key) {
    return fetch(url + '/' + String(key), {
        method: 'DELETE',
    })
        .then((response) => response.json())

}


export function create(title, description, done = false, important = false) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            title,
            description,
            done,
            important,
            id: createId(),
        })
    }).then((response) => response.json())
}

export function update(data, newInfo) {
    return fetch(url + "/" + String(data.id), {
        method: 'PUT',
        body: JSON.stringify(
            {
                ...data,
                ...newInfo,
            }
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(res => res)
}