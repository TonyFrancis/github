const data = [
  {
    public: false,
    title: 'github',
    source: 'created',
    link: '/github',
  },
  {
    public: true,
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
