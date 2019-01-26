export const ADD_COMP = "ADD_COMP";

export function addComp(model) {
  return {
    type: ADD_COMP,
    payload: {
      model
    }
  };
}
