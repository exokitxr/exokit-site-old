function updatePlayerCount(state = { playerCount: 0 }, action) {
  const playerCount = state.playerCount;
  switch (action.type) {
    case 'playerJoin':
      return { playerCount: playerCount + 1 };
    case 'playerLeave':
      return { playerCount: playerCount - 1 };
    default:
      return state
  }
}
export default updatePlayerCount;