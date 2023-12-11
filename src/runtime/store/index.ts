import { defineStore,acceptHMRUpdate  } from 'pinia'

export const useDiaryStore = defineStore('createDiary', {
  state: () => {
    return {
      authencation: {
        username: ""
      },
      diary:[
        {
          icon: "material-symbols:thumb-up-outline-rounded",
          status: "Bình thường",
          content: "1234",
          date: '20/11/2023 10:30'
        }
      ]
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    createNewDiary(data: any) {
      console.log("data", data);
      this.diary = [...this.diary, data]
      console.log("this.diary", this.diary);
    },
    setUsername(username: string) {
      this.authencation.username = username
    }
  },
  persist: true
}
)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDiaryStore, import.meta.hot))
}

