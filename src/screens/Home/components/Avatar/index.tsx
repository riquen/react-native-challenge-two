import { useState, useEffect } from 'react'

import { Plus } from 'phosphor-react-native'
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker'

import { getAvatar } from '@storage/avatar/getAvatar'
import { addAvatar } from '@storage/avatar/addAvatar'

import { Container, Image } from './styles'

export function Avatar() {
  const [image, setImage] = useState<string>()

  const fetchAvatar = async () => {
    const data = await getAvatar()
    setImage(data)
  }

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      await addAvatar(result.assets[0].uri)
      fetchAvatar()
    }
  }

  useEffect(() => {
    fetchAvatar()
  }, [])

  return (
    <Container onPress={pickImage}>
      {image ? <Image source={{ uri: image }} /> : <Plus style={{ margin: 8 }} />}
    </Container>
  )
}
