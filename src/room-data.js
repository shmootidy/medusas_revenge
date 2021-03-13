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
        item: 'jar',
        prize: ['coins', 3]
      },
      'ceiling': {
        item: 'levelKey',
        content: 'you can\'t reach it',
        _key: 'happy spider',
        options: {
          prize: ['levelKey', 1],
          option1: {
            option: 'send spider',
            message: 'as your spider settles into her new home, she knocks down a crowbar',
            leftover: 'happy spider'
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
    interactableItems : {},
    floorItems: {
      left: {
        item: null,
        prize: null,
        position: 'left'
      },
      right: {
        item: null,
        prize: ['coins', 5],
        position: 'right'
      },
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
    floorItems: {
      left: {
        item: null,
        prize: null,
        position: 'left'
      },
      right: {
        item: null,
        prize: null,
        position: 'right'
      },
    }
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
        content: 'what doo?',
        options: {
          option1: {
            option: 'kill spider',
            item: 'dead spider',
            prize: ['dead spider', 1],
            message: 'the spider is dead',
            leftover: 'spider webs',
            end: true
          },
          option2: {
            option: 'talk to spider',
            item: 'hungry spider',
            content: '"I\'m hungry!"',
            _key: 'dead fly',
            options: {
              prize: ['happy spider', 1],
              option1: {
                option: 'feed spider',
                message: 'you made a new friend',
                leftover: 'spider webs'
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
        roomTo: 'outside',
        position: 'back'
      }
    },
    interactableItems: {
      'left-wall': {
        item: 'sign',
        content: 'This will be the last meaningful decision you make. Adventurer beware.'
      },
      'left-floor': {
        item: 'jar',
        prize: ['key', 1]
      },
      'right-floor': {
        item: 'jar',
        prize: ['coins', 2]
      }
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
            prize: ['chalky skull fragments', 5],
            leftover: 'skull dust',
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
        prize: ['dead fly', 1]
      }
    },
    uniqueItems: {
      'left-door': {
        item: 'juicy red berries',
        content: 'what do?',
        options: {
          option1: {
            option: 'collect berries',
            item: 'berry stains',
            leftover: 'stains are left from the berries you took',
            prize: ['juicy red berries', 10],
          },
          option2: {
            option: 'squish berries',
            item: 'squished berries',
            message: 'the soft, ripe berries squish easily',
            _options: {
              _prize: ['berry goo', 5],
              option1: {
                option: 'collect berry goo',
                leftover: 'stains are left from the berries you took',
                message: 'you put the squished berries in your berry pouch'
              }
            }
          }
        }
      }
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
    floorItems: {
      left: {
        item: null,
        prize: null,
        position: 'left'
      },
      right: {
        item: null,
        prize: null,
        position: 'right'
      },
    }
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
    floorItems: {
      left: {
        item: null,
        prize: null,
        position: 'left'
      },
      right: {
        item: null,
        prize: null,
        position: 'right'
      },
    }
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
        levelLock: true
      },
      right: {
        status: 'no door',
        roomTo: 'outside',
        position: 'right'
      },
      back: {
        status: 'open',
        roomTo: 'H',
        position: 'back'
      }
    },
    interactableItems : {},
    floorItems: {
      left: {
        item: null,
        prize: null,
        position: 'left'
      },
      right: {
        item: null,
        prize: null,
        position: 'right'
      },
    }
  },
}
export default rooms