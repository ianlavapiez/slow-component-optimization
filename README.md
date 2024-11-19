# Slow Component Optimization

A NextJS Application with TypeScript that showcase some real life scenarios where a lot of code practices are not being applied to most applications. In this repository, you will be able to identify some common issues about web performance and React profiler and how to provide a concrete solution based on identifying the root problem and take advantage of React Fiber algorithm which makes your React performant and faster.

## Exercise

For you to check the exercise, checkout to `slow-component-optimization` and carefully identify what are the issues you might encounter why the app is very slow in terms of resetting color and user input.

```bash
git checkout slow-component-optimization
```

## Solution

For you to check the solution, checkout to `slow-component-optimization-solution` and check the code carefully and analyze the key difference from the `slow-component-optimization` branch. You can also check the code example after the bash script below.

```bash
git checkout slow-component-optimization-solution
```

Key answers on how we did the optimization:

1. Using of anonymous function when calling the `generateColor()` from [components/color](/components/color/index.tsx).

- This has improved our React component in terms of not calling again the said function when the component is being re-rendered due to user input and also allows us not to have only one correct answer while the user input is happening.
- Lazy Initialization, ensures that the `generateColor()` is only called when the state is initialized.

2. Using of `React.memo()` or passing the `SlowComponent` as children of the `Color` component.

- Using of `React.memo()` allows your `SlowComponent` to memoized the component, it means that it doesn't recalculate the component for re-render if it checks that the component is still the same.
- Using `children` to pass the `SlowComponent` at the center of the `Color` component is also a nice trick since it doesn't affect the `Color` component's re-render lifecycle and if there are some rare cases where the `SlowComponent` is still needed in the component or it is very expensive to refactor, you can just make it as a child of the `Color` component, taking the advantage of the React Fiber's smart component tree.
