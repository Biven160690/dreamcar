//Модуль store для parts

export default {
    state: {
        parts: [
            {
                "id": 1,
                "name": "Brake disc",
                "description": "sdhfkjhsd",
              },
              {
                "id": 2,
                "name": "Wheel",
                "description": "wheel  jhsd",
              },
              {
                "id": 3,
                "name": "Suspension",
                "description": "suspension fhdkh",
              },
        ]
    },
    /*
    mutations: {
        addPart(state, newPart) {
            state.parts.push(newPart)
        }
    },*/
    getters: {
        getAllParts(state) {
            return state.parts
        } 
    }      
}