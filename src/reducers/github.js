const data = [
  {
    id: 1,
    isPublic: false,
    title: 'github',
    source: 'created',
    link: '/github',
  },
  {
    id: 2,
    isPublic: true,
    title: 'bit',
    source: 'fork',
    link: '/bit',
  }
];

const github = (state=data, action) => {
  switch (action.type) {
    // TODO
    // NO Action implement changes the state.
    default:
      return state

  }
}

export default github;
