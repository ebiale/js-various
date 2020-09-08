import { uploadFile } from "./http-provider";

const body = document.body;
let inputFile, imgPic;

const createInputFileHtml = () => {
    const html = `
        <h1 class="mt-5">Upload Images</h1>
        <hr>
        <label>Select a picture: </label>
        <input type="file" accept="image/png, image/jpeg, image/gif, image/svg" />
        <br>
        <img src="" id="pic" class="img-thumbnail">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgPic = document.querySelector('#pic');
};


const events = () => {

    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0];
        uploadFile(file).then(resp => {
            imgPic.src = resp;
        })
    });
};

export const init = () => {
    createInputFileHtml();
    events();
}