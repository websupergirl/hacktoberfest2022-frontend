<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://user-images.githubusercontent.com/38568655/197082856-927f23da-5494-4a2f-aec4-78c9422c42e4.png" width="160" height="160" />
  </a>
  <a href="https://www.medusa-commerce.com">
    <img alt="Medusa" src="https://user-images.githubusercontent.com/38568655/197082853-5469178f-a9b7-49ba-b784-0a2d0fb4112a.png" width="160" height="160" />
  </a>
  <a href="https://wordpress.org">
    <img alt="WordPress" src="https://user-images.githubusercontent.com/38568655/197082855-2c90226f-9169-442a-ba15-b7d5ae561aa2.png" width="160" height="160" />
  </a>
  <a href="https://supernikole.com">
    <img alt="That Super Girl" src="https://user-images.githubusercontent.com/38568655/197082858-ea6f2026-8b7a-4dd7-9bca-8c9939228834.png" width="160" height="160" />
  </a>
</p>
<h1 align="center">
  WordPress / Medusa / Gatsby Frontend
</h1>
<p align="center">
WordPress is the open source platform that powers the web. Medusa is an open-source headless commerce engine that enables developers to create amazing digital commerce experiences. Gatsby is the fastest frontend for the headless web. And Nikole decided they should all play together.
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT License." />
  </a>
  <a href="https://github.com/WordPress/WordPress/blob/master/license.txt">
    <img src="https://img.shields.io/badge/license-GPL-blue.svg" alt="WordPress is released under the GNU General Public License." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=websupergirl">
    <img src="https://img.shields.io/twitter/follow/websupergirl.svg?label=Follow%20@websupergirl" alt="Follow @websupergirl" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=wordpress">
    <img src="https://img.shields.io/twitter/follow/wordpress.svg?label=Follow%20@wordpress" alt="Follow @wordpress" />
  </a>
</p>

> **Prerequisites**: To use the starter you should have a Medusa server running locally on port 9000. Check out [Create a Medusa Server](https://docs.medusajs.com/quickstart/quick-start#create-a-medusa-server) for a quick setup.

1. **Create a new Gatsby project**

_ You must have the gatsby cli installed - [Homebrew](https://formulae.brew.sh/formula/gatsby-cli) / [npm](https://www.npmjs.com/package/gatsby-cli)_

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

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

   Open the your app's directory in your code editor of choice and edit `src/pages/index.jsx`. Save your changes and the browser will update in real time!

### Demo & Status

This site is currently [available as a live demo](https://steady-gumdrop-8afa5c.netlify.app/), integrated with Netlify.
[![Netlify Status](https://api.netlify.com/api/v1/badges/89d6cf03-104d-4591-b0fa-54a432d58430/deploy-status)](https://app.netlify.com/sites/steady-gumdrop-8afa5c/deploys)

---

---

### Development Update log
(for my mental sanity)

> added basic wordpress blog pulling capabilities
>
> modified readme to add better instructions