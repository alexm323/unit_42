### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Allows us to simulate the experience of an old school server -response cycle on the front end without reloading the page
- What is a single page application?
single page applications dont need to reset/reload the page
- What are some differences between client side and server side routing?
In server side routing we usually send a request to a server/url and we are asking for some path or end point. The server receives the request and parses it, and then the screen is replaced with that content. Client side routing is more like a stage during a play where there is lots happening on the scene but the stage is being changed in front of your eyes.
- What are two ways of handling redirects with React Router? When would you use each?
We could have a catch all router redirect where if a user goes somewhere that they shouldnt have access to or if they are at an endpoint that doesnt exist we can set the to prop in the Redirect component to send them to whatever route we specify. We can also make use of the useHistory hook to redirect and push onto the history object so that a user can go 'back' and reload the previous data state that was on the page.
- What are two different ways to handle page-not-found user experiences using React Router? 
We can redirect them to another page that is possible related to what they were looking for or we can have a 404 page display when they hit the bottom of a Switch component and there we can load a 404 template component 
- How do you grab URL parameters from within a component using React Router?
To grab the URL param data we can use a hook called useParams and that lets us have access to that data 
- What is context in React? When would you use it?
context lets us set a Provider component that we can access in a different part of the app without the use of prop drilling. We can set and consume that context in different areas of our apps 
- Describe some differences between class-based components and function
  components in React.
Class components can be difficult to maintain because of nesting hell structure that can occure when you are passing data down between components. A major pain point for class components was sharing data between components. Function components allow us to make use of Hooks such as useEffect and useState and are a lot easier to understand even if there is some magic happening behind the scenes.
- What are some of the problems that hooks were designed to solve?
A major problem in class based components is that we have a hard time sharing data between components which ends up being a lot of duplicate code. In addition to that , we lose the context of this and so we have to understand 'bind' and 'this'. Very easy to not understand those concepts and that ends up creating issues down the line. Component lifecycles were a bit more explicit which got replaced by useEffect and that makes it a little more difficult to understand but it is much more versatile than in class based components. 

