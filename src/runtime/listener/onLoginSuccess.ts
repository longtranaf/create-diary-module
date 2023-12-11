import { useDiaryStore } from "../store";
// export const onLoginSuccess = (username: string) => {
//   console.log('onLoginSuccess', username);
//     useDiaryStore().setUsername(username);
// }
const onLoginSuccess = {
  loginSuccess: function(username: string) {
    console.log('onLoginSuccess', username);
    useDiaryStore().setUsername(username);
  }
}
export { onLoginSuccess }
