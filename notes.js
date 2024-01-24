//all examples
//  three branches: main, mikayla, prof

//starting file:
red
green
blue

//----------------------------------------
//1st example:
//----------------------------------------

//branch mikayla created
red
green
blue
App js routing change 1

//mikayla will push changes to branch mikayla

//branch prof created
red
green
blue
App js routing change 2

//prof will push changes to branch prof

//branch mikayla will do pull request to main branch,
//  no conflicts
//so now the main looks like:
red
green
blue
App js routing change 1

//branch prof will do pull request to main branch
//  will be conflict

//(prof will abort pull request)

//scenario 1a: reviewer accepts pull request from the prof branch

//scenario 1a(i) (accept prof)
red
green
blue
App js routing change 2

//scenario 1a(ii) (accept both)
red
green
blue
App js routing change 1
App js routing change 2

//scenario 1b: reviewer denies pull request from prof branch
//  process of denying pull request:
//    resolving conflict
//      accept current change
//      staging
//      committing (with comment about denial)
//      pushing
//    comment in converstion tab of pull request


//----------------------------------------
//2nd example:
//----------------------------------------

//branch mikayla created
red
green
blue
App js routing change 1

//branch mikayla will do pull request to main branch, no conflicts

//branch prof created
red
green
blue
App js routing change 1
App js routing change 2

//branch prof will do pull request to main branch,
//  with NO CONFLICT

//when the reviewer reviews the pull request, 
//  she will not see any conflicts
//  she will still see the changes
//  This code could still break the app
//  so it's important to still unit test
//    the code before accepting the pull request.

//----------------------------------------
//3rd example:
//----------------------------------------
//branch mikayla created
red
green
blue
some front-end change

//branch prof created
red
green
blue
some back-end change

//branch prof will do pull request to branch mikayla
//branch mikayla will deal with it appropriately
//iterations to resolve any conflicts
//branch mikayla will do pull request to main

