# AngularExercise - Todo App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

Create a fork of this repo and complete the excercise in your fork. Send the link of your repo to the concerned person upon completing the exercise.

We need to create a Todo App with the following functionality -

1. Input fields for creating a task
    - Title
    - Description
    - Category
        - Work
        - Personal
    - Labels
        - Work
            - Travel
            - Food
        - Personal
            - Rent
            - Groceries

2. Use NGRX for all the CRUD operations in the app

3. Two tables should display the Work & Personal tasks side by side and should be updated whenever CRUD operations are performed without refreshing the page

4. Use only CSS Flexbox for the design and no other UI framework

5. Follow simple design

6. Unit test case code coverage should be `> 80%`

# Acceptance Criteria

1. As a user, on visiting the application, I should be able to view the Create Task form and View tasks table. The form should occupy the first half of the screen and the table of tasks should follow it.

2. The table shows all the tasks added using the form above. It should function the following way:
    - It should be split into two categories, work and personal. The work section will display all the tasks tagged with work label and similarly personal tasks are displayed in the other section.
    - Under each section, we should display the following columns under each table section, title, description, category and label.
    - The last cell in the column will contain a delete button which on click deletes the respective task.

3. The form should function the following way:
    - All fields are mandatory in the form.
    - Title and description should accept alphanumeric inputs.
    - Category field is a dropdown containing the options Work and Personal.
    - Based on the category selected above, the label options should be displayed as a radio button. If category is work, then travel and food are displayed and if category is personal then rent and groceries labels should be displayed.
  
4. The user should be able to submit the form data using a submit button below the form. On submit, the data should be added to the list under the respective table.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## ESLint Rules

This project uses ESLint rules for maintaining code quality, you can install the ESLint extension in VSCode to help you with the linting and optionally use a code formatter to further improve readablity.

## Lint

Run `npm run lint` to run ESLint throughout the codebase.

Run `npm run lint:fix` to run ESLint fixes, this will only fix the auto fixable errors and not all of them.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test:coverage` to execute unit tests in a headless browser and also provide the code coverage. Code coverage details are generated in a folder name `coverage` in the app root.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
