---
author: matt-gehrls
categories: ["web accessibility"]
date: 10/5/23
image: /images/accessibility.png
title: Web Accessibility for Everyone... Hopefully
description: A comprehensive overview of web accessibility for web developers in 2023 including tips and best practices.
subtitle: A web devs guide to web accessibility
slug: web-accessibility-for-everyone-hopefully
---

# Web Accessibility for Everyone... Hopefully

Website accessibility is a vital aspect of modern web development. In an era where the internet connects us all, ensuring that your website caters to a diverse audience is not only ethically the right thing to do but also makes good business sense. As web developers, it is our responsibility to create online experiences that are accessible to as many people as possible.

How can we make sure we account for everyone? Let’s break down the most common groups of physical and mental impairment:

- Visual
- Auditory
- Motor
- Cognitive and
- Seizure & Vestibular Disorders

Understanding these groups and how they interact with the internet will empower us to craft exceptional web experiences. There is a remarkable amount of overlap between how we can support these different groups, and making an experience that the typical user can enjoy, making accessibility not just a necessity but also good design practice. We'll start with an overview of each group, the technologies available to enhance their experience, and conclude with practical tips tailored for web developers.

\*\*\*Disclaimer: This is meant to help web developers get a basic handle on accessibility issues of 2023. For that reason, I’ve included more in depth sources on each topic if you have questions that still need answers.

## Visual Impairment

When it comes to web accessibility, visual impairment might seem like the most straightforward consideration. Many frameworks have built-in mechanisms that prompt us to add alt text to images, and we often pat ourselves on the back for complying and move on. There is more to consider.

[WebAim](https://webaim.org/) classifies visual impairment into three groups:

1. Blindness: People who are completely blind.
2. Low Vision: Individuals with partial sight or reduced visual acuity.
3. Color Blindness: Those who have difficulty distinguishing certain colors.

While you may think that catering to visual impairment covers a small portion of your audience, consider the following statistics:

1. Blindness and low vision affect approximately 8% of the population.
2. Color blindness impacts 4.25% of the population, with 8% of men and 0.5% of women affected.
3. Moreover, as our population ages, low vision is becoming an increasingly significant accessibility consideration, particularly among internet-savvy seniors.

### How to designing for visual impairment

1. Screen Readers: These tools are essential for those who rely on auditory feedback to access web content.
2. Keyboard Navigation: Many individuals with visual impairments rely on keyboard navigation to move through web pages.
3. Magnification: Providing the ability to enlarge text and images is crucial for users with low vision.
4. Contrast: Ensuring sufficient contrast between text and background improves readability for all users, especially those with visual impairments.

![Grand Rapids bus map from the perspective of users with different types of color blindness.](/images/colorblindness-example.jpg)
The image above shows the importance of contrast and color choice for users with color blindness.

As we explore each of these considerations, we'll delve deeper into why they matter and how they can enhance the accessibility of your website.

## Hearing impairment

15% of American adults report experiencing some degree of hearing difficulty? While technology continues to advance, with AI-driven automatic speech recognition (ASR) getting better every year, we can anticipate improvements in automated captions that benefit users with hearing impairments. In the meantime, it's crucial to take proactive steps to ensure accessibility.

One common complaint among hearing-impaired users is encountering incorrect closed captioning or transcripts when consuming multimedia content. If you have a site with significant audio content, consider the source of your captions and strive for accuracy.

It might surprise you that users with hearing impairment use a diverse range of tools and methods to access digital content. Some individuals rely on screen readers connected to live braille machines, and navigate websites using keyboard shortcuts. These tools play a vital role in enabling access to information and digital experiences.

As content creators and web developers, here are the key considerations to account for when aiming to make your content inclusive and accessible for users with hearing impairment:

1. Closed Captions/Transcripts: Ensuring that multimedia content includes accurate and synchronized closed captions or transcripts is fundamental for hearing-impaired users.
2. Keyboard Navigation: Implementing keyboard navigation functionality allows users to navigate your website without relying on a mouse, benefiting not only those with hearing impairments but also individuals with visual, and mobility challenges.
3. Screen Readers: Optimizing your website for compatibility with screen readers is essential. Screen readers convert on-screen text and elements into synthesized speech, enabling users to understand and interact with your content.

> Sources:\
> [Accessibility Checker - Deaf Acessibility Blog](https://www.accessibilitychecker.org/blog/deaf-accessibility/)\
> [WebAIM - Auditory Impairment](https://webaim.org/articles/auditory/)

## Motor impairments

What makes the experience of users with motor impairments unique when navigating the web? One key aspect is their choice of input devices. These devices often assist with keyboard navigation. While keyboard navigation is undeniably helpful for many users with motor impairments, it is important to recognize that isn’t the whole picture. Some use the mouse, and zoom in to make content larger and easier to click on and interact with.

Here are the essential considerations when designing for users with motor impairments:

1. Keyboard Navigation: Implementing keyboard-friendly navigation is a cornerstone of web accessibility for visual, hearing, and motor impairments.
2. Magnification: Recognizing that users may need to zoom in to make that button easier to interact with effectively is crucial. Ensuring that your website remains functional and visually understandable while magnified is vital.

> Sources:\
> [Medium - Web Access for Physical and Motor Impairments](https://medium.com/nyc-design/web-accessibility-for-physical-or-motor-impairments-4fe5e170e375)\
> [WebAIM - Motor Disability Survey](https://webaim.org/projects/motordisabilitysurvey/)

## Cognitive impairment

Cognitive impairment encompasses a vast and diverse group of users, making it one of the most challenging yet critical aspects of web accessibility. This group includes individuals facing various cognitive challenges, such as memory issues, problem-solving difficulties, attention deficits, struggles with reading, linguistic and verbal comprehension, math comprehension, and visual comprehension. The scope is vast, and the impact on user interactions with websites can be profound.

To understand the significance of designing for cognitive impairment, it's essential to acknowledge that cognitive challenges exist on a spectrum. We all have moments when we struggle with memory, focus, or understanding complex information because cognitive abilities naturally vary among individuals. However, for some users, these challenges can be more persistent and pronounced.

User experience (UX) is a term familiar to web developers and designers. It encapsulates the idea that a good website should provide a seamless and satisfying experience for all users. It's not just about aesthetics but also about functionality, ease of use, and content accessibility. While good UX benefits everyone, it becomes even more critical when considering users with cognitive impairments.

UX is an entire field, but to get you started, I recommend focusing on the following principles:

- Clarity and Simplicity: Keep content clear, concise, and easily digestible. Avoid jargon, complex language, or information overload.
- Predictability: Maintain a consistent and predictable layout and navigation structure throughout your website. Users with cognitive impairments often rely on familiarity.
- Meaningful Visuals: Use visuals and icons that support content comprehension, but avoid clutter or distractions.
- Assistive Technology: Ensure compatibility with assistive technologies like screen readers, which can assist users with cognitive impairments in processing information.
- User Testing: Involve individuals with cognitive impairments in user testing and gather their feedback. Their insights are invaluable in identifying and addressing usability issues.

Sources:\
[WebAim](https://webaim.org/articles/cognitive/design)\
[W3.org](https://www.w3.org/WAI/cognitive/)

## Seizure and Vestibular Disorders

These disorders affect a smaller portion of the population, but their impact on user experience can be significant, and in some cases dangerous. Let's delve into practical tips to ensure your website is accessible to individuals with seizure and vestibular disorders.

Seizure disorders, particularly photosensitive epilepsy, pose a real risk when it comes to web design. Large, highly contrasting flashes recurring more than 3 times a second can trigger seizures in susceptible individuals. The color red is particularly problematic in this context. To minimize this risk:

- Avoid Flashing Content: Refrain from using large, rapid, and highly contrasting flashes in your design, especially in the color red.
- Limit Animated Scrolling: Some individuals with vestibular disorders may experience dizziness and nausea when exposed to certain design elements, such as animated scrolling that lasts longer than 250 milliseconds or extensive parallax movement. Keep scrolling animations brief, avoiding prolonged and disorienting effects.
- Offer Animation Options: Give users the ability to disable animation, particularly if your website features extensive or infinite animations.
- Utilize 'prefers-reduced-motion': Implement this CSS feature supported by all major browsers to respect user preferences and reduce motion animations when necessary.
  [Prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

## Screen Readers

Screen readers are essential tools for individuals with visual impairments, and ensuring that your website is screen reader-friendly is crucial for an inclusive online experience. Let's explore some statistics and practical tips to improve accessibility for screen reader users:

### Header Hierarchy

Nearly 70% of screen reader users rely on headers to navigate web content. Ensure that your pages have a clear hierarchy with only one h1 for the primary content headline. Use h2, h3, and so on for subtopics.

### Landmarks

Over 50% of screen reader users use semantic HTML elements like section, article, header, and footer to navigate. These elements help users understand page structure and content organization. Consider their use for better accessibility.

### Aria Labels

If you have more than one of something people usually expect one of, like a navbar use aria labels to improve comprehension. For example, if you have two navbars, one for the header and one for the footer, you can use aria-label=“header” and aria-label=“footer” to help screen readers understand the difference. Note that screen readers will already announce the element so don't say "navbar" or navigation in the label. It's redundant.

### Images for screen readers

If the alt attribute is an empty string a screen reader will skip that image entirely, so an empty string as alt text is recommended for images that are entirely decorative.
Don’t put the word “image” or “picture” in the alt text. It’s redundant.

If the content of the image is important to the understanding of the page, consider using a figure component with a figcaption. The figcaption will be displayed by default. It can also be helpful as a parent for multiple image tags. \*\*\*Alt texts are still important on images inside a figure with figcaption.

[Alt texts vs Figcaptions](https://thoughtbot.com/blog/alt-vs-figcaption)

### Other considerations for Screen readers

Acronyms, abbreviations, or words that are spelled the same but sound different might be difficult for screen reader users. It is comforting that screen reader users are used to confusion around those edge cases, and screen readers can account for them by reading the misunderstood text character by character.

Using correct punctuation changes the screen reader's inflection. If for some ungodly reason you aren’t using correct punctuation, you are not effectively communicating with very many users, with or without an impairment.

Sources:\
[Advice for Creating Content for Screen Readers](https://accessibility.blog.gov.uk/2017/02/08/advice-for-creating-content-that-works-well-with-screen-readers/)\
[Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey9/)

## Keyboard Navigation

Navigating the web using a keyboard is not just a matter of accessibility; it's a fundamental way to make your website more inclusive. Keyboard navigation benefits people with various impairment classifications, including visual, auditory, and motor impairments. To ensure your site is truly accessible, consider the following key aspects of keyboard navigation:

Tab Navigation: Start by testing whether you can navigate through your entire webpage using only the Tab key on your keyboard. This simple but essential test helps ensure that keyboard users can reach all interactive elements.

Tab Order: Pay attention to the order in which elements are tabbed through. Does it follow a logical and intuitive sequence that mirrors the visual layout of your content?

Focus Indication: Can you clearly tell which element is currently in focus as you navigate with the Tab key? Proper focus styles are crucial for keyboard users to understand where they are on your page.

Keyboard Interaction: Ensure that keyboard users can interact with elements using the Enter key in the same way they would with a mouse click. Consistency in interaction methods is key to a seamless user experience.

### Handling Focus Changes

Focus Management: If your website has events that trigger changes in focus, such as pop-up dialogs or dynamic content, it's essential to manage focus properly. For instance, if a user activates a dialog, ensure that the focus is shifted to the dialog, and pressing the Escape key returns focus to the previous state.

ARIA Roles and Attributes: Consider using ARIA (Accessible Rich Internet Applications) roles and attributes to manage focus changes effectively. ARIA can help screen readers and assistive technologies understand and communicate the dynamic nature of your content.

Remember that testing with keyboard-only users and users of screen readers can provide valuable insights into the usability of your website. By addressing keyboard navigation issues, you not only improve accessibility but also create a more user-friendly experience for everyone. For more in-depth guidance, explore additional resources on web accessibility testing and best practices."

I highly recommend reading from WebAim directly on this subject [here](https://webaim.org/techniques/keyboard/).

Sources:\
[Colorado State University - Keyboard Navigation Best Practices](https://www.chhs.colostate.edu/accessibility/best-practices-how-tos/keyboard-navigation/)

## Contrast

Contrast is one of the most critical aspects of web accessibility. It refers to the difference in color between elements and plays a significant role in making content not only visually appealing but also comprehensible. This section explores the importance of contrast and provides practical guidance for achieving it.

### Why Contrast Matters

Contrast is crucial, primarily when it comes to elements that convey information, such as text. However, it extends beyond text to encompass various design elements, as color is a powerful means of communication. Adequate contrast ensures that text and other content stand out clearly against their background, making it easy to read and understand. Contrast is essential for individuals with visual impairments, but it benefits all users, enhancing the overall user experience.

### Checking Contrast

To ensure your website meets accessibility standards, take a moment to check your color palette against itself using tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/). Pay particular attention to text and its background where high contrast is a must. A general best practice is to use colors adjacent to black and white for text and background, reserving your brand colors for decoration and attention-grabbing elements.

When using text over images or gradients, remember that cool aesthetics must not compromise readability. Make sure that text remains legible to the majority of users. Experiment with background overlays, shadows, or other techniques to improve contrast.

## Magnification

Screen magnification plays a crucial role in enabling individuals with visual impairments such as cataracts, glaucoma, or degenerative illnesses to access and navigate the web. In this section, we'll explore the importance of design and image formats and their impact on users who rely on screen magnification.

Many individuals with visual and/or motor impairments heavily depend on screen magnification or zoom functionality to interact with digital content effectively. When considering web design, it's essential to keep in mind that not all users experience the same level of visual acuity.

Many of the design principles for screen magnification also apply to creating responsive designs as well. Avoid fixed sizes for fonts in particular but other important elements too! Forms, buttons, and images should be flexible.

### Image Formats

Your choice of image format can have a significant impact on the accessibility of your website. While WebP excels in performance, it's important to understand the trade-offs. When a webp image is zoomed in, it may not look as crisp as a JPEG or PNG would. Therefore, the choice of image format should consider the specific context:

For images that are already large or intricate, WebP can be a viable choice as the loss of image quality during zoom may not be as noticeable. However, for smaller images on your page, particularly those with critical content, WebP may not be suitable for low vision users who rely on screen magnification. In such cases, opting for a JPEG or PNG format may be a more accessible choice.

Additional Resources:\
[Best Image Format Blog](https://themeisle.com/blog/best-image-format/)

## Closed Captions / Transcripts

Closed captions and transcripts play a pivotal role in making web content accessible to individuals with hearing impairments and those who prefer text-based formats. Offering these options to your user benefits the users by improving comprehension for some and making the content useful to the hearing impaired. It also can improve your SEO because search engines can’t catalog the content of audio.

When developing web content, consider the following best practices for implementing closed captions and transcripts:

- Closed Captions for Videos
- Manual vs. Automatic Captions: While automatic captioning tools are available, they may not always provide accurate captions. Whenever possible, opt for manually generated captions for accuracy.
- Synchronized Timing: Ensure that captions are synchronized with the audio and video content, including accurate placement and timing of captions for sound effects and speaker changes.
- Provide Accessible Media Players
- Accessible Controls: Use media players that are compatible with screen readers and keyboard navigation. Include controls for adjusting the volume, captions, and playback speed.
- Offer Downloadable Transcripts
- Transcripts as Alternatives: Provide downloadable text transcripts alongside multimedia content, making them accessible to users who prefer to read or require screen readers.

Sources:\
[W3.org](https://www.w3.org/WAI/media/av/captions/)\
[3PlayMedia - Closed Captioning](https://www.3playmedia.com/2017/07/21/what-is-closed-captioning/)

## Other Considerations

### Forms

Forms are a crucial part of the web experience, and ensuring that they are accessible is essential. Here are some tips to keep in mind when designing forms:

- Labels: Use labels to identify form fields. Labels should be visible and associated with their respective fields.
- Error Messages: Ensure that error messages are clearly visible and associated with the relevant form fields. Tell people how to fix their error.
- Focus: Ensure that focus is managed correctly when interacting with form fields. When a user makes an error, consider shifting focus to the element where the error occurred.
- Keyboard Navigation: Ensure that users can navigate through form fields using the Tab key on their keyboard.
- Validation: Provide clear instructions and validation messages to help users fill out forms correctly.

[W3 forms guide](https://www.w3.org/WAI/tutorials/forms/)

### Users with bad internet

I've mostly focused on users with disabilities, but infrastructure is also a hindrance to accessibility. Users with slow internet connections or data caps will appreciate your efforts to keep your site lightweight. This is also good for SEO and performance. It is easy to forget that not everyone has access to the same internet speeds as you do.

## Summary

Web accessibility is a vast and complex topic, and this article only scratches the surface. However, I hope that it has provided you with a solid foundation for understanding the importance of accessibility and how to make your website more inclusive. I hope you come away feeling like accessibility best practices should just be considered regular best practices because every user benefits. By implementing the tips and best practices outlined in this article, you can ensure that your website is accessible to a diverse audience, including individuals with disabilities. Thank you for reading.
