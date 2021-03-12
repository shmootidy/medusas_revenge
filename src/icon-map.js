import medusa from './assets/medusa.png'
import jar from './assets/jar.png'
import coin from './assets/coin.png'
import key from './assets/key.png'
import sign from './assets/sign.png'
import skull from './assets/skull.png'
import forward_doorway from './assets/forward_doorway.png'
import left_doorway from './assets/left_doorway.png'
import right_doorway from './assets/right_doorway.png'
import right_door from './assets/right_door.png'
import forward_door from './assets/forward_door.png'
import left_door from './assets/left_door.png'
import fly from './assets/fly.png'
import spider from './assets/spider.png'
import empty_web from './assets/empty_web.png'

const icons = {
  'no door': null,
  'open': '🚪',
  'locked': '🚪🔒',
  'jar': jar,
  'coins': coin,
  'key': key,
  'sign': sign,
  'skull': skull,
  'skull dust': '💀',
  'chalky skull fragments': '🦴',
  'dead fly': fly,
  spider,
  'spider webs': empty_web,
  'happy spider': spider,
  'hungry spider': spider,
  'dead spider': '💀🕷',
  'levelKey': '🗝',
  'levelLock': '🔒🚪🔒',
  'player': medusa,
  'wall writing': '📝',
  'glass jar': '',
  left_doorway,
  right_doorway,
  forward_doorway,
  right_door,
  forward_door,
  left_door,
}

export default icons