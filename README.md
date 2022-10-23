<p align="center">
  <img alt="WordPress / Medusa / Gatsby Frontend" src="https://user-images.githubusercontent.com/38568655/197411390-167d563e-467d-491c-8dd7-c6c58dfd09dc.png" />
</p>
<h1 align="center">
  WordPress / Medusa / Gatsby Frontend
</h1>
<p align="center">
WordPress is the open source platform that powers the web. Medusa is an open-source headless commerce engine that enables developers to create amazing digital commerce experiences. Gatsby is the fastest frontend for the headless web. And Nikole decided they should all play together.
</p>

> **Prerequisites**: 
> 
> To use the starter you should have a Medusa server running locally on port 9000. Check out [Create a Medusa Server](https://docs.medusajs.com/quickstart/quick-start#create-a-medusa-server) for a quick setup.
>
> You will also need to set up a WordPress installation as outlined in the [WordPress Theme repo](https://github.com/websupergirl/hacktober2022-wptheme).

1. **Create a new Gatsby project**

*You must have the gatsby cli installed - [Homebrew](https://formulae.brew.sh/formula/gatsby-cli) / [npm](https://www.npmjs.com/package/gatsby-cli)*

```
gatsby new your-app https://github.com/you/your-app.git
# ie
gatsby new hacktoberfest2022-frontend https://github.com/websupergirl/hacktoberfest2022-frontend.git
```

2. **Check your Medusa Server**

See instructions for [Test Your Server](https://docs.medusajs.com/quickstart/quick-start/#test-your-server) if you have not already.

3. **Start the Development Build**

You should now be able to start developing your site.

```
cd my-medusa-storefront
mv .env.template .env.development
gatsby develop
```

4. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your store data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

   Open the your app's directory in your code editor of choice and edit `src/pages/index.jsx`. Save your changes and the browser will update in real time!

### Demo & Status

This site is currently [available as a live demo](https://steady-gumdrop-8afa5c.netlify.app/), integrated with Netlify.
[![Netlify Status](https://api.netlify.com/api/v1/badges/89d6cf03-104d-4591-b0fa-54a432d58430/deploy-status)](https://app.netlify.com/sites/steady-gumdrop-8afa5c/deploys)

### About

This project was created by Nikole Garcia [Github](https://github.com/websupergirl) - [Twitter](https://twitter.com/websupergirl) - Discord supernikole#2685

I wanted to combine a headless WordPress install with a headless e-commerce solution to see how it would work. The store itself is not very developed - most of my time was spent in the integration of the two, as I had never used MedusaJS or Gatsby before.

### Credits

* [Gatsby](https://www.gatsbyjs.com)
* [Medusa](https://www.medusa-commerce.com)
* [WordPress](https://wordpress.org)
* [That Super Girl](https://supernikole.com)


---

---

### Development Update log
(for my mental sanity)

> add cover photo for project and update readme
>
> add basic wordpress blog pulling capabilities
>
> modify readme to add better instructions