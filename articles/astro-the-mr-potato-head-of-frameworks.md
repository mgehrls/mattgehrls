---
author: Matt Gehrls
categories: ["frameworks"]
date: 08/25/23
featured: false
image: /images/astro-post-image.png
title: "Astro: The Mr. Potato Head of Frameworks"
subtitle: Simple by default, complex when you want it
---

Astro is an all in one web framework for building fast, content-focused websites. It's a new take on static site generation that combines the best parts of the Jamstack with the best parts of server-side rendering. Astro sites are fast by default and have JavaScript only when you need it. It's simple to start but you can make it as fancy and complex as you'd like.

It's the Mr. Potato Head of frameworks. 

## Performance is king

An important metric of site performance is Time to Interaction of TTI and the biggest bottleneck that slows down your time to interaction is javascript. No javascript, no bottleneck. If your site is static, the server just has to respond with a pre generated HTML doc. If you need some data from an API or database you have a few options including having the server take care of the request, using javascript on the server, or you can send the javascript to the client and have their computer make the request.

Astro's docs say it should load 40% faster than the same Next.JS page with 90% less javascript. They claim it should be nearly impossible to write a slow website in Astro. I have a few theories on how we could pull it off, but the point is we’d have to go out of our way.

## Simplicity leads to more performant, accessibile code

A simple astro file will look and run exactly like HTML. So when I’m writing an astro file, I’m much more likely to carefully consider the right semantic HTML element to use, and not just throw divs everywhere. I think part of the reason for that is the code you write in Astro looks nearly identical when you look at your code in the browser’s dev tools. It's a habit I plan to carry over to my Next.JS projects, and it's just a side effect of a the simple archetecture of Astro.

Another side effect to the archetecture, opting into javascript forces a vertical separation of concerns where you keep static content separate from interactive elements. Astro calls these Islands. Astro Islands are how the framework selectively hydrates your page, and keeps the javascript bundles you ship focused and minimal.

Say I have a simple brochure page that has just one element that requires javascript. Astro supports jsx syntax so I can use my React Component there just like I would in React, but if I want the javascript to be sent to the client’s browser, I have to tell it when to send that javascript, by giving the component a prop of client:load if you want the javascript to be sent ASAP, client:idle to wait until the browser is done loading everything else, or say the element is lower on the page, I can direct the browser to only load the javascript once the element becomes visible.

It’s fundamentals first, but if you want to get fancy, you can opt-in to more complex tools. Any Tailwind fans here? I love it. It would be a tough adjustment for me to go back to vanilla CSS. Typing npx astro add tailwindcss will download the dependencies and configure your project so you can get right back to work. If I need a lifecycle method, I can use a react component by putting npx astro add react in the terminal and making a tsx file.

In that way, I would argue Astro has feature parity with other frameworks and a few quality of life improvements.

## The Future of Astro and web development

Astro 3.0 released a few weeks ago and the headline was the introduction of a new integration with the View Transition API. If you aren’t familiar, the view transition API is an experimental feature that the Chrome dev team is working on. If you have elements that persist between navigation, the view transition API will animate or morph those elements transitioning from one view to the other with very little code on your part.

It’s experimental, and not only does it only work on Chrome, but as of last week it also broke links on Firefox. Definitely not production ready, but I think the promise is hard to ignore. The view transition api is a huge step toward making multi page sites feel like a single page application, but instead of writing complicated routing and animation, the browser is taking care of it. I’m really hoping other browsers pick up View Transition support. It’s less code to write, and improves the user’s experience. Win/win.

For those reasons I think, Astro is an easier sell than most frameworks because of it’s low barrier of entry. If you know HTML and a UI library, the file based routing should be easy to understand if not familiar, little to no new syntax to learn, and component based architecture shouldn’t be new either.
