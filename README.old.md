# Project Title

Mystical Tarot - Interactive Tarot Reading Game

## Overview

**Mystical Tarot** is an engaging and interactive app designed for tarot enthusiasts. The app offers daily tarot card readings and two unique tarot reading games: Tarot for Decision Making and Dream Tarot Interpretation. Users can select different categories for their readings, making the experience personalized and insightful.

### Problem

Tarot reading is a popular practice for gaining insights and guidance, but many people find it challenging to learn and interpret the cards on their own. This app provides a simple and engaging way for users to experience tarot readings through interactive games, making it easy to understand and enjoy the mystical practice of tarot.

### User Profile

- **Target Audience:** Individuals interested in tarot, divination, and spiritual practices.
- **Usage:** Users will engage with the app for daily tarot readings and playing the tarot reading games.
- **Special Considerations:** The app must have an intuitive and visually appealing interface to ensure an immersive and enjoyable user experience.

### Features

1.  **Card of the Day**

  - Users get a daily tarot card with an interpretation.


2. **Tarot Reading Game:**

  - **Tarot for Decision Making:**
     - **Category Selection:** Users select a decision they need guidance on (e.g., Career Change, Relationship Choice, Major Purchase).
     - **Card Selection:** Users draw three cards representing Pros, Cons, and Outcome.
     - **Interpretations:** Each card provides insights into the advantages, disadvantages, and likely outcome of the decision, helping users make informed choices.
  - **Dream Tarot Interpretation:**
     - **Category Selection:** Users choose a dream theme they want to explore (e.g., Recurring Dreams, Nightmares, Lucid Dreams).
     - **Card Selection:** Users draw three cards that symbolize the underlying messages of the dream (e.g., Hidden Fears, Desires, Warnings).
     - **Interpretations:** Each card is interpreted in the context of dream symbolism and the chosen theme, providing deeper understanding of the dream.
  - **Card Selection Process:**
     1. Shuffle the deck and display the full set of tarot cards in the frontend.
     2. Let users select the reading type (decision making or dream interpretation).
     3. Allow users to choose three cards from the shuffled deck. These cards represent Pros, Cons, and Outcome (for decision making) or Hidden Fears, Desires, Warnings (for dream interpretation).
     4. Request the backend for interpretations of the selected cards and display the corresponding interpretations on the frontend.

3. **Card Library Page:**
  - Users can search and view tarot card meanings.

## Implementation

### Tech Stack

- **Frontend:**

  - React for building the SPA.
  - SCSS for styling and animations.
  - HTML5 local storage for saving data on the client-side.

- **Backend (Optional):**
  - Node.js and Express for handling API requests and data storage.
  - MongoDB/Mysql for storing user data, readings, and journal entries.(If needed)

### APIs

- No external data sources are required. All data (tarot card meanings, game content) will be stored locally within the app or on the backend server.

### Sitemap

1. **Home Page/Tarot Reading Game Page:**
   - Introduction to the app and its features.
   - Select a category and choose three cards for the reading.
2. **Daily Tarot Page:**
   - View and track the daily tarot card.
3. **Card Library Page:**
   - Search and view tarot card meanings.(optional)

### Mockups

1. **Home Page/Tarot Reading Mockup:**
   - Introduction and navigation to other sections.
   - Interactive card selection interface with category options.
2. **Daily Tarot Page Mockup:**
   - Display the daily tarot card and its interpretation.
3. **Card Library Page Mockup:**
   - List and search functionality for tarot card meanings.(optional)

### Data

- **Tarot Card Meanings:**
  - A comprehensive library of card meanings, including interpretations for different contexts and positions.
- **Data Models**

  - TarotCard:

  ```json
  {
    "name": "The Fool",
    "upright": "New beginnings, adventure, foolishness.",
    "reversed": "Recklessness, fear of change, risk-taking.",
    "interpretations": {
      "decisionMaking": {
        "pros": "Indicates new opportunities and a sense of adventure.",
        "cons": "Warns against recklessness and hasty decisions.",
        "outcome": "Suggests that taking a leap of faith may lead to growth and new experiences."
      },
      "dreamInterpretation": {
        "hiddenFears": "Fear of taking risks and embracing new beginnings.",
        "desires": "A strong desire for adventure and new experiences.",
        "warnings": "Beware of recklessness and making hasty decisions."
      }
    }
  }
  ```

  - Reading:

  ```json
  {
    "date": "2024-06-01",
    "category": "Career Change",
    "cards": [
      {
        "name": "The Fool",
        "position": "Pros",
        "interpretation": "Indicates new opportunities and a sense of adventure."
      },
      {
        "name": "The Magician",
        "position": "Cons",
        "interpretation": "Warns against overconfidence and manipulation."
      },
      {
        "name": "The High Priestess",
        "position": "Outcome",
        "interpretation": "Suggests that intuition and patience will guide you to the right decision."
      }
    ]
  }
  ```

### Endpoints

- `GET /tarot-cards`

  - Retrieves all tarot card meanings.
  - **Example Response:**

        ```json
        [

    {
    "name": "The Fool",
    "upright": "New beginnings, adventure, foolishness.",
    "reversed": "Recklessness, fear of change, risk-taking.",
    "interpretations": {
    "decisionMaking": {
    "pros": "Indicates new opportunities and a sense of adventure.",
    "cons": "Warns against recklessness and hasty decisions.",
    "outcome": "Suggests that taking a leap of faith may lead to growth and new experiences."
    },
    "dreamInterpretation": {
    "hiddenFears": "Fear of taking risks and embracing new beginnings.",
    "desires": "A strong desire for adventure and new experiences.",
    "warnings": "Beware of recklessness and making hasty decisions."
    }
    }
    }
    ]

    ```

    ```

- `GET /readings`

  - Retrieves all saved readings for a user.
  - **Example Response:**

        ```json
        [

    {
    "date": "2024-06-01",
    "category": "Career Change",
    "cards": [
    {"name": "The Fool", "position": "Pros", "interpretation": "Indicates new opportunities and a sense of adventure."},
    {"name": "The Magician", "position": "Cons", "interpretation": "Warns against overconfidence and manipulation."},
    {"name": "The High Priestess", "position": "Outcome", "interpretation": "Suggests that intuition and patience will guide you to the right decision."}
    ]
    },
    ...
    ]

        ```

- `POST /readings`

  - Saves a new reading.
  - **Example Request:**

  ```json
  {
    "date": "2024-06-01",
    "category": "Career Change",
    "cards": [
      {
        "name": "The Fool",
        "position": "Pros",
        "interpretation": "Indicates new opportunities and a sense of adventure."
      },
      {
        "name": "The Magician",
        "position": "Cons",
        "interpretation": "Warns against overconfidence and manipulation."
      },
      {
        "name": "The High Priestess",
        "position": "Outcome",
        "interpretation": "Suggests that intuition and patience will guide you to the right decision."
      }
    ]
  }
  ```

### Auth

No authentication or user profile functionality is required for this app. However, optional user profiles can be added for saving readings and journal entries.

## Roadmap

### Week 1 (Sprint)

1. **Day 1: Project Setup**

   - Set up the project repository.
   - Initialize React application.
   - Set up basic folder structure and install dependencies.

2. **Day 2: Tarot Reading Game Functionality**

   - Develop the UI for selecting a category and performing tarot readings.
   - Implement logic for drawing and interpreting cards.

3. **Day 3: Card Library and Learning**

   - Create the tarot card library with search functionality.
   - Develop educational content and tutorials.

4. **Day 4: Daily Tarot and Journal**

   - Implement the daily tarot card feature.
   - Develop the personal journal for saving notes and reflections.

5. **Day 5: UI/UX Enhancements**

   - Improve visual design with mystical aesthetics.
   - Add animations and transitions.

6. **Day 6: Testing and Final Adjustments**

   - Conduct thorough testing of all features.
   - Fix any bugs and optimize performance.

7. **Day 7: Final Adjustments**
   - Finalize UI/UX details.
   - Ensure the app is polished and user-friendly.

## Nice-to-haves

1. **Card Interpretation Library:**

   - A comprehensive library of tarot card meanings, including interpretations for different contexts and positions.

2. **Personal Journal:**

   - Users can write notes or reflections on each reading and save them in a personal journal.
   - The journal can be reviewed to track insights and patterns over time.

3. **Customizable Decks:**

   - Users can choose from different tarot deck designs and themes.
   - Option to unlock new decks through regular use or in-app purchases.

4. **Advanced Tarot Spreads:** Offer more complex and detailed spreads for experienced users.
