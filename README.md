# Basic E2E test cases for CraigsList marketplace using Cypress

## Background
    Craigslist is a website for viewing and posting local advertisements. Users are able to create an account or navigate as a guest and create different types of listings that are paid or free depending on type of content. 

## Goal and Use Case:
    - Keep in mind that tests are bare as no real log in or posting functionality takes place
    - E2e tests are meant to be basic, readable, and extendable and to supplement unit testing, integration test, and manual QA regression test
    - Future API testing and more E2E can be introduced

## Prerequisites/How to run:
    Install Node if not already installed
    Install Cypress if not already installed
    Use ```npm install``` to install the required packages and libraries.
    Use command ```node_modules/.bin/cypress open``` to open TestRunner and step through test cases.

## Folder Structure:
    E2E browser testing is in:
        Cypress/integration/test_browser

## Test Plan/Release:
    Prior to any new releases, we must verify we have high confidence and a strong test plan to verify the core functionality of the platform and have high confidence that releases are free of issues and regression bugs through thorough unit testing, integration testing, E2E browser testing, and manual QA testing. Most critical test flows and use cases are below which are the core functionality of Craigslist.

    Create an account
        -Email
        -Guest
        -SMS
    User Login
        -Email
        -Guest
        -SMS
    Create a listing
        - Job
        - Housing
        - For Sale
        - Wanted
        - Service
        - Event
            -Edit a listing
            -Delete a listing
            -Upload image
    Search
        -Global Search
        -Filtering

    Any new features/changes should always introduce new unit testing and code coverage before being introduced to the code base. All bug fixes, features, stories, code changes should go through the normal code review process, QA process, and pass any and all regression testing and continuous integration pipeline.

    Depending on release cycles and deadlines, there should be code cutoffs or code freezes or other methods to allow proper and adequate QA time for testing. No new changes should take place during this period to minimize risk and regression. All developers and QA engineers should take accountability and make aware of any immediate release blockers or any gaps in testing.

    Any staff such as DevOps, Test Engineers, release engineers should be made aware of all changes in releases and any potential risk and downtime that may take place. Any gaps in testing should be made aware so team can decide whether or not to postpone or move forward with any releases. Any hot fix or patch updates should be immediately available if needed.  

    If any of the above test plan criteria is not met or available, a release should not take place unless there is a strong business or valid reason to perform a release.

## Possible Improvements to Craigslist:
    -UX changes to have a more modern feel to appeal to a wider and younger audience
    -Introduce more security checks to reduce spam and bots
    -Improve mobile responsiveness as the site was designed for browser viewing and is lacking mobile
    -Add stronger filtering system beyond sorting between 'newest' and 'oldest'
    -Add external APIs or export functionality for powered users
    -Add likes, dislikes, views, and other common marketplace capabilities
    -Honestly, lots of improvements can be done to Craigslist

## Documentation:
    All above features, functionality, and steps should have internal documents. Functionality and behaviors and use cases should be accessible for various departments such Customer Support, QA engineers, internal staff, and new team members if needed.

## Goals:
    First 30 days:
    Understand the product and how businesses currently use Osano products and cookie consent management tools and general privacy laws. I would like to understand how end users are using the product and any pros vs. cons with other products and competitors. I would work and understand the velocity of my pod and team and any road bumps in QA, regression, and testing and address those issues if any. I would like to understand the CI pipeline of Osano and be able to pull down the code base and be able to contribute code or test cases. Understand any outstanding backlogs issues, pain points, gaps in testing.

    First 90 days:
    Understand the release cycle of Osano and how stories are prioritized and developed. Understand what constitudes as done and help merge/integrate changes. Contribute in development, code coverage, reviews, bug triage, and integration of test cases. Participate in meetings and help promote a stronger QA and testing culture.

    First 180 days:
    Continue to help and promote that all developers should instill a sense of responsibility and accountability for testing. All unit testing, integration testing, and E2E testing should be integrated into the pipeline and developers should be given immediate feedback is something is broken. Release velocity should be faster and there should be reduced back and forth during development between QA and development. Core functionalities should have high test coverage and new features should be continiously adding value and test cases. 