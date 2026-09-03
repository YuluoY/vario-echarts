// src/action.ts
function isActionOfType(action, actionType) {
  return action.type === actionType;
}
function createAction(type, props) {
  return { type, ...props };
}

export { createAction, isActionOfType };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map