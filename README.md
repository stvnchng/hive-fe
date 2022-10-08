# Hive Frontend Challenge

## Instructions to run project

NOTE: There is also a live demo at https://codesandbox.io/s/dropdowns-4vli7m

In the current directory, run `npm install` to get all the dependencies, then run `npm start` and the demo should be active at `localhost:3000`.

The window containing both the multiple and single-option dropdown demo should appear.

The items being passed down to the `<Dropdown>` component originates from App.js. Feel free to add/remove/create any lists to pass in as items to the Dropdown component.

## Quick overview of the `<Dropdown>` component

`<Dropdown>` takes in three props, one of which is optional. A label is required (which goes on the top left) and a list of input options is also required. Optionally, you can specify if you would like the `<Dropdown>` to handle multiple-selection inputs (checkboxes), or set multiple={false} to have a list of single-option inputs (radio).
