// async function fetchUser() {
//     try {
//         const resp = await fetch('https://jsonplaceholder.tyicode.com/users/1');
//         const data = await resp.json();
//         setName(data.name);
//         console.log(data);
//         setLoading(false);
//     } catch(e) {
//         console.log(e);
//         setError(true);
//         setLoading(false);
//     }
// }
// fetchUser();

import userSlice from "./UserSlice";

const action = userSlice.actions;

export default function UserMiddleware() {
    return async function(dispatch) {
        debugger
        try {
            dispatch(action.setLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/users/2');
            const data = await resp.json();
            dispatch(action.setUser(data));
        } catch(e) {
            dispatch(action.setError());
        }
    }
}