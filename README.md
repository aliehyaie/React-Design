# Awesome React Design System ✨

### Features

- 🎨 A wide range of pre-built, customizable UI components, including buttons, forms, modals, and more
- ⚡️ Built with React for flexible and efficient development
- 🌐 Integration with Next.js
- 🚀 Written in TypeScript for enhanced type safety and developer productivity
- 🎭 Utilizes TailwindCSS for customizable and responsive styling
- 📚 Easy-to-use Components
- 🌈 Theming support for effortless customization
- ⚛️ Supports React Hook Form out of the box for easy form handling
- 🔧 Well-structured codebase for maintainability and extensibility

### Project Structure Folders

- **.husky**: The "husky" folder in this project contains the configuration for the Husky library. Husky is a tool that
  allows us to easily set up Git hooks to automate tasks at various points in our development workflow.Inside the "
  husky" folder, you'll find configuration files such as `pre-commit`. These file specify the tasks or scripts that
  should be executed before a commit is performed.

***

- - **components**: The "components" folder serves as the central location for all the reusable UI components in this
    project. It follows a modular approach, where each component is contained within its own folder and has a dedicated
    file for its implementation. Here's a brief overview of some of the key components you'll find in this folder:

- ### Accordion Component

  The Accordion component is a versatile and customizable UI element for creating collapsible sections. It allows
  you to display content in an organized and space-efficient manner. With the Accordion component, you can create
  nested accordions and customize their appearance using Tailwind classes.

  | Prop            | Type                              | Default | Optional | Description                                                                                                                                                                                                                                                    |
      | --------------- | --------------------------------- | ------- | -------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | `accordionItems`| array of objects                  |         | ✗        | A list of accordion items to be rendered within the Accordion component. Each item should have an `id`, `title`, `content`, and `children` (optional) that is an array of AccordionItem objects to create nested accordions inside the current accordion item. |
  | `isMultiple`    | boolean                           | `false` | √        | Determines whether multiple accordion items can be open simultaneously.                                                                                                                                                                                        |
  | `className`     | string                            |         | √        | Adds custom CSS classes to the Accordion component.                                                                                                                                                                                                            |
  | `itemClassName` | string                            |         | √        | Adds custom CSS classes to individual accordion items.                                                                                                                                                                                                         |

  #### Example Usage

  <details>
  <summary>Click to see example</summary>

  ```jsx
  const accordionItems = [
    {
      id: 1,
      title: 'Accordion Item 1',
      content: 'Content for Accordion Item 1',
    },
    {
      id: 2,
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item 2',
    },
    {
      id: 3,
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3',
      children: [
        {
          id: 4,
          title: 'Nested Accordion Item 1',
          content: 'Content for Nested Accordion Item 1',
        },
        {
          id: 5,
          title: 'Nested Accordion Item 2',
          content: 'Content for Nested Accordion Item 2',
        },
      ],
    },
  ];

  return (
    <Accordion
      accordionItems={accordionItems}
      isMultiple={false}
      className="custom-accordion"
      itemClassName="custom-accordion-item"
    />
  );
  ```

  </details>

- ### Text Component

  The Text component allows you to render styled text with customizable color and typography. It provides flexibility in
  displaying different types of text, such as headings (h1-h6), paragraphs, or spans. You can also apply custom styles
  using Tailwind classes.

  | Prop        | Type                                          | Default | Optional | Description                                                                                     |
      |-------------|-----------------------------------------------|---------|----------|-------------------------------------------------------------------------------------------------|
  | `color`     | `'primary'` <br> `'text'`                       | `'text'`| √        | The color of the text.                                                                         |
  | `variant`   | `'h1'` <br> `'h2'` <br> `'h3'` <br> `'h4'` <br> `'h5'` <br> `'h6'` <br> `'p'` <br> `'span'` | `'p'`    | √        | The type of text variant to be rendered.                                                        |
  | `className` | string                                        |         | √        | Adds custom CSS classes to the Text component.                                                  |
  | `children`  | ReactNode                                     |         | ✗        | The content to be displayed within the Text component.                                          |

  #### Example Usage

  <details>
  <summary>Click to see example</summary>

  ```jsx
  return (
    <div>
      <Text variant="h1" color="primary">Heading 1</Text>
      <Text variant="h3" color="text">Heading 3</Text>
    </div>
  );
  ```

  </details>