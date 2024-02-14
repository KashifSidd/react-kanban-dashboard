# Kanban Dashboard

## Overview

This is a Kanban Dashboard built using React, designed to organize and display tasks using the Kanban methodology. The application fetches task data from an external API and provides a user-friendly interface for managing and visualizing tasks across different stages of the workflow.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Filtering and Sorting](#filtering-and-sorting)
- [Components](#components)
  - [App](#app)
  - [Header](#header)
  - [Board](#board)
  - [DropdownMenu](#dropdownmenu)
  - [Status](#status)
  - [Priority](#priority)
  - [Users](#users)
  - [Card](#card)
  - [ProfileImage](#profileimage)
- [License](#license)

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/KashifSidd/react-kanban-dashboard.git

1. Navigate to the project directory:

   ```bash
   cd kanban-dashboard

2. Install the dependencies:

   ```bash
   npm install

1. Start the development server:

   ```bash
   npm start
The application will be accessible at http://localhost:3000 in your web browser.

## Usage

## Filtering and Sorting
   The application provides a user-friendly interface for filtering and sorting tasks. Use the dropdown menu in the header to select the grouping and ordering criteria. The board will dynamically update to display tasks based on the selected filters.

## Components
## App
   The App component is the main entry point of the application. It manages the state for tasks, users, filters, and loading status. It also includes the Header and Board components.

## Header
   he Header component contains the dropdown menu for selecting grouping and ordering criteria. It communicates with the App component to update the filter state.

## Board
   The Board component renders the main content of the application. It dynamically displays tasks based on the selected filters and includes subcomponents like Status, Priority, and Users.

## DropdownMenu
   The DropdownMenu component renders a dropdown menu with options for grouping and ordering criteria. It communicates with the Header component to update the filter state.

## Status
   The Status component displays tasks grouped by their status. It dynamically renders cards for tasks in each status category.

## Priority
   The Priority component displays tasks grouped by their priority. It dynamically renders cards for tasks in each priority category.

## Users
   The Users component displays tasks grouped by assigned users. It dynamically renders cards for tasks assigned to each user.

## Card
   The Card component represents an individual task and displays relevant information, including status, title, priority, and tags.

## ProfileImage
   The ProfileImage component generates a user profile image based on the user's name initials. It also includes an indicator for user availability.







