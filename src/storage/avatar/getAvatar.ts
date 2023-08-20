import AsyncStorage from '@react-native-async-storage/async-storage'
import { AVATAR_COLLECTION } from '@storage/storageConfig'

export async function getAvatar() {
  const storage = await AsyncStorage.getItem(AVATAR_COLLECTION)
  const avatar: string = storage ? JSON.parse(storage) : undefined

  return avatar
}
