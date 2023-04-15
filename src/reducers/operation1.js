const initialstate=0;
const changeTheNumber=(State=initialstate,action)=>{
    switch (action.type){
        case 'Increment':return State +1;
        case 'Decrement':return State -1;
        case 'Reset':return State=initialstate ;
        default :return State
    }
}
export default changeTheNumber;