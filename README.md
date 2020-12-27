# GitHub Explorer

[![Netlify Status](https://api.netlify.com/api/v1/badges/9bae2cf3-f7ec-4736-8539-db110e435396/deploy-status)](https://app.netlify.com/sites/github-explorer-rickyalmeida/deploys)

![image](https://user-images.githubusercontent.com/60705947/103180432-8897fb80-4874-11eb-8628-31bdc7d5710c.png)

## About the challenge

The challenge was to build a single page application using ReactJS and the concept of declaritive UI to explore GitHub repositories and find details about them, such as number of stars, forks and issues.

## Built With

- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [ReactJS](https://pt-br.reactjs.org/) - A JavaScript library for creating user interfaces.
- [Styled Components](https://styled-components.com/) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- [Styled System](https://styled-system.com/) - Styled System lets you quickly build custom UI components with constraint-based style props based on scales defined in your theme.
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy to use validation.

## Usage

The project is deployed and can be accessed at https://github-explorer-rickyalmeida.netlify.app/

## Installation

1. Clone the repository:

```sh
git clone https://github.com/rickyalmeidadev/desafio-reactjs-frontend
```

2. Install packages:

```sh
yarn install
```

3. Make sure the following port is available:

```sh
PORT: 3000
```

4. Run the app:

```sh
yarn start
```

5. Access the application through the following link afer doing the steps 1 - 4.

```sh
http://localhost:3000/
```

## Structure

```
src
├── assets
│   ├── icons
│   │   └── <icon-file-name>.svg
│   ├── images
│   │   └── <image-file-name>.png
│   └── styles
│       └── <style-file-name>.ts
├── components
│   ├── <component-folder-name>
│   │   ├── <component-file-name>.tsx
│   │   └── index.ts
│   └── index.ts
├── context
│   ├── <context-file-name>.tsx
│   └── index.tsx
├── helpers
│   └── <helper-file-name>.ts
├── interfaces
│   └── <interface-file-name>.d.ts
├── pages
│   └── <page-folder-name>
│       ├── <page-file-name>.tsx
│       └── index.ts
├── providers
│   └── <provider-file-name>.ts
├── routes
│   ├── <route-file-name>.tsx
│   └── index.tsx
├── services
│   └── <service-file-name>.ts
├── App.tsx
└── index.tsx
```


## Author

Made with :heart: by Ricky Almeida - [email](mailto:ricky.almeida.dev@gmail.com) - [linkedin](https://www.linkedin.com/in/rickyalmeidadev)