import React from 'react';

const Blog = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="p-20 text-center">
                <div className="">
                    <h1 className="text-2xl font-bold">Q : What are the different ways to manage a state in a React application?</h1>
                    <p className="py-6">Ans : The Four Kinds of React State to Manage
                        Local state. Global state. Server state. URL state.

                    </p>
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold">Q : How does prototypical inheritance work?</h1>
                    <p className="py-6">Ans : The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototypeof an object, we use Object..

                    </p>
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold">Q : What is a unit test? Why should we write unit tests?</h1>
                    <p className="py-6">Ans : The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                    </p>
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold">Q :  React vs. Angular vs. Vue?</h1>
                    <p className="py-6">Ans : his post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                        Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;