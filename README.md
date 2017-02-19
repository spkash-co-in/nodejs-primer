# Nodejs Primer
This primer will introduce basic NodeJS concepts. The following core packages are explored

1. readLine
2. file
3. file-async
4. file-stream
5. http
6. net

Further to the core the following 3rd party packages are explored 

1. mysql (db)
2. express (simple-express)


## Anatomy of a nodejs app

'require' statements are used to import classes. We may create an instance of the imported class and store in a variable. We can now call the variable to issue api calls exposed by the class. The folder names indicate the function we are exploring. The running components are named 'server.js' under the directories, so the command issues remain the same.

Additionally when third-party packages are used we need to install them from using npm as they do not arrive with the standard nodejs implementation. One needs to ensure a package.json file is present with a dependencies section. The following commands may then be issued and we can see that node automatically adds the dependencies to package.json


### For mysql
`npm install mysql --save`

### For express
`npm install body-parser --save`
`npm install express --save`



## readLine

## file

## file-async

## file-stream

## net

## http

## db

## express



