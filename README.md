<p align="center">
  <a href="https://www.medusa-commerce.com">
    <img alt="Medusa" src="https://user-images.githubusercontent.com/7554214/153162406-bf8fd16f-aa98-4604-b87b-e13ab4baf604.png" width="100" />
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

---

---

### Development Update log
(for my mental sanity)

> modified readme to add better instructions