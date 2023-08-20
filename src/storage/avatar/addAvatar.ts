import AsyncStorage from '@react-native-async-storage/async-storage'
import { AVATAR_COLLECTION } from '@storage/storageConfig'

export async function addAvatar(avatar: string) {
  const storage = JSON.stringify(avatar)

  await AsyncStorage.setItem(AVATAR_COLLECTION, storage)
}
