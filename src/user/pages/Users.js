import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
        id: 'u1',
        name: 'Mat',
        image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
        places: 3
    }
]


    return <UsersList items={USERS} />;  
}

export default Users;
