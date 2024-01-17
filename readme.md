# Web-Framework 2024 (Typescript)

A custom build web framework to use for building applications with, consisting of compilers for Typescript.

## consisting Of

- Json dev server
- Event listener support
- Parcel.js handler
- Typescript support
- Axios library

### Goals

- represent data on screen
- update data and notify app on data change
- ability to refresh data/render (like react)
- give User the ability to persist data on a back-end
- create Classes with Props, getters and setters without using Typescripts build in methods or using any additional bundles/frameworks such as React.js or Next.js

## Commands List

1."start:parcel":"rm -rf .parcel-cache && parcel index.html"  
2."start:db": "json-server -w ./db.json",
3."start": "concurrently npm:start:\*"

## Getting Started

1. npm I (install dependencies)
2. npm run start (runs both json server on localhost:3000 and parcel)
3. start working on your project (look through models folder to see how to create new objects easily and change default variables)

### Jakob Douglas 2024

Feel free to use this project for learning purposes
