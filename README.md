# <em><strong>Moka!</strong></em>

Welcome to <em><strong>Moka!</strong></em>, a coffee-oriented recipe site! ☕🥐

## Table of Contents

1. [Overview](#overview)
2. [Development Process](#development-process)
3. [Learnings](#learnings)
4. [Backend Link](#backend-link)
5. [License](#license)

## Overview

<em><strong>Moka!</strong></em> is a coffee-oriented recipe site. It is where users can view or submit coffee recipes if they are logged in. It is a React-built website, where the user's information gets saved in a MongoDB database, which will then be fetched whenever needed through the use of APIs.

## Development Process

<em><strong>Moka!</strong></em> was built using the Vite/React framework. Using Vite allowed for a quick project set-up, which enabled me to get started as soon as possible.

For design, TailwindCSS along with the it's UI library, DaisyUI, gave the website a responsive design and feel, without the need to write long lines of CSS code.

React was shown to be very helpful when it came to development, since it's component-oriented design removes the need for messy and redundant code. To add extra functionalites to React, I used the "React Router Dom" library to add link navigation to the website.

This entire project is depedent on the use of REST APIs. For the APIs, I used Express along with Node, in order to create APIs that would add form-inputted information to the database (MongoDB), which allows the user information to be fetched throughout the program.

Speaking of which, MongoDB was used as the sole database for this project, as it's simple structure allows for quick data transmission and data fetching, which is needed for this project. The JavaScript library, Mongoose, was used to add MongoDB functionality to the project.

Besides the implementation of APIs, this project also features several libraries such as JSON Web Token and React Cookies, which aided in user authentication.

All of the frontend of this project is being hosted Vercel, while the back end is hosted on Render.

## Learnings

After completing this project, I have learned how React dynamically renders components through the `map()` method. This was used to render all of the recipes from the database. In addition, I was exposed to tokens, user authentication, and the local storage, which served as the basis of the authentication feature of the program.

## Backend Link
Since <em><strong>Moka!'s</strong></em> back end is being hosted on a different service, here is the link to the backend's repo: https://github.com/bchan9803/moka-backend

## License

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.
