//Модуль store для lots

export default {
    state: {
        lots: [
            {
                "id": 1,
                "part_id": 1,
                "part_name": "Brake disc",
                "part_description": "brake disc kjhkjhfkdhgkdh",
                "quantity": 50,
                "status": "open",
                "expirationDate": "2021-03-18",
                "desiredPrice": 90,
                "bit": 120
              },
              {
                "id": 2,
                "part_id": 3,
                "part_name": "Suspension",
                "part_description": "suspension fhdkhdffdfdgh",
                "quantity": 10,
                "status": "closed",
                "expirationDate": "2021-03-09",
                "desiredPrice": 75,
                "bit": 70
              },
        ],

        statuses: ["Open", "Closed"],
        //addName: ["KOLO", "BRAKE DICS"]
    },
    mutations: {
        // Мутация для добваления lot в state
        pushLot(state, lot) {
            state.lots.push(lot);
        },
    },
    getters: {
        getAllLots(state) {
            return state.lots
        },
        getStatuses(state) {
            return state.statuses;
        },
        /*
        getAddName(state) {
            return state.addName;
        }*/
    }
}