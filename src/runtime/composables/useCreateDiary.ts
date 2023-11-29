import { useDiaryStore } from '../store'
export const useCreateDiary = (data: any) => {
  console.log(`data`, data);
  return useDiaryStore().createDiary(data)
}
