import React from 'react'
import { useDispatch     } from "react-redux";
import { doLogout } from '../../store/actions/AuthActions'

export default function Home() {
    const dispatch = useDispatch()

    const doUserLogout = ( ) => {
        dispatch(doLogout())
    }
    return (
        <div>
            Home - if user login user can go home component

            <button onClick={doUserLogout}>Logout Now</button>

        </div>
    )
}
