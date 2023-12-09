1.Project Features
*Course Selection and Credit Tracking: In this assignment project, we have implemented a feature that allows users to select courses for registration. Users can click the "Select" button on each course card to add it to their selection. The project also tracks the total credit hours of selected courses, ensuring that it does not exceed a limit of 20 hours.

*Dynamic Course Data Loading: We load the course data from an external JSON source dynamically. This means that we can easily update the course information or add more courses by modifying the JSON file without changing the codebase. This feature provides flexibility in managing course data.

*Prevent Duplicate Selection: To enhance the user experience, we have prevented the selection of the same course multiple times. When a user selects a course, the "Select" button becomes disabled to prevent duplicate selections. This ensures that each course can only be added to the selection once.


2.State Management
In our assignment project, we manage state using React's built-in useState hook. Here's how we manage the state:

*Course Data State (cards): We use the useState hook to maintain the state of the course data fetched from the JSON source. This state (cards) is an array that holds information about all available courses.

*Selected Courses State (selectcard): We also use the useState hook to manage the state of selected courses. When a user selects a course, we update this state to include the selected course in the selectcard array.

*Remaining Hours State (remainingHours) and Total Credit Hours State (totalCreditHours): We utilize the useState hook to track the remaining credit hours and the total credit hours of selected courses. When a course is selected, we update these states accordingly. We also implement checks to ensure that the total credit hours do not exceed 20.

*React's useState hook provides a straightforward way to manage component-level state within functional components, making it easier to handle data and UI updates based on user interactions and external data sources.


Live Link : https://steady-bienenstitch-ea3b3f.netlify.app/
