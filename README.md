Welcome to the nodejs-primer wiki!

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

### For body-parser needed in express app
`npm install body-parser --save`

### For express
`npm install express --save`


## readLine

A simple node app that asks for user input and displays it back on console
![readLine](https://github.com/spkash-co-in/nodejs-primer/blob/master/readLineCapture.JPG)

## file

A simple file app that opens a file and displays the content on the console.
Note the usage of readFileSync api call. This instructs node to execute the file open in a synchronous manner.
![fileCapture](https://github.com/spkash-co-in/nodejs-primer/blob/master/fileCapture.JPG)

## file-async
This app demonstrates the async non-blocking nature that node is famous for. 
Note the usage of readFile which is asynchronous and non-blocking.

1. When node hits this api it schedules the read of the file to happen asynchronously by another thread.
2. It then continues execution from the next step.
3. One can see that consloe log for testFile which is the next step main thread executes is 'undefined'.
4. And then main thread moves to the next step which sets a timer for 100ms.
5. When main thread then executes the same console log for testFile we are able to see the contents.
6. Somewhere between these two console log statements, node has asynchronously opened the file and read into the testFile variable. 
![fileAsync](https://github.com/spkash-co-in/nodejs-primer/blob/master/fileasyncCapture.JPG)

## file-stream
The async nature of node is handled behind the scenes using event loops. 
### Traditional
Look at the following diagram of traditional execution approach in regualr app-servers/web-servers

![traditional](https://github.com/spkash-co-in/nodejs-primer/blob/master/traditionalCapture.JPG)

1. The servers are configured with thread pools
2. When server gets a request it hands it over to one of the free threads
3. Threads complete execution and return response
4. When all threads available to a server are working, the requests that arrive tend to block or get no response

### Node mechanism
Contrast this with the node mechanism

![nodeCapture](https://github.com/spkash-co-in/nodejs-primer/blob/master/nodeCapture.JPG)

1. Node main thread runs in a loop handling events that are queued
2. When main thread hits a sync api call its executes it without sending it to another thread
3. When main thread hits a async api call it hands over the execution to worker thread and proceeds to next step
4. The main thread goes on to listen to any more events that are available to be handled
5. The worker thread emits events on a continual basis. In out file example the following are those events
  * File Open event
  * File Data event
  * File Close event
6. The main thread reacts to these events by calling the appropriate callback handler for those events
7. The worker thread goes back to idle pool once its task is done 
8. The main thread goes on the event loop. When no more scheduled threads are pending the main thread exits.


![fileStream](https://github.com/spkash-co-in/nodejs-primer/blob/master/filestreamCapture.JPG)

## net
Simple node app to demonstrate the net api. 
Server starts on port 23, we can then telnet to localhost and connect to the server.
### output
![netCapture](https://github.com/spkash-co-in/nodejs-primer/blob/master/netCapture.JPG)

## http
http app that will take a http request and respond back.
### output
![httpCapture](https://github.com/spkash-co-in/nodejs-primer/blob/master/httpCapture.JPG)

## db
This section we will visit connecting to mysql database.
For my example I connect to a docker mysql container that I run on my machine.
You can connect to a standalone server as well by providing the right config.

For mysql docker setup
* Download the mysql docker image
* Run this command to start mysql initially
* The -v option is to create a volume and store data on your hard-disk 
* The next time the container starts it will load data from that store.

`docker run --name mysql -v //s/mysqldata:/var/lib/mysql -e MYSQL_USER=mysql -e MYSQL_PASSWORD=mysql -e MYSQL_ROOT_PASSWORD=root -it -p 3306:3306 mysql`

* Use this command for stopping the container

`docker stop mysql`

* From the next time you may use the following command to start mysql again

`docker start mysql`

Enter in interactive mode to your mysql container using this command
`docker exec -it mysql mysql -uroot -p`
### output - mysql
The following snapshot explains the table details
![mysql](https://github.com/spkash-co-in/nodejs-primer/blob/master/mysqlCapture.JPG)
### output - node db app
Run the node app to see it connect to the mysql server and display contents on console
![dbCapture](https://github.com/spkash-co-in/nodejs-primer/blob/master/dbCapture.JPG)

## express
Using express we can write http and REST based apps very easily with node.
### output - Http GET
Follow the snapshots and see express display a form to the user.
![simpleexpress1](https://github.com/spkash-co-in/nodejs-primer/blob/master/simpleexpress1Capture.JPG)
### output - Ajax POST
The user enters details and submits which is received by the express backend.
![simpleexpress2](https://github.com/spkash-co-in/nodejs-primer/blob/master/simpleexpress2Capture.JPG)
### output - Ajax response
Express process and sends back a response, and ajax response in this case.
![simpleexpress3](https://github.com/spkash-co-in/nodejs-primer/blob/master/simpleexpress3Capture.JPG)
