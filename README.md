# Lab 5 - Starter
# Name: Kabir Sachdev

### Check Your Understanding
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

When considering the "message" feature of a messaging application, which allows a user to write and send a message to another user, unit testing is typically not the most effective approach. The complexity of this feature arises from its dependency on multiple system components working together—such as the user interface, network communication, and server-side processing. Unit tests are designed to evaluate the functionality of individual components in isolation, without external interactions. Therefore, they are not suited to test the integrated performance of components that the messaging feature requires. Instead, integration tests or end-to-end tests are more appropriate for this feature as they can simulate real-world usage across the entire application stack, ensuring that all components interact correctly to achieve the desired outcome.


2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

For the "max message length" feature in a messaging application, which restricts user inputs to no more than 80 characters, unit testing is an excellent approach. This feature is a specific function that can be isolated and tested independently of other parts of the application. Unit testing is ideal here because it focuses on verifying that single pieces of the application perform as expected under various conditions. By using unit tests, we as developers, can confirm that the input field accepts up to 80 characters, appropriately handles inputs exceeding this limit, and behaves correctly with fewer characters. This targeted testing approach helps ensure that the feature correctly enforces the message length constraint, making it a straightforward and effective use of unit testing.







