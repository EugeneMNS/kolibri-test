import React from "react";
import {UserType} from "../App";
import "./UserItem.css";

export function UserItem ({user, index}: {user: UserType, index: number}) {

    return (
        <div className="userItem">
            <ul className="userItem__content">
                <li>{index+1}. {user.name} {user.surname}</li>
            </ul>
        </div>
    );
}
