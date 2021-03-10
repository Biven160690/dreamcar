//Модуль store для users

import { email } from "vuelidate/lib/validators";

/*  {
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
"street": "Kulas Light",
"suite": "Apt. 556",
"city": "Gwenborough",
"zipcode": "92998-3874",
"geo": {
"lat": "-37.3159",
"lng": "81.1496"
}
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
}, */

export default {
    actions: {
        // Получение объекта users

        async fetchUsers(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();

            // Обновление state с помощью мутации updateUsers т.к. экшн fetchUsers асинхронна
            ctx.commit('updateUsers', users)
        }
    },
    // Мутация для изменения users в state
    mutations: {
        updateUsers(state, users) {
            if (!(state.users.length > 0)) {
                for (var i = 0; i < users.length; i++){
                    users[i].passw = "12345"
                }
                state.users = users

            }
        },
        updateLoggedUser(state, user) {
          if (state.users.length > 0) {
            for (var i = 0; i < users.length; i++){
              if (users[i].id == user.id) {
                state.users[i].name = user.name;
                state.users[i].email = user.email;
                state.users[i].company = user.company;
                state.users[i].phone = user.phone;
              }
            }


            }
        },
        // Мутация для добваления user в state
        pushUser(state, user) {
            state.users.push(user);
        },

        // Мутация для добваления logged user в state
        pushLoggedUser(state, user) {
            state.loggedUser.push(user);
            state.isUserLogged = true
        },
    },
    state: {
        isUserLogged: false,
        loggedUser: [],
        users: []
    },
    getters: {
        getAllUsers(state) {
            return state.users
        },
        getUserById(state) {
            var result = {};
            return result = state.users.filter(obj => {
                return obj.id === 2
            })
        },
        isUserLogged(state) {
            if (state.isUserLogged) {
                return true
            } else {
                return false
            }
        },
        getLoggedUser(state) {
            return state.loggedUser[0]
        }

    }
}
