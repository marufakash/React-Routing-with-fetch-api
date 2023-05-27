import React from "react";
import { Link } from "react-router-dom";

const Blogs = (props) => { 
    return (
        <div>
            <h1 className="titleName">Users Page</h1>
            <section className="card">
                {props.users.map((user) => {
                    const {id,name,username,phone,website,email} = user;
                    return (
                        <article key={id}>
                            <div>
                                <h2>Name : {username}</h2>
                                <p>Email : {email}</p>
                            </div>
                            <div>
                                <Link to={username} state={{id,name,username,phone,website,email}} className="linkBtn">Show Details</Link>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Blogs;