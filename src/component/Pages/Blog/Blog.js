import React from 'react';

const Blog = () => {
    return (
        <div className='grid md:grid-cols-1 sm:grid-cols-1'>

            <div className='border p-8 m-8'>          
            <div>
                <h1 className='text-2xl'>SQL :</h1>
                <p>SQL, which stands for “Structured Query Language,” is the programming language that’s been widely used in managing data in relational database management systems (RDBMS) since the 1970s. In the early years, when storage was expensive, SQL databases focused on reducing data duplication.Fast-forward to today, and SQL is still widely used for querying relational databases, where data is stored in rows and tables that are linked in various ways. One table record may link to one other or to many others, or many table records may be related to many records in another table. These relational databases, which offer fast data storage and recovery, can handle great amounts of data and complex SQL queries.</p>
            </div>
            <div>
                <h1 className='text-2xl'>NOSQL :</h1>
                <p>NoSQL is a non-relational database, meaning it allows different structures than a SQL database (not rows and columns) and more flexibility to use a format that best fits the data. The term “NoSQL” was not coined until the early 2000s. It doesn’t mean the systems don’t use SQL, as NoSQL databases do sometimes support some SQL commands. More accurately, “NoSQL” is sometimes defined as “not only SQL.”</p>
            </div>
            
            </div>

            <div className='border p-8 m-8'>
                <div>
                    <h1 className='text-2xl'>Java Script :</h1>
                    <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </div>
                <div>
                    <h1 className='text-2xl'>NodeJS :</h1>
                    <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                </div>
            </div>

            <div className='border p-8 m-8'>
                <h1 className='text-2xl'>JWT WORK :</h1>
                <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.</p>
                <p>When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. </p>

            </div>

            <div className='border p-8 m-8'>
                <h1 className='text-2xl'>Node JS handle Multiple request at the same time ?</h1>
                <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. </p>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>

        </div>
    );
};

export default Blog;