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
  },
  {
    id: 3,
    isPublic: false,
    title: 'hello',
    source: 'created',
    link: '/hello',
  },
  {
    id: 4,
    isPublic: true,
    title: 'world',
    source: 'fork',
    link: '/world',
  },
  {
    id: 5,
    isPublic: false,
    title: 'react-native',
    source: 'created',
    link: '/react-native',
  },
  {
    id: 6,
    isPublic: true,
    title: 'react',
    source: 'fork',
    link: '/react',
  },
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
