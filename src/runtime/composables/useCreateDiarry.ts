import { useDiaryStore } from '../store'
export const useCreateDiary = (data: any) => {
  return useDiaryStore().createDiary(data)
}
