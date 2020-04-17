1. What problem does the context API help solve?

This helps with “prop-drilling” where you have to pass in props literally every folder down the line until you get what you need in the right folder. This is a huge help in giant app projects

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are what you want to do with your code, a lot of it is setting off your cases in reducers that will tell the state what to change during that action. The store in redux refers to that it has a single immutable state tree—this also helps so that we write immutable code that won’t throw bugs and side effects later on. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, redux has a library which is the ‘store’ where they hold the app state, while component in local and lives within that specific component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a function returning another function so that we would be able to turn a synchronous operation into an asynchronous operation. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Haha—reducers were pretty cool after learning about them, but very frustrating at first. Which is probably why I like them now that I have some understanding of it, but I have to say that Context API’s were super simple and awesome because (well, they were simple) but also easy to understand at first. Don’t worry though, I’m sure I’ll get better at redux!