const rooms = {
  L: {
    doors: {
      left: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'outside',
        position: 'left'
      },
      forward: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'outside',
        position: 'forward'
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'B',
        position: 'right'
      },
      back: {
        status: 'no door',
        keyNeeded: null,
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
        keyNeeded: null,
        roomTo: 'outside',
        position: 'left'
      },
      forward: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'B',
        position: 'forward'
      },
      right: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'R',
        position: 'right'
      },
      back: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'R',
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
        status: 'open',
        keyNeeded: null,
        roomTo: 'L',
        position: 'left'
      },
      forward: {
        status: 'one-way',
        keyNeeded: null,
        roomTo: 'Y',
        position: 'forward'
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'I',
        position: 'right'
      },
      back: {
        status: 'open',
        keyNeeded: null,
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
        keyNeeded: null,
        roomTo: '',
        position: 'left'
      },
      forward: {
        status: 'no door',
        keyNeeded: null,
        roomTo: '',
        position: 'forward'
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'N',
        position: 'right'
      },
      back: {
        status: 'open',
        keyNeeded: null,
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
    }
  },
  R: {
    doors: {
      left: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'A',
        position: 'left'
      },
      forward: {
        status: 'locked',
        keyNeeded: null,
        roomTo: 'I',
        position: 'forward'
      },
      right: {
        status: 'one-way',
        keyNeeded: null,
        roomTo: 'T',
        position: 'right'
      },
      back: {
        status: 'open',
        keyNeeded: null,
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
    }
  },
  I: {
    doors: {
      left: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'B',
        position: 'left'
      },
      forward: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'N',
        position: 'forward'
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'H',
        position: 'right'
      },
      back: {
        status: 'one-way',
        keyNeeded: null,
        roomTo: 'R',
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
  N: {
    doors: {
      left: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'Y',
        position: 'left'
      },
      forward: {
        status: 'no door',
        keyNeeded: null,
        roomTo: '',
        position: 'forward'
      },
      right: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'S',
        position: 'right'
      },
      back: {
        status: 'open',
        keyNeeded: null,
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
  T: {
    doors: {
      left: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'R',
        position: 'left'
      },
      forward: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'H',
        position: 'forward'
      },
      right: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'outside',
        position: 'right'
      },
      back: {
        status: 'no door',
        keyNeeded: null,
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
        keyNeeded: null,
        roomTo: 'I',
        position: 'left'
      },
      forward: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'S',
        position: 'forward'
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'R',
        position: 'right'
      },
      back: {
        status: 'open',
        keyNeeded: null,
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
        keyNeeded: null,
        roomTo: 'N',
        position: 'left'
      },
      forward: {
        status: 'locked',
        keyNeeded: null,
        roomTo: 'OUT',
        position: 'forward'
      },
      right: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'outside',
        position: 'right'
      },
      back: {
        status: 'open',
        keyNeeded: null,
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