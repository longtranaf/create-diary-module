import { defineStore,acceptHMRUpdate  } from 'pinia'

export const useDiaryStore = defineStore('diary', {
  state: () => {
    return {
      userList :
        [
          {
            username: 'test',
            password: 'test',
            diary:[
              {
                icon: "material-symbols:thumb-up-outline-rounded",
                status: "Bình thường",
                content: "1234",
                date: '20/11/2023'
              }
            ]
          }
        ],
      ready: false,
  }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
    getReady: (state) => {
      return state.ready;
    }
  },
  actions: {
    createDiary(data: { icon: string, status: string, content: string, date: string }) {
      console.log("data", data);
      this.userList[0].diary = [...this.userList[0].diary, data]
      console.log("this.userList", this.userList);

    }
  }
}
)

