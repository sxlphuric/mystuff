# Link Organizer
## Overview
This is Link Organizer. It is a simple Angular app styled in PaperCSS that can organize links, sections, and buttons. It also has a backlink to the main website.
<img width="1381" height="708" alt="image" src="https://github.com/user-attachments/assets/c0b5f022-a17b-411f-8d96-0632da8bcdec" />
## Project Structure
*Assuming the `mystuff` folder is root*
```
README.MD <- You are here
/
public - folder containing stuff like public images and favicons
|_ favicon.ico - favicon for the website, clouds icon
src - folder containing all the angular code for the website
|_ app - folder containing all components and majority of code
  |_ classes
    |_ link.ts - Typescript interface representing a link
    |_ stuff-category.spec.ts - Class representing a category – specifications
    |_ stuff-category.ts - Class representing a category
  |_ components
    |_ collapsibles - component for a collapsible category element
    |_ subdomains - component for a button
  |_ service
    |_ business.ts - File contaning all of the data for the website
    |_ business.spec.ts - Default specifications for an Angular service
  |_ app.html - Title and container for the main page
  |_ app.scss - Styling
  |_ app.spec.ts - Specifications for App component
  |_ app.ts - Default title signaler
|_ index.html - default angular wrapper code
|_ main.ts - default angular wrapper code
|_ styles.scss - global papercss style
README.MD - angular default README

```
## Contributing
I'm assuming you already have the Angular toolchain installed. If not, please [install it](https://angular.dev/installation).

```fish
# Clone the repo
git clone https://github.com/sxlphuric/mystuff.git/

# Go into the folder
cd mystuff

# Run a development server
ng serve
```
