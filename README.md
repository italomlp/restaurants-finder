# Restaurants Finder App

This is an app to explore restaurants from an API. Important things to consider:

- All the app made with Typescript
- The structure is based on _Atomic Design_, something that has been showing as a great fit for my React Native apps
- SWR, besides Axios, was used to allow manage requests, and a "stale-while-revalidate" approach to the app. This made it easy to manage the state, as it cares about caches with keys, so we didn't need Redux or Context API for it.
- With SWR, an approach with `useSWRInfinite` was used to make infinity scrolling
- Styled Components were used in most the cases
