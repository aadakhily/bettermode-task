# BetterFeel

# 🗄️ Project Structure

This App use Monorepo architecture and has the following packages/apps:

```sh
apps
|
+-- web
|   |
|   +-- src
|        |
|         +-- App  # application layer containing:
|         +-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|         +-- components        # shared components used across the entire application
|         +-- config            # global configurations, main functionality configs like router ect.
|         +-- hooks             # shared hooks used across the entire application
|         +-- layouts           # app layout for routes all routes or a segment of routes
|         +-- pages             # app routes
|         +-- services          # all api services that used in app must be define here
|        |       |
|        |       +-- graphQl
|        |       |       |
|        |       |        +-- queries # all graphql queries that used in the app
|        |       |       +-- mutations # all graphql mutations that used in app
|        |        +-- rest  #rest services must be define here
|        +-- utils  # shared utility functions
|
|
|
packages
    |
    +-- typescript-config      # shared ts.config in apps and packages
    +-- tailwind-config        # shared tailwind config
    +-- ui-kit
    |   +-- src
    |        |
    |         +-- components        # shared components used across the entire application
    |         +-- lib    # shared utility functions
    |

```

## Getting start

### install dependencies

To install all apps and packages dependencies, run the following command:

```
cd root
npm install
```

### Develop

To open all apps and packages in development mode, run the following command:

```
cd root
npm dev
```

or if you want to open specific app of package in develop mode, run the following command:

```
cd <YOUR-PACKAGE OR APP FOLDER>
npm dev
```

### Build

To build all apps and packages, run the following command:

```
cd root
npm build
```
