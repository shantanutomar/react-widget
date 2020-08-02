# React Widget

This project demonstrate of use of React Application as a widget on any other website. The UI is made specifically for Desktop View.

Few points to note below: 
1. The widget is created in React and shows two main components -> Simple Form and Latest Changes.
2. As part of form to be filled by user we have a user name field where user can enter his/her name and that will
be stored and its first character will be shown in a Chip which is displayed on User Form. This name will be 
restored once user refreshes the page.
3. The data which is shown in Latest Changes component is fetched from static JS file.
4. As part of the implementation the widget has been deployed in /dist/index.html where all the React bundles has been embedded as part of script tag. All the code related to deployment of widget on static HTML page is part of /dist folder.
5. All the React Widget related code is part of /src folder.
6. The user can expand/minimize the widget.

The project is deployed here(static HTML page)-> https://react-widget.netlify.app/

### Setting Up and Running

- Clone the [repository](https://github.com/shantanutomar/react-widget.git).
- Install all the required dependencies using `npm install`.
- Run a development server of web client using `npm start`. This will start web local server on `http://localhost:3000/`
- A static production build can be made using `npm run build`.