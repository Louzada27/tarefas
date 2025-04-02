# Task Manager

A web application for managing tasks built with Bootstrap 5 and Node.js.

## Features

- Create, read, update, and delete tasks
- Responsive design using Bootstrap 5
- SQLite database for data storage
- RESTful API endpoints
- User-friendly interface
- Form validation
- Real-time notifications

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
```

## Running the Application

1. Start the server:
```bash
node server.js
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
task-manager/
├── server.js              # Main application file
├── views/                 # EJS templates
│   ├── layout.ejs        # Main layout template
│   ├── index.ejs         # Home page
│   ├── tasks.ejs         # Tasks management page
│   ├── about.ejs         # About page
│   └── contact.ejs       # Contact page
├── public/               # Static files
│   ├── css/
│   │   └── style.css    # Custom styles
│   ├── js/
│   │   └── main.js      # Client-side JavaScript
│   └── img/             # Images
├── routes/              # Route handlers
│   ├── index.js         # Main routes
│   └── tasks.js         # Task-related routes
├── models/              # Data models
│   └── Task.js          # Task model
└── config/             # Configuration files
    └── database.js     # Database configuration
```

## API Endpoints

- `GET /tasks/api` - Get all tasks
- `GET /tasks/api/:id` - Get a specific task
- `POST /tasks/api` - Create a new task
- `PUT /tasks/api/:id` - Update a task
- `DELETE /tasks/api/:id` - Delete a task

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 