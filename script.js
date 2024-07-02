fetch('./data.json')
    .then(res => {
        if (!res.ok) {
            throw new Error("An unknown error occured!");
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(data[0].title);
    })
    .catch(error => console.error(error)) 