export default {
  state: {
    lots: [
      {
        name: "BRAKE DICS",
        id: 1,
        quantity: 15,
        desired: 1500,
        expiratedate: "22.02.2021 18:00",
        status: "Closed",
        time: "03/10/2021",
        bit: 1500
      },
      {
        name: "KOLO",
        id: 2,
        quantity: 30,
        desired: 150,
        expiratedate: "22.02.2021 18:00",
        status: "Open",
        time: "03/08/2021",
        bit: 150
      }
    ],

    addStatus: ["Open", "Closed"],
    addName: ["KOLO", "BRAKE DICS"]
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
