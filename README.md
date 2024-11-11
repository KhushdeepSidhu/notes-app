# Notes Application

A simple and efficient Notes application built with JavaScript that allows users to create, view, filter, and sort notes. This application is designed to help users manage their personal notes directly in the browser.

## Features

- **Create Notes**: Add new notes with a title and content.
- **View Notes**: See a list of all saved notes.
- **Delete Notes**: Remove notes when they're no longer needed.
- **Filter Notes**: Search and filter notes by their content or title for easy access.
- **Sort Notes**: Sort notes by:
  - **Last Edited**: Display notes based on the most recent edits.
  - **Creation Date**: Organize notes in the order they were created.
  - **Alphabetically**: Sort notes by title for quick alphabetical navigation.
- **Timestamp Display**: Each note shows the date and time it was created and last edited.
- **Data Persistence**: Uses local storage to save notes, ensuring they are available even after closing the browser.

## Technologies Used

- **JavaScript**: Core functionality for managing notes.
- **HTML/CSS**: User interface and styling.
- **Local Storage**: Persistent data storage in the browser.

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Prerequisites

- A web browser that supports JavaScript and local storage.
- Optionally, a local development server (such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VSCode) to view changes dynamically.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KhushdeepSidhu/notes-app.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd notes-app
   ```

### Running the Application

To open the app:

1. Open the `index.html` file directly in a browser, or
2. Use a local development server to preview the app live.

### Usage

1. **Adding a Note**: Click the "Add Note" button, enter a title and content, and save the note.
2. **Filtering Notes**: Use the search bar to filter notes by keywords in the title or content.
3. **Sorting Notes**: Select a sorting option (by Last Edited, Created, or Alphabetically) to organize the note list.
4. **Viewing Timestamps**: Each note displays when it was created and the last time it was edited.
5. **Deleting Notes**: Each note has a delete option to remove it from the list and local storage.
