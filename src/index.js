import './styles.css';
import { init } from './js/files-page';
// import { init as initJokes, init } from './js/joke.page';
// import { init as initUsers } from './js/users-page';
// import { getUsers } from './js/http-provider';

// import * as CRUD from './js/crud.provider';




// initUsers();

// CRUD.getUser(1).then(console.log);


// let user;

// CRUD.createUser({ name: 'Elena', job: 'Programer' }).then((res) => {
//     console.log(res);
//     user = res;
//     user.name = 'Drus';
//     CRUD.updateUser(user.id, user).then(console.log);
// });

// CRUD.deleteUser(2).then(console.log);

init();

console.log('Here')