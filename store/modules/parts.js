//Модуль store для parts

export default {
    state: {
        parts: [
            {
                "id": 1,
                "name": "Brake disc",
                "description": "brake disc kjhkjhfkdhgkdh",
              },
              {
                "id": 2,
                "name": "Wheel",
                "description": "wheel  jhsd dsfdf rrrese",
              },
              {
                "id": 3,
                "name": "Suspension",
                "description": "suspension fhdkhdffdfdgh",
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