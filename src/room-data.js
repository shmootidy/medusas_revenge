const rooms = {
  L: {
    doors: {
      left: {
        status: 'no door',
        keyNeeded: null,
        roomTo: ''
      },
      forward: {
        status: 'no door',
        keyNeeded: null,
        roomTo: ''
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'B'
      },
      back: {
        status: 'no door',
        keyNeeded: null,
        roomTo: ''
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  },
  A: {
    doors: {
      left: {
        status: 'no door',
        keyNeeded: null,
        roomTo: ''
      },
      forward: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'B'
      },
      right: {
        status: 'no door',
        keyNeeded: null,
        roomTo: ''
      },
      back: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'R'
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  },
  B: {
    doors: {
      left: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'L'
      },
      forward: {
        status: 'one-way',
        keyNeeded: null,
        roomTo: 'Y'
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'I'
      },
      back: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'A'
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  },
  Y: {
    doors: {
      left: {
        status: 'no door',
        keyNeeded: null,
        roomTo: ''
      },
      forward: {
        status: 'no door',
        keyNeeded: null,
        roomTo: ''
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'N'
      },
      back: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'B'
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  },
  R: {
    doors: {
      left: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'A'
      },
      forward: {
        status: 'locked',
        keyNeeded: null,
        roomTo: 'I'
      },
      right: {
        status: 'one-way',
        keyNeeded: null,
        roomTo: 'T'
      },
      back: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'outside'
      }
    },
    floorItems: {
      left: {
        item: 'jar',
        prize: 'key'
      },
      right: {
        item: 'jar',
        prize: 'coins'
      },
    }
  },
  I: {
    doors: {
      left: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'B'
      },
      forward: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'N'
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'H'
      },
      back: {
        status: 'one-way',
        keyNeeded: null,
        roomTo: 'R'
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  },
  N: {
    doors: {
      left: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'Y'
      },
      forward: {
        status: 'no door',
        keyNeeded: null,
        roomTo: ''
      },
      right: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'S'
      },
      back: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'I'
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  },
  T: {
    doors: {
      left: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'R'
      },
      forward: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'H'
      },
      right: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'outside'
      },
      back: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'outside'
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  },
  H: {
    doors: {
      left: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'I'
      },
      forward: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'S'
      },
      right: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'R'
      },
      back: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'T'
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  },
  S: {
    doors: {
      left: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'N'
      },
      forward: {
        status: 'locked',
        keyNeeded: null,
        roomTo: 'OUT'
      },
      right: {
        status: 'no door',
        keyNeeded: null,
        roomTo: 'outside'
      },
      back: {
        status: 'open',
        keyNeeded: null,
        roomTo: 'H'
      }
    },
    floorItems: {
      left: {
        item: null,
        prize: null
      },
      right: {
        item: null,
        prize: null
      },
    }
  }
}
export default rooms