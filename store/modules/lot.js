export default {
  state: {
    lots: [
      {
        name: "BRAKE DICS",
        id: 1,
        quantity: 15,
        desired: 1500,
        status: "Open",
        time: "03/18/2021",
        bit: 1500
      },
      {
        name: "KOLO",
        id: 2,
        quantity: 30,
        desired: 150,
        status: "Open",
        time: "03/10/2021",
        bit: 180
      }
    ],

    addStatus: ["Open", "Closed"],
    addName: ["KOLO", "BRAKE DICS"]
  },

  mutations: {
    changeStatus(state) {
      for (var i = 0; i < state.lots.length; i++) {
        if (state.lots[i].desired == state.lots[i].bit) {
          state.lots[i].status = "Closed", state.lots[i].time = "Time Up"
        }
      }
    },
    changeStatusbyTimer(state) {
      var time = new Date()
      for (var i = 0; i < state.lots.length; i++) {
        if ( Date.parse(state.lots[i].time) < time ) {

           state.lots[i].status = "Closed";
        }
      }
    }
  },

  getters: {
    getAllLots(state) {
      return state.lots;
    },
    getAddStatus(state) {
      return state.addStatus;
    },
    getAddName(state) {
      return state.addName;
    }
  }
};
