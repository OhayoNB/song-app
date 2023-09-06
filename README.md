# Song App

A project that combines React, Nest.js, and PostgreSQL using Docker.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Running the Docker Compose](#running-the-docker-compose)
  - [Accessing the Frontend](#accessing-the-frontend)
  - [Accessing pgAdmin](#accessing-pgadmin)
- [Folder Structure](#folder-structure)
- [Authors](#authors)

## Prerequisites

Before you begin, make sure you have the following tools installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Running the Docker Compose

1. Clone this repository to your local machine:

```bash
   git clone https://github.com/OhayoNB/song-app.git
   cd song-app
```

2. Start the Docker containers using Docker Compose:

```bash
   docker-compose up --build
```

This will build and start the PostgreSQL database, Nest.js server, React frontend, and pgAdmin containers.

### Accessing the Frontend
Once the containers are up and running, you can access the React frontend in your web browser at http://localhost:3000.

### Accessing pgAdmin
You can access pgAdmin to manage your PostgreSQL database at http://localhost:5050. Use the following credentials:

Email: admin@admin.com
Password: pgadmin4

### Authors

 - [Bar Ohayon](https://github.com/OhayoNB)
