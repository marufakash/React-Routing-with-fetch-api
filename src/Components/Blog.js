import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Blog = () => {
    const location = useLocation();
    const {username} = useParams();
    const {id,name,phone,website,email}= location.state;

    return (
        <section>
            <h1 className="titleName">User Details</h1>
            <div className="details">
                <p>ID :- {id}</p>
                <p>Username :- {username}</p>
                <p>Name :- {name}</p>
                <p>Email :- {email}</p>
                <p>Phone :- {phone}</p>
                <p>Website :- {website}</p>
            </div>
        </section>
    )
}

export default Blog;