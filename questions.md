# Questions

## 1. What is the difference between Component and PureComponent? give an example where it might break my app.
Both Component and PureComponent return a react element, the main difference is that a PureComponent will not be re-render if its state and props have not changed. This can be a disadvantage if your data changes very frequently.

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
This is a bit tied to the question above, as PureComponent use the ShouldComponentUpdate, which conditionates the re-render of the component, and having Context (which tries to communicates with a deep consumer) may interfere if the ShouldComponentUpdate is also set up (by blocking the Context propagation).

## 3. Describe 3 ways to pass information from a component to its PARENT.
- You can create a callback in your parent component, then pass it to your child component, so child will be called with the info you want to pass to the parent.
- useRef hook: This is my favorite way, you can create a ref (in the parent) and assign it to a child component, so later you can see the ref.current object and see the children data.
- Using a 3rd party store library like redux.

## 4. Give 2 ways to prevent components from re-rendering.
- ShouldComponentUpdate: this way your component will not re-render if the data is the same.
- Memo: you avoid re-render as the component is being saved, and it only re-render if the inputs are different from wht you have in cache.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.
Fragments are this <></> and we need them to wrap elements of the same level without adding an extra node into the DOM, I certainly don't know how a fragment can break your app.

## 6. Give 3 examples of the HOC pattern.
I only remember 2 of them:
- React.Memo: I already explain it above.
- Redux connect()

## 7. What's the difference in handling exceptions in promises, callbacks and async...await.
- Promises: by implementing catch().
- Callbacks: they have the error parameter as 1st argument.
- Async/Await: by implementing the try/catch method whenever you want to wrap the dangerous part.

## 8. How many arguments does setState take and why is it async.
It does receives two arguments: 
- 1st - the new obj/value to be set.
- 2nd - a function that can run immediately after the change is being performed.

>setState({ foo: 'bar'}, () => {
 /* this will be executed when the new value is set*/
});

## 9. List the steps needed to migrate a Class to Function Component.
- Replace class declaration syntax (like class to function, render to return, etc.) and replace with Component function syntax.
- this keyword (can be now handled with Ref()).
- Component lifecycle methods and state should be converted to hooks.

## 10. List a few ways styles can be used with components.
- With inline styles
> //<div styles={{ color: 'blsck', display: 'none' }} />
- className (don't forget to import the css file)
> //<div className={"some-fancy-selector-name"} />

## 11. How to render an HTML string coming from the server.
I only know to wrap the dangerouslySetInnerHTML, like:
> //<div
      dangerouslySetInnerHTML={{__html: data}}
    />
