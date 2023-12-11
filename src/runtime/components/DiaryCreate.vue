<template>
  <div class="container">
    <label for="uname"><b>Hôm nay bạn cảm thấy thế nào ?</b></label>

    <div>
      <button
        class="button button4"
        @click="chooseFeeling('material-symbols:thumb-up-outline-rounded')"
      >
        <Icon name="material-symbols:thumb-up-outline-rounded" color="white" />
      </button>
      <button
        class="button button4"
        @click="chooseFeeling('material-symbols:favorite')"
      >
        <Icon name="material-symbols:favorite" color="white" />
      </button>
      <button
        class="button button4"
        @click="chooseFeeling('fa6-regular:face-laugh-squint')"
      >
        <Icon name="fa6-regular:face-laugh-squint" color="white" />
      </button>
      <button
        class="button button4"
        @click="chooseFeeling('tabler:mood-suprised')"
      >
        <Icon name="tabler:mood-suprised" color="white" />
      </button>
      <button
        class="button button4"
        @click="chooseFeeling('fa6-regular:face-sad-tear')"
      >
        <Icon name="fa6-regular:face-sad-tear" color="white" />
      </button>
    </div>

    <textarea
      label="Nhập nội dung nhật ký"
      rows="4"
      cols="50"
      v-model="content"
    ></textarea>
    <p v-if="iconChoosed">
      - đang cảm thấy
      {{ iconBtn.filter((item) => item.name === iconChoosed)[0].status }}
      <Icon :name="iconChoosed" color="black" />
    </p>
    <button @click="save">Lưu</button>
  </div>
</template>

<script setup>
import { useNuxtApp, useState } from "nuxt/app";
import { useDiaryStore } from "../store";
const iconBtn = useState("iconBtn", () => [
  {
    name: "material-symbols:thumb-up-outline-rounded",
    status: "Bình thường",
  },
  {
    name: "material-symbols:favorite",
    status: "Yêu đời",
  },
  {
    name: "fa6-regular:face-laugh-squint",
    status: "Vui vẻ",
  },
  {
    name: "tabler:mood-suprised",
    status: "Ngạc nhiên",
  },
  {
    name: "fa6-regular:face-sad-tear",
    status: "Buồn",
  },
]);
const iconChoosed = useState("iconChoosed", () => "");
const content = useState("content", () => "");
const emit = defineEmits(["write"]);
const diaryStore = useDiaryStore();
console.log("diaryStore", diaryStore);
function chooseFeeling(icon) {
  console.log("ico1n", typeof icon);
  console.log("iconChoosed", iconChoosed);
  iconChoosed.value = String(icon);
  console.log("icon", icon);
}
function save() {
  console.log("iconChoosed", iconChoosed);
  const date = new Date();
  const data = {
    icon: iconChoosed.value,
    status: iconBtn.value.filter((item) => item.name === iconChoosed.value)[0]
      .status,
    content: content.value,
    date:
      date.getDate() +
      "/" +
      (Number(date.getMonth()) + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes(),
  };
  console.log("write", {
    icon: iconChoosed.value,
    status: iconBtn.value.filter((item) => item.name === iconChoosed.value)[0]
      .status,
    content: content.value,
    date:
      date.getDate() +
      "/" +
      (Number(date.getMonth()) + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes(),
  });
  console.log("diaryStore", diaryStore);
  const createDiary = diaryStore.createNewDiary(data);
  const { eventBus } = useNuxtApp();
  console.log("$eventBus", eventBus);
  console.log("$eventBus1", eventBus.on());
  eventBus.emit("diaryAdded", data);
  console.log("createDiary", createDiary);
}
</script>

<style>
.button {
  background-color: #04aa6d; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
}

.button1 {
  border-radius: 2px;
}
.button2 {
  border-radius: 4px;
}
.button3 {
  border-radius: 8px;
}
.button4 {
  border-radius: 12px;
}
.button5 {
  border-radius: 50%;
}
</style>
