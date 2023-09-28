# Awesome React Design System ✨

![Project hero banner](/public/images/banner.png)

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
- 📖 Comprehensive documentation

## Getting Started
To run the project, please follow these steps:

Please ensure that your Node version is at least 14.18.0 before running the project.

1. Clone the project repository.
2. Open the project directory.
3. Install the project dependencies using Yarn by running `yarn` or `yarn install`.
4. After the packages are installed, start the development server by running `yarn dev`.
5. Once the server is up and running, you can access the project in your browser at `http://localhost:3000`

**Important Note:**

When working on this project, please ensure that you create a branch for pushing your changes. Your branch name should follow the following format:

- For adding new features: `feature/some-features`
- For fixing issues: `fix/some-fixes`
- For general chores or miscellaneous tasks: `chore/...`
- And so on ...

Additionally, when committing your files, it is crucial to follow the commit lint format. Failure to comply with this format will result in Husky preventing you from pushing your code. The commit lint format should be as follows:

`feat: add radio component`

To see all the `commitlint` rules, please visit the [Commitlint site](https://commitlint.js.org/) or [Conventional Commits site](https://www.conventionalcommits.org/en/v1.0.0/).

Please adhere to these guidelines to maintain a consistent and organized development process.

### Project Structure Folders

- **.husky**: The "husky" folder in this project contains the configuration for the Husky library. Husky is a tool that
  allows us to easily set up Git hooks to automate tasks at various points in our development workflow.Inside the "
  husky" folder, you'll find configuration files such as `pre-commit`. These file specify the tasks or scripts that
  should be executed before a commit is performed.

***

- **Components**: The "components" folder serves as the central location for all the reusable UI components in this
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
      |-----|-----------------------------------------|---------|------------|-------------------------------------------------------------------------------------------------|
      | `color`     | primary <br> text | `text`| √        | The color of the text.|
      | `variant`   | h1 <br> h2 <br> h3 <br> h4 <br> h5 <br> h6 <br> p <br> span | `p` | √        | The type of text variant to be rendered.|
      | `className` | string |     | √        | Adds custom CSS classes to the Text component.|
      | `children`  | ReactNode |     | ✗        | The content to be displayed within the Text component.|

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

  - ### Icon Component

    The Icon component is used to display an icon in your application.

    | Prop        | Type                                      | Default | Optional | Description                                                                     |
    | ----------- | ----------------------------------------- | ------- | -------- | ------------------------------------------------------------------------------- |
    | `iconName`  | string                                    |         | ✗        | The name or identifier of the icon to be displayed.                             |
    | `className` | string                                    |         | ✓        | Additional CSS class to apply to the Icon component.                            |
    | `onClick`   | (e: React.MouseEvent<HTMLSpanElement>) => void |         | ✓        | Event handler for the click event on the Icon component.                        |

    #### Example Usage

    <details>
         <summary>Click to see example</summary>

      ```jsx
      <Icon iconName="icon-checkmark-circle" className="custom-icon" onClick={handleClick} />      
      ```

    </details>

  - ### Container Component

    The Container component is used to create a container that centers its content and sets a maximum width.

    | Prop       | Type      | Default | Optional | Description                                         |
    | ---------- | --------- | ------- | -------- | --------------------------------------------------- |
    | `children` | ReactNode |         |     ✗     | The content to be displayed within the Container.   |

    #### Example Usage

    <details>
       <summary>Click to see example</summary>

    ```jsx
    <Container>
        <div>Content inside the container</div>
    </Container>
    ```

    </details>

  - ### Card Component

    The Card component is used to display content in a visually appealing card-like container. It provides a structured layout with options for a title, subtitle, header, footer, and custom styling.

     | Prop        | Type               | Default | Optional | Description                                                                 |
     | ----------- | ------------------ | ------- | -------- | --------------------------------------------------------------------------- |
     | `title`     | string             |         | √        | The title of the card.                                                      |
     | `subtitle`  | string             |         | √        | The subtitle of the card.                                                   |
     | `header`    | React.ReactElement |         | √        | The header component to be displayed at the top of the card.                 |
     | `footer`    | React.ReactElement |         | √        | The footer component to be displayed at the bottom of the card.              |
     | `className` | string             |         | √        | Adds custom CSS classes to the Card component.                               |
     | `children`  | React.ReactNode    |         | √        | The content to be displayed inside the Card component.                       |

    #### Example Usage

    <details>
       <summary>Click to see example</summary>

    ```jsx
    <Card
      title="Card Title"
      subtitle="Card Subtitle"
      header={<div>Header Component</div>}
      footer={<div>Footer Component</div>}
      className="custom-card"
    >
      <div>Content inside the card</div>
    </Card>
    ```

    </details>

  - ### Avatar Component

    The Avatar component is used to display user avatars or icons. It supports different variants, such as circular or square avatars, and provides options for displaying an image, an icon, or a text label.

    | Prop         | Type               | Default     | Optional | Description                                                                 |
    | ----------- | ------------------- | ----------- | -------- | --------------------------------------------------------------------------- |
    | `variant`    | circle <br/> square | 'circle'    | √        | The variant of the avatar. Can be set to 'circle' or 'square'.               |
    | `imgSrc`     | string             |             | √        | The source URL of the avatar image.                                          |
    | `iconName`   | string             | 'icon-person' | √        | The name of the icon to be displayed if no image or label is provided.       |
    | `label`      | string             |             | √        | The text label to be displayed if no image or icon is provided.              |
    | `alt`        | string             |             | √        | The alternate text for the avatar image.                                     |
    | `className`  | string             |             | √        | Adds custom CSS classes to the Avatar component.                             |

    #### Example Usage

       <details>
        <summary>Click to see example</summary>

       ```jsx
       <Avatar
           variant="circle"
           imgSrc="/avatar.jpg"
           iconName="icon-person"
           label="John Doe"
           alt="User Avatar"
           className="custom-avatar"
       />
       ```

  </details>

  - ### Avatar Group Component

    The Avatar Group component is used to display a group of avatars or icons. It provides a container to hold multiple Avatar components.

    | Prop       | Type                | Default | Optional | Description                                             |
    | ---------- | ----------------- | --------- | -------- | ------------------------------------------------------- |
    | `children` | React.ReactNode    |         |  ✗        | The Avatar components to be rendered within the group.  |

    #### Example Usage

     <details>
           <summary>Click to see example</summary>

      ```jsx
      <AvatarGroup>
           <Avatar imgSrc="avatar1.jpg" />
           <Avatar imgSrc="avatar2.jpg" />
           <Avatar imgSrc="avatar3.jpg" />
      </AvatarGroup>
      ```

     </details>
    
  - ### Badge Component

    The Badge component displays a small badge with optional value and severity.

    | Prop        | Type     | Default | Optional | Description                                                                                           |
    |-------------|---|---|------------|-------------------------------------------------------------------------------------------------------|
    | type        | circular<br/>normal   | `normal` | √ | Specifies the type of the badge. It can be either 'circular' or 'normal'.                              |
    | isAbsolute  | boolean  | `false` | √ | Determines whether the badge should be positioned absolutely.                                          |
    | position    | topRight<br/>topLeft<br/>bottomRight<br/>bottomLeft   | `bottomLeft` | √ | Defines the position of the badge. It can be 'topRight', 'topLeft', 'bottomRight', or 'bottomLeft'.    |
    | value       | string   |   | √ | The value or text to be displayed within the badge.                                                    |
    | severity    | warning<br/>info<br/>success<br/>error   | `success` | √ | Indicates the severity or importance level of the badge. It can be 'warning', 'info', 'success', or 'error'. |
    | className   | string   |   | √ | Additional CSS class names to be applied to the badge component.                                       |    

     #### Example Usage

      <details>
         <summary>Click to see example</summary>

       ```jsx
       <Badge type="circular" position="topRight" value="5" severity="info" className="custom-badge" />
       ```
    
     </details>

  - ### Button Component

    The Button component is a customizable React button component that can be used to render interactive buttons with various styles and functionalities.
  
    | Prop        | Type                                           | Default                                                                                                       | Optional | Description                                                      |
    |------------------------------------------------|---------------------------------------------------------------------------------------------------------------|-----|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
    | label        | string                                         |                                                                                                               | √ | The label or text to be displayed inside the button.             |
    | leadingIconName  | string                                         |                                                                                                               | √ | The name of the icon to be displayed as the label.               |
    | helperIconName    | string                                         |                                                                                                               | √ | The name of the helper icon to be displayed alongside the label. |
    | iconPos       | right<br/>left                                 | `right`                                                                                                       | √ | Specifies the position of the helper icon relative to the label. |
    | color    | primary<br/>text                               | `primary`                                                                                                     | √ | Defines the color scheme of the button.                          |
    | variant    | filled<br/>outlined<br/>tonal<br/>text         | `filled`                                                                                                      | √ | Specifies the visual variant of the button.                      |
    | shape    | normal<br/>chips                               | `normal`                                                                                                      | √ | Specifies the visual variant of the button.                      |
    | href               | string                                         | The URL of the destination if the button is rendered as a link.                                               | √ | Determines the shape of the button.                              |
    | isLoading   | boolean                                        |                                                                                                               | √ | Determines whether the button should display a loading.          |    
    | className   | sring                                          |                                                                                                               | √ | Additional CSS class names to be applied to the button.          |    
    | ...props               | React.ButtonHTMLAttributes<HTMLButtonElement>	 | Any additional valid attributes that can be applied to a HTML button element (e.g., onClick, disabled, etc.). | √ | Determines the shape of the button.                              |

    #### Example Usage

      <details>
         <summary>Click to see example</summary>

       ```jsx
       <Button label="Click Me" color="primary" variant="filled" />
       ```

     </details>

  - ### Error Text Component

    The Error Text component is a simple React component that displays an error message in a styled text format. It is commonly used to provide feedback or notify users about errors or validation issues.
  
    | Prop        | Type                                                | Default | Optional | Description                                                                                           |
    |-----------------------------------------------------|---|---|------------|-------------------------------------------------------------------------------------------------------|
    | errorMessage        | string                                              |  | ✗ | The error message to be displayed.                              |
  
    #### Example Usage

      <details>
         <summary>Click to see example</summary>

       ```jsx
       <Error errorMessage="This field is required." />
       ```

     </details>
    
  - ### Label Component

    The Label component is a React component used to render a label for form inputs or other UI elements. It supports custom styling and optional error indication.

    | Prop        | Type    | Default | Optional | Description                                                                                           |
    |---------|---|---|------------|-------------------------------------------------------------------------------------------------------|
    | error        | boolean |  | √ | Determines whether the label should indicate an error state.                              |
    | label        | string |  | √ | The text content of the label.                              |
    | required        | boolean |  | √ | Determines whether the label should indicate that the associated input is required.                              |
    | labelClassName        | string |  | √ | Additional CSS class names to be applied to the label element.                              |

    #### Example Usage

    <details>
       <summary>Click to see example</summary>

     ```jsx
     <Label label="Email Address" required={true} error={false} />
     ```

     </details>
    
  - ### Checkbox Component

    The Checkbox component is a React component used to render a checkbox input with an optional label. It supports custom styling and error indication. The component is fully compatible with React Hook Form.

    | Prop           | Type     | Default | Optional | Description                                                        |
    | -------------- | -------- | ------- | -------- | ------------------------------------------------------------------ |
    | className      | string   |         | √        | Additional CSS class names to be applied to the checkbox component. |
    | labelClassName | string   |         | √        | Additional CSS class names to be applied to the label element.      |
    | error          | boolean  |         | √        | Determines whether the checkbox should indicate an error state.    |
    | errorMessage   | string   |         | √        | The error message to display.                                      |
    | ...otherProps  |   React.HTMLProps\<HTMLInputElement>      |         |          | Other HTML input element properties are also supported.             |

    #### Example Usage

     <details>
         <summary>Click to see example</summary>

       ```jsx
        <Checkbox label="Agree to Terms" /> 
       ```

     </details>
    
  - ### Input Component

    The Input component is a React component used to render a text input with an optional label and icons. It supports custom styling and error indication. The component is fully compatible with React Hook Form.

    | Prop             | Type    | Default | Optional | Description                                                        |
    | ---------------- | ------- | ------- | -------- | ------------------------------------------------------------------ |
    | iconRightName    | string  |         | √        | The name of the right icon.                                       |
    | iconLeftName     | string  |         | √        | The name of the left icon.                                        |
    | className        | string  |         | √        | Additional CSS class names to be applied to the input component.   |
    | labelClassName   | string  |         | √        | Additional CSS class names to be applied to the label element.     |
    | error            | boolean |         | √        | Determines whether the input should indicate an error state.       |
    | errorMessage     | string  |         | √        | The error message to display.                                      |
    | ...otherProps    |     React.HTMLProps\<HTMLInputElement>    |         |          | Other HTML input element properties are also supported.            |

    #### Example Usage

    <details>
       <summary>Click to see example</summary>

     ```jsx
     <Input label='Name' /> 
     ```

   </details>

  - ### Radio Component

    The Radio component is a React component used to render a radio input with an optional label. It supports custom styling and error indication. The component is fully compatible with React Hook Form.

    | Prop           | Type    | Default | Optional | Description                                                        |
    | -------------- | ------- | ------- | -------- | ------------------------------------------------------------------ |
    | className      | string  |         | √        | Additional CSS class names to be applied to the radio component.    |
    | labelClassName | string  |         | √        | Additional CSS class names to be applied to the label element.      |
    | error          | boolean |         | √        | Determines whether the radio should indicate an error state.       |
    | errorMessage   | string  |         | √        | The error message to display.                                      |
    | ...otherProps  |   React.HTMLProps\<HTMLInputElement>      |         |          | Other HTML input element properties are also supported.             |

    #### Example Usage

    <details>
      <summary>Click to see example</summary>

      ```jsx
      <Radio label="Option 1"  />
     ```

    </details>

  - ### Switch Component

    The Switch component is a React component used to render a switch toggle input with an optional label. It supports custom styling and error indication. The component is fully compatible with React Hook Form.

    | Prop           | Type    | Default | Optional | Description                                                        |
    | -------------- | ------- | ------- | -------- | ------------------------------------------------------------------ |
    | className      | string  |         | √        | Additional CSS class names to be applied to the radio component.    |
    | labelClassName | string  |         | √        | Additional CSS class names to be applied to the label element.      |
    | error          | boolean |         | √        | Determines whether the radio should indicate an error state.       |
    | errorMessage   | string  |         | √        | The error message to display.                                      |
    | rounded        | boolean | true    | √        | Determines whether the switch toggle should have rounded corners.  |
    | ...otherProps  |    React.HTMLProps\<HTMLInputElement>     |         |          | Other HTML input element properties are also supported.             |

    #### Example Usage

    <details>
      <summary>Click to see example</summary>

      ```jsx
      <Switch label="Enable Notifications" rounded={false} />
     ```

    </details>

  - ### Select Component

    The Select component is a React component that wraps the react-select library, providing a customizable dropdown select input. It is fully compatible with React Hook Form.

    | Prop            | Type              | Default | Optional | Description                                                                                   |
    | --------------- | ----------------- | ------- | -------- | --------------------------------------------------------------------------------------------- |
    | label           | string            |         | √        | The label text for the select input.                                                          |
    | required        | boolean           |         | √        | Determines whether the select input is required.                                              |
    | error           | boolean           |         | √        | Determines whether the select should indicate an error state.                                |
    | errorMessage    | string            |         | √        | The error message to display.                                                                 |
    | className       | string            |         | √        | Additional CSS class names to be applied to the select component.                             |
    | labelClassName  | string            |         | √        | Additional CSS class names to be applied to the label element.                                |
    | ...otherProps   | StateManagerProps |         |          | Other props supported by the react-select library. Refer to the [documentation](https://react-select.com/props) for a full list of available props. |

    #### Example Usage

    <details>
      <summary>Click to see example</summary>

      ```jsx
      <Select
         label="Favorite Color"
         options={[
            { value: 'red', label: 'Red' },
            { value: 'blue', label: 'Blue' },
            { value: 'green', label: 'Green' },
          ]}
         required={true}
       /> 
      ```

    </details>

  - ### Range Component

    The Range component is a React component that allows the selection of a range of values. It supports both single and multi-range selection and provides visual indicators for the selected range. It is fully compatible with React Hook Form.
  
    **Important Note**: Please note that this component is currently under development and may not have all features implemented yet.

    | Prop           | Type    | Default | Optional | Description                                                        |
    | -------------- |---------| ------ | -------- | ------------------------------------------------------------------ |
    | min               | number                 | `0`       | √       | The minimum value of the range.                                                                                                                                                                    |
    | max               | number                 | `10000`   | √       | The maximum value of the range.                                                                                                                                                                    |
    | value             | number <br/> [number, number] | `0`        | √        | The current value(s) of the range. For single-range selection, pass a number. For multi-range selection, pass an array of two numbers representing the minimum and maximum values.                    |
    | isSingle          | boolean                | `true`       |          | Determines whether the range is for single or multi-range selection.                                                                                                                               |
    | step              | number                 | `1000`       | √        | The step size between values in the range.                                                                                                                                                         |
    | priceGap              | number                 | `1000`       | √        | The minimum gap between the minimum and maximum values in a multi-range selection.                                                                                                                                                         |
    | showIndicators    | boolean                |            | √        | Determines whether to show visual indicators for the selected range.                                                                                                                               |
    | onChange          | function               |            |          | The callback function to handle the range value change. The function receives the new value(s) as a parameter.                                                                                    |
    | className         | string                 |            | √        | Additional CSS class names to be applied to the range component.                                                                                                                                   |
    | ...otherProps  |    React.HTMLProps\<HTMLInputElement>     |         |         | Other HTML input element properties are also supported.             |

    #### Example Usage

    <details>
        <summary>Click to see example</summary>

       ```jsx
        <Range
            min={0}
            max={100}
           value={[20, 80]}
           isSingle={false}
           step={5}
           priceGap={10}
           onChange={(values) => console.log('Selected Range:', values)}
      />
      ```

    </details>

   - ### Spinner Component

     The Spinner component is a React component used to render a loading indicator. It supports two types: circle and line.
     
      | Prop           | Type            | Default | Optional | Description                                                        |
      |-----------------|---------| ------- | -------- | ------------------------------------------------------------------ |
      | type      | circle<br/>line | `line`   | √        | The type of the spinner to render.    |
      | className | string          |         | √        | Additional CSS class names to be applied to the spinner element.     |
      
      #### Example Usage

      <details>
        <summary>Click to see example</summary>

        ```jsx
        <Spinner type="circle" />
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
      <Loader className="custom-loader" />
      ```

      </details>

***

- **iconmoon**: The iconmoon folder contains a collection of icons provided by the IconMoon library. To view all the available icons, you can open the `index.html` file located in this folder using a web browser.

***

- **hooks**: The hooks folder in this project contains custom hooks that can be used to add specific functionality or behavior to React components. These hooks are reusable pieces of logic that can be shared across different components, promoting code reuse and modularization.

***

- **pages**: The pages folder contains all the pages of the project. One specific file within this folder is form.tsx, which showcases an integration of the Inputs component with React Hook Form.
 
***

- **utils**:
  The utils folder in your project serves as a central location for utility functions and modules that are used throughout your project. It provides a structured organization for reusable code and helps in maintaining a clean and modular codebase.
  Within the utils folder, you mentioned the presence of a validations subfolder. This subfolder contains additional folders named messages and regex. These folders store validation messages and regular expressions used for validation purposes in your project.    
    
       
    
     