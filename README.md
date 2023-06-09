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

- **components**: The "components" folder serves as the central location for all the reusable UI components in this
  project. It follows a modular approach, where each component is contained within its own folder and has a dedicated
  file for its implementation.
  Here's a brief overview of some of the key components you'll find in this folder:
    - ### Accordion Component
      The Accordion component is a versatile and customizable UI element for creating collapsible sections. It allows
      you to display content in an organized and space-efficient manner. With the Accordion component, you can create
      nested accordions and customize their appearance using CSS classes.
      #### props
      - `accordionItems` (required): A list of accordion items to be rendered within the Accordion component. Each item
        should be an object with the following structure:
          - `id`: (string | number) A unique identifier for the accordion item.
          - `title`:  (string | React.ReactElement) The title or heading for the accordion item.
          - `content`: (string | React.ReactElement) The content to be displayed when the accordion item is expanded.
          - `children` (optional): An array of AccordionItem objects to create nested accordions inside the current
            accordion item.
      - `isMultiple` (optional, default: false): A boolean prop that determines whether multiple accordion items can be
        open simultaneously. If set to `true`, multiple items can be expanded at the same time. If set to `false`,
        expanding
        one item will automatically collapse any other open items.
      - `className`  (optional): A string prop that allows you to add custom CSS classes to the Accordion component,
        enabling you to style it according to your needs.
      - `itemClassName` (optional): A string prop that allows you to add custom CSS classes to individual accordion items,
        giving you the flexibility to style them differently based on specific requirements.

      #### Example Usage
      Here's an example of how you can use the Accordion component:
    ```
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
    };
    ```