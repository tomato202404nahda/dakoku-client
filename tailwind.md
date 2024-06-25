# TailwindCSS

## Why TailwindCSS？
TailwindCSS makes the styling process in development easier, since it automates media queries for responsive design and provides utility classes for inline styling, meaning we don't have to define our own custom classes and breakpoints. In addition to that, TailwindCSS also purges unused classes during build process which minimizes the size of the build output, hence better performance. Fuse themes also uses pre-configured TailwindCSS in their templates, therefore it would be better to use the template in conjunction with TailwindCSS.

## Basics of TailwindCSS

In the Fuse React template TailwindCSS is already pre-configured so it can be used directly. However, if you want to use TailwindCSS on a newly created project, the following steps are necessary. The example below will apply to React projects created with Vite.

### 1.  Create a new React project with Vite and move to the project directory:

    > npm create vite@latest [project-name] -- --template react
    
    > cd [project-name]

### 2.  Install TailwindCSS by running the following command in your terminal:

    > npm install -D tailwindcss postcss autoprefixer


    > npx tailwindcss init -p

### 3.  npx tailwindcss init -p will generate tailwindcss.config.js (or tailwindcss.config.ts depending on the project language chosen). In the config file you need to specify what type of contents you want where you want to use TailwindCSS classes, so TailwindCSS knows what type it needs to process. For example: 

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
The configuration above will instruct TailwindCSS to analyze the classes of the elements in the index.html file in the project's root directory and all js,ts,jsx, and tsx files under the src directory and its subdirectories.

### 4. Add the following tailwind directives in the index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
In the Fuse React template, the directives are located in three separate css files, app-base.css, app-components.css, and app-utilities.css which are located in the ~/src/styles/ directory. All of these css files are imported into the index.tsx file.

### 5. Now TailwindCSS is ready to be used in your project.

#### The basic usage of TailwindCSS is as follows: 

In tsx/jsx files the TailwindCSS classes are used in the className attribute, whereas in html files the TailwindCSS classes are used in the class attribute

#### Example usage in tsx/jsx would be: 
```js
export default function App() {
  return (
    <element className="text-3xl font-bold underline">
      Hello world!
    </element>
  )
}
```

#### Example usage in html would be:
```html
<element class="text-3xl font-bold underline">
    Hello world
</element>
```

The above example would style the <element> element with the following css properties

```css
{
    font-size: 2.4rem/*12px*/;
    font-weight: 700;
    text-decoration: underline;
}
```
### Tool to Make Development with Tailwind Easier

In Visual Studio Code, you can install the Tailwind CSS Intellisense extension provided by Tailwind Labs.
[Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Commonly used utility classes in TailwindCSS

### 1. Background:

In TailwindCSS, background styles are applied using the 'bg-' class. Link to the official documentation for background styles will be provided below.

#### background color
[https://tailwindcss.com/docs/background-color](https://tailwindcss.com/docs/background-color)

#### background size
[https://tailwindcss.com/docs/background-size](https://tailwindcss.com/docs/background-size)

### 2. Spacing

#### Padding 
[https://tailwindcss.com/docs/padding](https://tailwindcss.com/docs/padding)

#### Margin
[https://tailwindcss.com/docs/margin](https://tailwindcss.com/docs/margin)

#### Gap (For flex and Grid layouts)
[https://tailwindcss.com/docs/gap](https://tailwindcss.com/docs/gap)

### 3. Sizing

#### Width 
[https://tailwindcss.com/docs/width](https://tailwindcss.com/docs/width)

#### Height
[https://tailwindcss.com/docs/height](https://tailwindcss.com/docs/height)

### 4. Layout

#### Flex 
[https://tailwindcss.com/docs/flex](https://tailwindcss.com/docs/flex)

#### Flex Direction
[https://tailwindcss.com/docs/flex-direction](https://tailwindcss.com/docs/flex-direction)

#### Flex Wrap 
[https://tailwindcss.com/docs/flex-wrap](https://tailwindcss.com/docs/flex-wrap)

#### Grid 
[https://tailwindcss.com/docs/grid-template-columns](https://tailwindcss.com/docs/grid-template-columns)
[https://tailwindcss.com/docs/grid-template-rows](https://tailwindcss.com/docs/grid-template-rows)
[https://tailwindcss.com/docs/grid-auto-flow](https://tailwindcss.com/docs/grid-auto-flow)


### 5. Alignment 

#### Text Align
[https://tailwindcss.com/docs/text-align](https://tailwindcss.com/docs/text-align)

#### Vertical Align
[https://tailwindcss.com/docs/vertical-align](https://tailwindcss.com/docs/vertical-align)

#### Justify Content
[https://tailwindcss.com/docs/justify-content](https://tailwindcss.com/docs/justify-content)


#### Align Items
[https://tailwindcss.com/docs/align-items](https://tailwindcss.com/docs/align-items)

### 6. Border 

#### Border Width
[https://tailwindcss.com/docs/border-width](https://tailwindcss.com/docs/border-width)

#### Border-Color
[https://tailwindcss.com/docs/border-color](https://tailwindcss.com/docs/border-color)

#### Border-Style
[https://tailwindcss.com/docs/border-style](https://tailwindcss.com/docs/border-style)

#### Border-Radius
[https://tailwindcss.com/docs/border-radius](https://tailwindcss.com/docs/border-radius)

### 7. Typography

#### Font Size
[https://tailwindcss.com/docs/font-size](https://tailwindcss.com/docs/font-size)

#### Text Color
[https://tailwindcss.com/docs/text-color](https://tailwindcss.com/docs/text-color)

#### Font Weight 
[https://tailwindcss.com/docs/font-weight](https://tailwindcss.com/docs/font-weight)




### Using arbitrary value for utility classes

It is possible to use arbitrary values in the utility classes directly inline. 
#### Common Cases:
##### Case 1: Arbitrary Size:

You need the div to be exactly 420 pixels wide, the implementation would be as follows:
```html
<div class="w-[420px]">
    Div of width 420 pixels
</div>
```
Other units that works in Vanilla CSS would also be applicable (e.g.: px, em, rem, vw, vh, %). It is also applicable to other utility classes that is used to manipulate size (e.g.: font size, height, padding, etc)

#### Case 2: Arbitrary Color: 

You need the background color of a div to be of color #fce8b3, the implementation would be as follows:

```html
<div class="bg-[#fce8b3]">
    Div of bg #fce8b3.
</div>
```
Other than hex color format, rgb values also work (e.g.: rgb(252, 232, 179))

### Other: Commonly used pseudo classes in tailwind

#### Hover, Active, Focus:
Example: 
```html
<button class="w-full h-auto bg-white hover:bg-grey-300 active:bg-grey-600 focus:ring focus:ring-slate-300">Hello</button>
```
The equivalent in CSS would be:
```css
button {
    width: 100%;
    height: auto;
    background-color: white;
}

button:hover {
    background-color: #d1d5db; /* Equivalent to Tailwind's grey-300 */
}

button:active {
    background-color: #6b7280; /* Equivalent to Tailwind's grey-600 */
}

button:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5); /* Equivalent to Tailwind's focus:ring */
}
```


#### Breakpoints for Responsive Design

Reference [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design)

Example: 
```html
<div id="big" class="hidden md:flex">Hide in small screen</div>
<div id="small" class="flex md:hidden">Hide in big screen</div>
```

The above example will show the div with id "big" in medium and bigger screens while hiding the div with id "small".
It will also hide the div with id "big" in small screens while showing the div with id "small".

## Customizing TailwindCSS via config

It is also possible to customize or extend TailwindCSS via the configuration file.
For example:

The default breakpoint in TailwindCSS are as follows:

|Breakpoint prefix	| Minimum width	|CSS|
|-------------------|----------------|-----------------------------------------|
|sm	| 640px	|@media (min-width: 640px) { ... }|
|md	| 768px	|@media (min-width: 768px) { ... }|
|lg	| 1024px	|@media (min-width: 1024px) { ... }|
|xl	| 1280px	|@media (min-width: 1280px) { ... }|
|2xl	| 1536px	|@media (min-width: 1536px) { ... }|

It can be overridden by modifying the config file as follows:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },},}
```
which results in the following:

|Breakpoint prefix	| Minimum width	|CSS|
|-------------------|----------------|-----------------------------------------|
|sm	| 480px	|@media (min-width: 480px) { ... }|
|md	| 768px	|@media (min-width: 768px) { ... }|
|lg	| 976px	|@media (min-width: 976px) { ... }|
|xl	| 1440px	|@media (min-width: 1440px) { ... }|
|2xl	| 1536px	|@media (min-width: 1536px) { ... }|

It is also possible to add additional variant inside the config, via the extend property of theme.

For example: 
```js
module.exports = {
  theme: {
    extend: {
      screens: {
        '3xl': '2600px', // Adds a new `3xl:` screen variant
      }
    }
  }
}
```

the above code adds a new breakpoint prefix to Tailwind.
|Breakpoint prefix	| Minimum width	|CSS|
|-------------------|----------------|-----------------------------------------|
|3xl	| 2600px	|@media (min-width: 2600px) { ... }|

The complete guide to config file customization is available here: 
[https://tailwindcss.com/docs/theme#customizing-the-default-theme](https://tailwindcss.com/docs/theme#customizing-the-default-theme)




##References 

[https://tailwindcss.com/](https://tailwindcss.com/)