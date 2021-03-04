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
    },
    uniqueItems: {
      item: 'spider',
      content: 'what do?',
      position: 'ceiling',
      options: {
        option1: {
          option: 'kill spider',
          item: 'dead spider',
          message: 'the spider is dead'
        },
        option2: {
          option: 'talk to spider',
          item: 'hungry spider',
          message: '"I\'m hungry!"'
        }
      }
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
    floorItems: {
      left: {
        item: 'jar',
        prize: 'key',
        position: 'left'
      },
      right: {
        item: 'jar',
        prize: 'coins',
        position: 'right'
      },
    },
    uniqueItems: {
      item: 'sign',
      content: 'Entering this dungeon will be the last meaningful decision you will make.',
      position: 'left-wall'
    }
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
    floorItems: {
      left: {
        item: 'jar',
        prize: null,
        position: 'left'
      },
      right: {
        item: 'jar',
        prize: 'key',
        position: 'right'
      },
    },
    uniqueItems: {
      item: 'skull',
      content:'a spooky old skull',
      position: 'forward-door'
    }
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
    floorItems: {
      left: {
        item: null,
        prize: 'dead fly',
        position: 'left'
      },
      right: {
        item: null,
        prize: null,
        position: 'right'
      },
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
        position: 'forward'
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