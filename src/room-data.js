const rooms = {
  L: {
    doors: {
      left: {
        status: 'no door',
        roomTo: 'outside',
        position: 'left'
      },
      forward: {
        status: 'no door',
        roomTo: 'outside',
        position: 'forward'
      },
      right: {
        status: 'open',
        roomTo: 'B',
        position: 'right'
      },
      back: {
        status: 'no door',
        roomTo: 'outside',
        position: 'back'
      }
    },
    interactableItems : {
      'left-floor': {
        item: 'jar'
      },
      'right-floor': {
        prize: ['crowbar', 1],
        hidden: true,
      },
      'right-wall': {
        // leftover: 'ledge',
        // hidden: true
      },
      'ceiling': {
        item: 'levelKey',
        content: 'you can\'t reach it',
        _key: 'happy spider no web',
        options: {
          option1: {
            option: 'send spider',
            item: 'happy spider',
            message: 'as your spider settles into her new home, she knocks down a crowbar',
            leftover: 'happy spider',
            plus: 'ledge',
            // prize: ['crowbar', 1],
            end: true,
            unhide: ['right-floor']
          }
        }
      }
    },
  },
  A: {
    doors: {
      left: {
        status: 'no door',
        roomTo: 'outside',
        position: 'left'
      },
      forward: {
        status: 'open',
        roomTo: 'B',
        position: 'forward'
      },
      right: {
        status: 'no door',
        roomTo: 'I',
        position: 'right'
      },
      back: {
        status: 'open',
        roomTo: 'I',
        position: 'back'
      }
    },
    interactableItems : {
      // 'right-floor': {
      //   prize: ['coins', 5],
      // },
    }
  },
  B: {
    doors: {
      left: {
        status: 'locked',
        roomTo: 'L',
        position: 'left'
      },
      forward: {
        status: 'one-way',
        roomTo: 'Y',
        position: 'forward'
      },
      right: {
        status: 'open',
        roomTo: 'I',
        position: 'right'
      },
      back: {
        status: 'open',
        roomTo: 'A',
        position: 'back'
      }
    },
    interactableItems : {},
  },
  Y: {
    doors: {
      left: {
        status: 'no door',
        roomTo: '',
        position: 'left'
      },
      forward: {
        status: 'no door',
        roomTo: '',
        position: 'forward'
      },
      right: {
        status: 'open',
        roomTo: 'N',
        position: 'right'
      },
      back: {
        status: 'open',
        roomTo: 'B',
        position: 'back'
      }
    },
    interactableItems : {
      'ceiling': {
        item: 'spider',
        content: 'what do you want to do?',
        options: {
          option1: {
            option: 'kill spider',
            item: 'dead spider',
            message: 'the spider is dead',
            leftover: 'dead spider',
            // prize: ['dead spider', 1],
            deathCountDown: true,
            end: true
          },
          option2: {
            option: 'talk to spider',
            item: 'hungry spider',
            content: '"I\'m hungry!"',
            _key: 'dead fly',
            plus: 'fly thought',
            options: {
              option1: {
                option: 'feed spider',
                item: 'happy spider',
                message: 'you made a new friend',
                leftover: 'spider webs',
                prize: ['happy spider no web', 1],
                end: true
              }
            }
          }
        }
      },
    }
  },
  R: {
    doors: {
      left: {
        status: 'no door',
        roomTo: 'A',
        position: 'left'
      },
      forward: {
        status: 'locked',
        roomTo: 'I',
        position: 'forward'
      },
      right: {
        status: 'one-way',
        roomTo: 'T',
        position: 'right'
      },
      back: {
        status: 'open',
        roomTo: 'start',
        position: 'back'
      }
    },
    interactableItems: {
      'left-wall': {
        item: 'sign',
        content: 'There is no way out beyond this point. Adventurer beware! Go back!'
      },
      'left-floor': {
        item: 'jar',
        prize: ['key', 1]
      },
      // 'right-floor': {
      //   item: 'jar',
      //   prize: ['coins', 2]
      // }
    },
  },
  I: {
    doors: {
      left: {
        status: 'open',
        roomTo: 'B',
        position: 'left'
      },
      forward: {
        status: 'open',
        roomTo: 'N',
        position: 'forward'
      },
      right: {
        status: 'open',
        roomTo: 'H',
        position: 'right'
      },
      back: {
        status: 'one-way',
        roomTo: 'I',
        position: 'back'
      }
    },
    interactableItems : {
      'left-floor': {
        item: 'skull',
        content: 'a spooky old skull',
        options: {
          option1: {
            option: 'smash skull',
            item: 'chalky skull fragments',
            message: 'the old skull crumbles like chalk under your heel',
            prize: ['chalky skull fragments', 2],
            // leftover: 'skull dust',
            end: true
          }
        }
      },
      'right-floor': {
        item: 'jar',
        prize: ['key', 1]
      }
    },
  },
  N: {
    doors: {
      left: {
        status: 'open',
        roomTo: 'Y',
        position: 'left'
      },
      forward: {
        status: 'no door',
        roomTo: '',
        position: 'forward'
      },
      right: {
        status: 'no door',
        roomTo: 'S',
        position: 'right'
      },
      back: {
        status: 'open',
        roomTo: 'I',
        position: 'back'
      }
    },
    interactableItems : {
      'left-floor': {
        item: 'fly',
        prize: ['dead fly', 1],
        moves: ['right-wall', 'left-wall']
      },
      // 'right-floor': {
      //   prize: ['juicy red berries', 10],
      //   leftover: 'berry stains',
      //   end: true
      // }
    }
  },
  T: {
    doors: {
      left: {
        status: 'open',
        roomTo: 'I',
        position: 'left'
      },
      forward: {
        status: 'open',
        roomTo: 'H',
        position: 'forward'
      },
      right: {
        status: 'no door',
        roomTo: 'outside',
        position: 'right'
      },
      back: {
        status: 'no door',
        roomTo: 'outside',
        position: 'back'
      }
    },
    interactableItems : {},
  },
  H: {
    doors: {
      left: {
        status: 'open',
        roomTo: 'I',
        position: 'left'
      },
      forward: {
        status: 'open',
        roomTo: 'S',
        position: 'forward'
      },
      right: {
        status: 'open',
        roomTo: 'I',
        position: 'right'
      },
      back: {
        status: 'open',
        roomTo: 'T',
        position: 'back'
      }
    },
    interactableItems : {},
  },
  S: {
    doors: {
      left: {
        status: 'no door',
        roomTo: 'N',
        position: 'left'
      },
      forward: {
        status: 'locked',
        roomTo: 'OUT',
        position: 'forward',
        levelLock: true,
        message: 'The grate jiggles slightly but needs leverage to budge.'
      },
      right: {
        status: 'no door',
        roomTo: 'end',
        position: 'right'
      },
      back: {
        status: 'open',
        roomTo: 'H',
        position: 'back'
      }
    },
    interactableItems : {},
  },
  'start': {
    specialRoom: true, 
    message: 'You left the dungeon. Probably a good idea.',
    img: 'start_scene.png'
  },
  'OUT': {
    specialRoom: true,
    message: 'Congrats! You made it through the first level of Medusa\'s Revenge!',
  },
  'death': {
    specialRoom: true,
    message: 'You died.'
  }
}
export default rooms