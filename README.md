# Number Display App

This is a simple TypeScript React application that displays numbers up to a user-input maximum and calculates the area of a triangle based on user-input height and width. The app includes validation to ensure only positive integers are accepted.
![image](https://github.com/user-attachments/assets/fa35ee9a-1992-44ed-91aa-ae82be27d936)

## Features

- **Number Display**: User inputs a maximum number, and the app displays all numbers from 1 to the inputted number.
- **Triangle Area Calculator**: User inputs height and width, and the app calculates and displays the area of the triangle.
- **Input Validation**: Ensures only positive integers are accepted for both functionalities.

## Project Structure

- **src/components/number_printer/**:
  - `NumberPrinter.tsx`: Component to input maximum number and display numbers.
  - `NumberPrinter.css`: Styling for the `NumberPrinter` component.
  - `NumberPrinter.test.tsx`: Unit tests for `NumberPrinter`.

- **src/components/triangle_area_calculator/**:
  - `TriangleAreaCalculator.tsx`: Component to input height and width, and display the calculated area.
  - `TriangleAreaCalculator.css`: Styling for the `TriangleAreaCalculator` component.
  - `TriangleAreaCalculator.test.tsx`: Unit tests for `TriangleAreaCalculator`.

- **src/utils/**:
  - `calculations.ts`: Utility functions for calculations.
  - `calculations.test.ts`: Unit tests for business functions.

- **src/App.tsx**: Main application component.

## Validation

Input validation is handled to ensure only positive integers are accepted for both the number display and triangle area calculator functionalities. This is done using regular expressions in the change handlers in `App.tsx`.

## Testing

The project includes unit tests for both business logic and display logic:
- **Business Logic**: Tests for the `calculateArea` function in `calculations.test.ts`.
- **Display Logic**: Tests for the `NumberPrinter` and `TriangleAreaCalculator` components to ensure proper rendering and validation.
  
![image](https://github.com/user-attachments/assets/222a1212-276f-4b46-8866-92e3efb35287)

## Continuous Integration

The project uses GitHub Actions for continuous integration. The workflow is defined in `.github/workflows/ci.yml` and runs the tests on every push or pull request to the `main` branch.
