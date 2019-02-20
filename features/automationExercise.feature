Feature: Validating landing page

    Scenario: Verifying value labels and text
        Given the user is on landing page
        When page containing value label and text is displayed
        Then count of values displayed  on the page is equal to 5
        And values on the page is greater than Zero
        And values are formatted as currencies
        And total balance is correct based on the values listed on the screen
        And total balance is equal to the sum of the all the values listed on the page