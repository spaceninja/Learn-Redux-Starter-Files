// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of current state

const posts = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing Likes!');
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we're updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one we're updating
      ];
    default:
      return state;
  }
};

export default posts;
