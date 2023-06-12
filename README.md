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

      The Text component allows you to render styled text with customizable color and typography. It provides
      flexibility in
      displaying different types of text, such as headings (h1-h6), paragraphs, or spans. You can also apply custom
      styles
      using Tailwind classes.

      | Prop        | Type| Default | Optional | Description|
      |-----|-------------------------------------------|---------|------------|-------------------------------------------------------------------------------------------------|
      | `color`     | `primary` <br> `text` | `text`| √        | The color of the text.|
      | `variant`   | `h1` <br> `h2` <br> `h3` <br> `h4` <br> `h5` <br> `h6` <br> `p` <br> `span` | `p`  | √        | The type of text variant to be rendered.|
      | `className` | string |      | √        | Adds custom CSS classes to the Text component.|
      | `children`  | ReactNode |      | ✗        | The content to be displayed within the Text component.|

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

    - ### Toast Component

      The Toast component is a wrapper for React Toastify, designed to simplify the usage of toast notifications in your
      React application. It provides convenient methods for displaying success, error, info, and warning messages.

      | Prop            | Type                                | Default | Optional | Description                                                                                     |
      | --------------- | ----------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------- |
      | `content`       | string                              |         |   ✗       | The content of the toast notification.                                                          |
      | `options`       | `ToastOptions` (defined in react-toastify) |         | ✓        | Additional options to customize the toast notification. See [react-toastify documentation](https://github.com/fkhadra/react-toastify#options) for available options. |
      | `className`     | string                              |         | ✓  | Additional CSS class to apply to the Toast component.
   
      #### Example Usage

      <details>
      <summary>Click to see example</summary>

      ```javascript
      toast.success('Success message');
      toast.error('Error message');
      toast.info('Info message');
      toast.warning('Warning message');
      ```
      </details>

  - ### Pagination Component

    The Pagination component is used to display a paginated list of items. It provides navigation controls to move between pages and notifies the parent component when the current page changes.

    | Prop              | Type              | Default | Optional | Description                                                                                              |
    | ----------------- | ----------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------- |
    | `onPageChange`    | `(currentPage: number) => void` |         |  ✗        | Callback function to be called when the current page changes.                                             |
    | `totalCount`      | number            |         |    ✗      | The total number of items.                                                                               |
    | `siblingCount`    | number            | `1`     | ✓        | The number of visible page numbers on each side of the current page.                                     |
    | `currentPage`     | number            |         |    ✗      | The current active page.                                                                                  |
    | `pageSize`        | number            | `10`    | ✓        | The number of items to be displayed per page.                                                             |
    | `className`       | string            |         | ✓        | Additional CSS class to apply to the Pagination component.                                                |
  
    #### Example Usage

    <details>
      <summary>Click to see example</summary>

      ```jsx
       const ExampleComponent = () => {
       const [currentPage, setCurrentPage] = useState(1);

      const handlePageChange = (page) => {
          setCurrentPage(page);
       // Perform any necessary actions based on the new current page
       };
    
     return (
        <div>
          {/* Render your paginated content here */}
          <Pagination
             onPageChange={handlePageChange}
            totalCount={100}
           siblingCount={1}
           currentPage={currentPage}
           pageSize={10}
           className="pagination-custom"
      />
    </div>
    )};
    ```
      </details>

  - ### Loader Component

    The Loader component is used to display a loading indicator. It is a simple component that shows a flashing dot animation.

     | Prop            | Type   | Default | Optional | Description                                                         |
     | --------------- | ------ | ------- | -------- | ------------------------------------------------------------------- |
     | `className`     | string |         | ✓        | Additional CSS class to apply to the Loader component.              |

      #### Example Usage

      <details>
      <summary>Click to see example</summary>

      ```jsx
      return (
        <Loader className="custom-loader" />
      );
      ```
    
      </details>

    - ### Modal Component

      The Modal component is used to display a modal dialog box. It provides a way to show content on top of the current page and allows the user to interact with it. The Modal component is rendered using the `ReactDOM.createPortal` function, which ensures that the modal is rendered as a direct child of the `body` element.

      | Prop                | Type                                        | Default | Optional | Description                                                                                                                                                                                           |
      | ------------------- | ------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | `onClose`           | `(e?: React.MouseEvent<HTMLSpanElement>) => void` |         |   	✗       | Callback function to be called when the modal is closed.                                                                                                                                             |
      | `nodeId`            | string                                      |         | ✓        | The id of the DOM element where the modal should be mounted. If not provided, the modal will be mounted directly to the `body` element.                                                            |
      | `isOpen`            | boolean                                     |         |  	✗        | Determines whether the modal is open or closed.                                                                                                                                                      |
      | `className`         | string                                      |         | ✓        | Additional CSS class to apply to the Modal component.                                                                                                                                                 |
      | `closeModalOnBack`  | boolean                                     |         | ✓        | Determines whether the modal should be closed when the user navigates back using the browser's history (by pressing the back button). This is useful for handling the modal closing on browser navigation. |

      #### Example Usage

        <details>
        <summary>Click to see example</summary>

        ```javascript
        const ExampleComponent = () => {
        const [isOpen, setIsOpen] = useState(false);

        const openModal = () => {
           setIsOpen(true);
        };

       const closeModal = () => {
          setIsOpen(false);
        };

       return (
           <div>
             <button onClick={openModal}>Open Modal</button>

             <Modal onClose={closeModal} isOpen={isOpen} closeModalOnBack={true}>
                 {/* Content of the modal */}
               <h1>Modal Title</h1>
               <p>Modal content goes here.</p>
            </Modal>
        </div>
      )};
      ```
      
  </details>
