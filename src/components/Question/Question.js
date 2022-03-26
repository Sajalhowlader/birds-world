import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='question'>
                <h1 className='text-center mb-4'>How React Works</h1>

                <strong>

                    React is a javascript library that makes a user interface. When we write code under the react components it will compile raw javascript helping by babel. it makes a virtual dom and compares our real dom. When we write code the virtual dom compares with our real dom and shows the output. The JSX gets converted to React.CreateElement by the function call. Each of the functions returns an object similar to the object.
                    If we write a function with vanilla javascript like a counter. when we call the function in a different file the JScode repeat. But we can solve it easily by making react components. It's easy and readable.React Dom: React generate or make our code and react DOM render the code fow show.when we use react in our mobile react Dom convert to react native
                </strong>
            </div>
            <div className='question'>
                <h1 className='text-center mb-4'>Props Vs State</h1>
                <div className=' d-flex m-3 '>
                    <div>
                        <strong >
                            <h3 >Props</h3>
                            01. Props are read-only <br />
                            02. Props are immutable <br />
                            03. Props can be accessed by child components.<br />
                            04. Stateless component can have Props<br />
                            05. Props make components reusable.<br />
                            06.Props are used to communicate between components
                        </strong>
                    </div>
                    <div>
                        <strong>
                            <h3>State</h3>
                            01. State change can be asynchronous.<br />
                            02. State is mutable.<br />
                            03. State cannot be accessed by child Components.<br />
                            04. Stateless components cannot have State.<br />
                            05. State cannot make components by reusable.<br />
                            06. States can be used for rendering dynamic changes with the components</strong>
                    </div>
                </div>

            </div>
            <div className='question'>
                <h1 className='text-center mb-4'>How Useeffect work</h1>

                <strong>

                    UseEffect is a hook in react. It gives us tow one function and one dependence. when we fetch data from anywhere it helps to set and update our data. When any state is use an effect set and updates it. When we want to perform something after each render of component then we can use the useEffect hook. By using this Hook, we tell React that our component needs to do something after render by passing a function. React remember the function we passed in useEffect hook and call it later after performing the DOM updates.

                    By default, the useEffect hook runs after the first render and after every update. React updates the DOM by the time it runs the effects.
                </strong>
            </div>
        </div>
    );
};

export default Question;