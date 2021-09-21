// write your createStore function here
function createStore(reducer) {
  let state;
 
  function dispatch(action) {
    state = reducer(state, action)
    // remember, since we're abstracting it's not state = state + whatever, it's calling the function we're applying to the state
    // no I still don't know why it's called reducer, that seems counter-intuitive
    render();
  }

  function getState() {
    return state;
  }

  return { dispatch, getState }

}

function candyReducer(state = [], action) {
  // just leave this alone for this lab
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

let store = createStore(candyReducer);
// call the createStore function with the reducer >.< function given
store.dispatch({type: '@@INIT'})

// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.