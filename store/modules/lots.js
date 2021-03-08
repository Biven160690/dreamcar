//Модуль store для lots

export default {
    state: {
        lots: [
            {
                "id": 1,
                "part_id": 1,
                "quantity": 50,
                "status": "open",
                "expirationDate": "2021-03-28",
                "desiredPrice": 90
              },
              {
                "id": 2,
                "part_id": 3,
                "quantity": 10,
                "status": "closed",
                "expirationDate": "2021-03-23",
                "desiredPrice": 75
              },
        ]
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
        }
    }
}