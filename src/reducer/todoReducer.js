import actions from "../action";
const initialData = [
    {
        id: 1,
        task: "study",
        isComplete: false
    }
];

export const TodoData = (state = initialData, action) => {
    //  console.log(action, 'from action')
    // console.log(state, 'from state')
    //  console.log(action.payload, 'from payload')
    switch (action.type) {
        case actions.ADD:
            const newTask = {
                id: Math.random(),
                task: action.payload,
                isComplete: false
            };
            return [...state, newTask];

        case actions.COMPLETE:
            action.payload.isComplete = true;
            state = [...state]
            return state;

        case actions.DELETE:
            state = state.filter((x) => x.id !== action.payload)
             return state;

         case actions.UNDO:
            action.payload.isComplete = false;
            state = [...state]    
            return state;
        default:
            return state
    }
}