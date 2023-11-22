# React Technical Test


This technical test will only have a frontend component. We expected the technical test to take around 3 hours. Please carefully read over the sections below to see exactly what we are looking for.


### Please create a React app using ES6 or newer

**Use functional components**

Create one webpage that allows a user to create / manage bookings. ✅

The following operations must be present:

● Create a booking ✅

● Read a booking ✅

● Update a booking ✅

● Delete a booking ✅


**Global State**

Store the state from bookings in a global state store of your choice. ✅
> Context API

**Validation & User Experience**

Have some logic in place to prevent double (overlapping) bookings. ✅

Validate the start and end dates for a booking. ✅

**Responsive Design**

The webpages should be fully responsive for desktop and mobile. ✅

**Terminology**

A booking is when a guest selects a start and end date and submits a reservation on a property.


-------
# Task details

Project Configuration: `React + TypeScript + Vite + Eslint + Tailwind`

Third libraries used:

```
"date-fns": "^2.30.0", <--- to manage date calendar and date format
"lucide-react": "^0.292.0", <--- to use some icons
"react-datepicker": "^4.23.0", <--- to use calendar component
"react-router-dom": "^6.19.0", <--- to use routers
"uuid": "^9.0.1" <--- to simulate UUID generation
```

 ### Instructions

- Install dependencies: `yarn`
- Run project: `yarn dev`

  
> **Note:**  To manage booked dates user must be logged in:

```
User: admin
Password: admin
```

-------

Thank you! 🙌

