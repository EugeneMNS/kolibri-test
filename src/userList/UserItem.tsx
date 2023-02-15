import React from "react";
import {UserType} from "../App";
import "./UserItem.css";

function UserItem ({user, index}: {user: UserType, index: number}) {

    return (
        <div className="userItem">
            <div className="userItem__content">
                <strong>{index+1}. {user.name} {user.surname}</strong>
            </div>
        </div>
    );
}

export default UserItem;
