import { getUsers } from "./http-provider";

const body = document.body;
let tbody;

const crearHtml = () => {

    const html = `
    <h1 class="mt-5"> Users</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    tbody = document.querySelector('tbody');

}

const createUserRow = (user) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar

    const html = `
        <td scope="col"> ${user.id} </td>
        <td scope="col"> ${user.email} </td>
        <td scope="col"> ${user.first_name} ${user.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${user.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.append(tr);

}


export const init = async() => {

    crearHtml();

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

    const users = await getUsers();

    users.forEach(user => {
        createUserRow(user);
    });

}