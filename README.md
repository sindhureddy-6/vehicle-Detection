# Vehicle Detection Web Application

Welcome to the Vehicle Detection Web Application! This application allows users to upload images containing vehicles,
perform object detection to recognize the types of vehicles.

## Features

- Upload images containing vehicles.
- Perform object detection to recognize vehicle types.
- Display both the original and processed images.

## Technologies Used

- Frontend: React.js
- Backend: Flask
- Image Processing Libraries: OpenCV,Yolov7
- Containerization: Docker

## Getting Started

### Prerequisites

- Node.js (for running the frontend)
- Python 3.x (for running the backend and image processing)
- Docker (for containerization)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/vehicle-detection-webapp.git
    cd vehicle-detection-webapp
    ```

2. Install frontend dependencies:

    ```bash
    cd client
    npm install
    ```

3. Install backend dependencies:

    ```bash
    cd ../server
    pip install -r requirements.txt
    ```

### Running the Application

1. Start the backend server:

    ```bash
    cd server
    python app.py
    ```

2. Start the frontend server:

    ```bash
    cd ../client
    npm run dev
    ```

3. Access the application at http://localhost:5173 in your web browser.

### Docker Deployment

1. Build the Docker image:

    ```bash
    docker-compose build
    ```

2. Run the Docker container:

    ```bash
    docker-compose up
    ```

3. Access the application at http://localhost:3000 in your web browser.

## Demo

A short demonstration video showcasing the UI and capabilities of the web application, including the object detection feature, is available [here]https://drive.google.com/file/d/1QNwFUJOQlBVIi2oldhMvOU_WKfpnWapY/view?usp=sharing



