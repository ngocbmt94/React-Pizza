# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React pizza

This is a very simple application, where users can order one or more pizzas from a menu.

# How to do this repo?

Download or clone this repo and run the following command in the terminal:

```
1. npm install or npm i
2. npm run dev

```

# Feature

```
1. Typing name to use this app
2. Rendering list menu pizza, it be loaded from an API and Mark pizza item sold out
3. Add pizza Item in cart
4. Update quantity of pizza in cart
5. Delete pizza Item in cart
6. Order pizza to submit user’s name, phone number, address and the pizza in cart.
Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
GPS location should also be provided when submit order.
7. Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID.
8. User’s can mark their order as “priority” for an additional 20% of the cart price

```

### View the app (Hosted on Netlify):

https://bichngoc-react-pizza.netlify.app/

### Tools:

React.js, Redux-toolkit, React-router-dom, Tailwind CSS

### Thanks for visiting this repo, take care!
