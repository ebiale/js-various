const urlJokes = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users';

const cloudPreset = 'fxykoava';
const cloudURL = 'https://api.cloudinary.com/v1_1/lenacloud/image/upload';


// fetch(url).then(resp => {
//     resp.json().then(({ id, value }) => {
//         console.log(id, value);
//     });
// });


// fetch(url)
//     .then(resp => resp.json())
//     .then(({ id, value }) => {
//         console.log(id, value);
//     });


const getJoke = async() => {
    try {
        const resp = await fetch(urlJokes);
        if (!resp.ok) return alert('cannot get the request');

        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
    } catch (error) {
        throw error;
    }

};

const getUsers = async() => {
    try {
        const resp = await fetch(urlUsers);
        const { data: users } = await resp.json();
        return users;
    } catch (error) {
        throw error;
    }


};


const uploadFile = async(file) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', file);

    try {
        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }


};

export {
    getJoke,
    getUsers,
    uploadFile
}