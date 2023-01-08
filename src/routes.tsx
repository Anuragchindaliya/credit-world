// src/routes.tsx
export const routes = {
    
}
// const PRESERVED = import.meta.globEager('/src/pages/(_app|404).tsx')
// const ROUTES = import.meta.url('/src/pages/**/[a-z[]*.tsx')

// import React, { Fragment } from 'react'
// import { BrowserRouter as Switch, Route } from 'react-router-dom'


// const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
//   const key = file.replace(/\/src\/pages\/|\.tsx$/g, '')
//   return { ...preserved, [key]: PRESERVED[file].default }
// }, {})

// const routes = Object.keys(ROUTES).map((route) => {
//   const path = route
//     .replace(/\/src\/pages|index|\.tsx$/g, '')
//     .replace(/\[\.{3}.+\]/, '*')
//     .replace(/\[(.+)\]/, ':$1')

//   return { path, component: ROUTES[route].default }
// })

// export const Routes = () => {
//   const App = preserved?.['_app'] || Fragment
//   const NotFound = preserved?.['404'] || Fragment

//   return (
//     <App>
//       <Switch>
//         {routes.map(({ path, component: Component = Fragment }) => (
//           <Route key={path} path={path} component={Component} exact={true} />
//         ))}
//         <Route path="*" component={NotFound} />
//       </Switch>
//     </App>
//   )
// }
