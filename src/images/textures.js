import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

import {
  glassImage
} from './images'

const groundTexture = new TextureLoader().load(glassImage)
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter

export {
  groundTexture
}
