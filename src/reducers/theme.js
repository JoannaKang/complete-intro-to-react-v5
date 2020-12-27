export default function theme (state = 'darkblue', action) {
  if (action.type === 'CHANGE_THEME') {
    //action은 이렇게 생겨야 함
    // {
    //   type: 'ADD_TODO',
    //   payload: {
    //     text:'Do something'
    //   }
    // }
    return action.payload;
  } else { 
    return state;
  }
}