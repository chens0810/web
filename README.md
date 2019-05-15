# vue-frontend-boilerpalte


> Please use Nodejs > 9.x

> Node version > 10.x is recommended

Frontend boilerpalte for web and electron uses Webpack4 & Vue.js

### Set mirrors and repository

```bash
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```

Switch repository with nrm

```bash
npm install nrm -g
nrm use taobao
```

### Setup development env


Install dependencies

``` bash
npm install
```

Start development for web

```bash
npm run dev
```

Start development for electron client

```bash
npm run dev:client
```

### Build and Release

Build for web

```bash
# testing with devtoll
npm run build

# production with gzip
npm run dist
```

Build for electron client

```bash
# testing with devtoll
npm run build:client

# production
npm run dist:client
```

Pack for electron client

> Other OS plat can be added in package.json

```bash
# Unpacked client
npm run client:unpack

# Win32 application
npm run client:win32

# Win32 application
npm run client:win64
```

# Tips

> Node-sass is a bitch for some Windows users! Copy this module from others before install deps if necessary.

> Install deps with `npm` might cause IE crash with development mode because of these reasons:
  * `npm` will fetch devDependency `ansi-regex` with version ^3.0.0, which uses arrow function in its source code.

> There are two approaches to resolve static resources, especially images, in `/.vue` file and make it works in both browser and electron.
  * Import static resources by using `style` attribute of html elements. And DO NOT start with `/`.
    ```html
    <template>
      ...
      <section style="background-image: url(static/image/logo.png);" />
      ...
    </template>
  * Convert small image to stream data, which can be used in `<style>`.
    ```scss
    <style lang="scss" scoped>
      ...
      .close-icon {
        background-image: url(data:image/svg+xml;base64,PD...4=);
      }
      ...
    </style>
    ```
> Vue validation is removed by default. You can execute command `npm run dll -- --dev` to get it back.
  * It is useful for identifying potential code issue but not essential.
    Remember, you have to run `npm run dll` before production release, otherwise it will affect performance.

#  Unit Testing

TBD

---
