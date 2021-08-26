# Connecting  a React App to an Express backend
![Alt text](our-stack.png?raw=true "Title")
## Setting up express

1. Install and setup  express

	[https://expressjs.com/en/starter/installing.html]	(https://expressjs.com/en/starter/installing.html)

2. Setup  a basic hello world app for express

	[https://expressjs.com/en/starter/installing.html](https://expressjs.com/en/starter/hello-world.html)

	(Remember require mean get the exported functionality from that file or module and make it available through that variable).

	[https://nodejs.org/en/knowledge/getting-started/what-is-require/#:~:text=2011-08-26,to return the exports object](https://nodejs.org/en/knowledge/getting-started/what-is-require/#:~:text=2011%2D08%2D26,to%20return%20the%20exports%20object).
3. Running the express app
Add start script by adding 

	`"start": "node index.js" `
	to package.json 

## Setting up mongo db.

For mongo db:

We need a database server, we have two options for that:

1. Setting it up locally ([https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)) [https://www.codewall.co.uk/mongodb-beginner-tutorial-with-compass-gui-the-mongo-shell-cli/](https://www.codewall.co.uk/mongodb-beginner-tutorial-with-compass-gui-the-mongo-shell-cli/)
2. Using atlas online [https://www.knowi.com/blog/getting-started-with-mongodb-atlas-overview-and-tutorial/](https://www.knowi.com/blog/getting-started-with-mongodb-atlas-overview-and-tutorial/)

We will install and set up mongoose to help us do db operations in our express app.

[https://mongoosejs.com/docs/index.html](https://mongoosejs.com/docs/index.html)
*
Remember to replace the connection string from the documentation with your own*.

 - Then we will create our washer schema.
 - We will try to save our washer from a  request.

An **API request** is a way of exchanging information between a client and a server.

Remember requests are only made by a client to a server.

**POST** → Request from the client to add data to the server.

**GET** → Get data from the server.

There are other http verbs or request types: PUT, PATCH read more about those.

[https://www.altexsoft.com/blog/rest-api-design/](https://www.altexsoft.com/blog/rest-api-design/)

In this case the react app is the client and our node app is the server.

    app.post("/", (req, res) => {
      let washerFromRequest = new Washer(req.body);
      washerFromRequest.save();
      res.send("Saved");
    });

## Setting up react

We are going to use the create-app tool to set up the project.

1. Make sure you have create-react-app installed globally:

	`npm install -g create-react-app`

2. Set up your react project:

	[https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

3. We going to use bootstrap to get default styling for our project

	`npm install bootstrap`

	[https://www.creative-tim.com/blog/web-design/how-to-use-bootstrap-with-reactjs/](https://www.creative-tim.com/blog/web-design/how-to-use-bootstrap-with-reactjs/)

4. Set up the react form.

5. Install axios

	Make a request to the backend using axios:

	[https://axios-http.com/docs/example](https://axios-http.com/docs/example)

## Backend work to support front-end requests

**CORS**

The is a security layer implemated by the browser to stop hackers from accessing the backend.

[http://expressjs.com/en/resources/middleware/cors.html](http://expressjs.com/en/resources/middleware/cors.html)

Make sure cors is installed [http://expressjs.com/en/resources/middleware/cors.html](http://expressjs.com/en/resources/middleware/cors.html) 

**Body parser**

Gets the request and puts it on our request body variable.

[http://expressjs.com/en/resources/middleware/body-parser.html](http://expressjs.com/en/resources/middleware/body-parser.html)