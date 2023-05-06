import { exercise, play, selfCare, social, study, work } from '../images';


const timedTasks =  [
  {
    title: "Work",
    image: work,
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      },
      yearly: {
        current: 223,
        previous: 198
      }
    }
  },
  {
    title: "Play",
    image: play,
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      },
      yearly: {
        current: 60,
        previous: 83
      }
    }
  },
  {
    title: "Study",
    image: study,
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      },
      yearly: {
        current: 45,
        previous: 32
      }
    }
  },
  {
    title: "Exercise",
    image: exercise,
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      },
      yearly: {
        current: 53,
        previous: 47
      }
    }
  },
  {
    title: "Social",
    image: social,
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      },
      yearly: {
        current: 78,
        previous: 63
      }
    }
  },
  {
    title: "Self Care",
    image: selfCare,
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      },
      yearly: {
        current: 84,
        previous: 64
      }
    }
  }
];

export default timedTasks;