Feature: Creating articles
  In order to have articles to assign comments to
  As a user
  I want to create them easily
  Scenario: Creating an article
    Given I am on the homepage
    When I follow "New Article"
    And I fill in "Title" with "TextMate 2"
    And I press "Create Article"
    Then I should see "Article has been created."