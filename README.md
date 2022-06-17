# Kubiko - A Live Quizzing and polling App

Education is a constitutional right of every citizen that prepares an individual to play their role as a sophisticated member of society. The importance of Education can be implied by habituating the lack of its existence. In a country like India, education among the youths is now a big requirement for India to enter “Superpower” status. During the pandemic the world has become virtual. Our schools classes are all being taken place in applications like Ms Teams, Google meets etc. We are being tested on virtual applications also, but this is a hassle when it comes small scale schools and collages, where they don’t have enough resource. So we have taken a step forward in this direction and decided to make a full stack Quizzing web application to help them out, from the front end to the back everything will be covered. Its absolutely free of cost and will be user friendly for the teacher to use. As most of them browse through mobile it will also be mobile friendly. As we have entered the age of computers, the trend of online mode of exam won’t be going anywhere soon and hence after the pandemic situation also this web application will be useful.We have taken the initiative for making Kuebiko - a quizzing and polling, virtual classroom web application.

## Problems Solved by Kuebiko - Quiz App

- It can be used for easy monitoring of student's marks by the teacher
- Easy to setup Quizzes and live polls, which can be reused and the data will never be lost as it will be stored in a Database, and hence its much more effective.
- Virtual Classrooms, and test reminders
- Real time and live quizzes and polls which are timed
- Can be used in events also, as a creator you can create an Event for which the following activities can be added.
- Visual Representation of choices distribution among student from pie chart
- Class Raking after the quiz, easy for students to see where they stand in the class.
- Student Dashboards
- Chatbot

## Website

https://kubiko.herokuapp.com/

## To run it

Make a .env file, inside .env file:

SECRET=_Any secret word_

```sh
$ npm i
```

For Development purpose, install nodemon

```sh
$ npm i -D nodemon
```

```sh
$ npm start
```

Server side development is completed and it runs on port 8000

# Running Client Side

```
$ cd client

$ npm install or npm i

npm start
```

REACT will run locally on port 3000

Client side is not made completely, and has discrete pages for now

### To Run it (Recommend)

As server side is completly done, applications like Postman can be used to test and run the server endpoints, and it is recommended by us, as the user interface is not yet fully made.

Enjoy!

## Things That Got Done

## Completed Server Side

### Routes

- [x] POST /user/login Logins student/teacher
- [x] POST /user/register Registers as student/teacher
- [x] GET /user/logout Logs out the user
- [x] GET /user/c/isAuthenticated checks if the user is authenticated or not (**Important**)

### STUDENTS

- [x] GET /students/course Get all courses for a pirticular student (req.user)
- [x] POST /students/join Join course with course code
- [x] GET /students/quiz/:courseId Show Quizzes in the Course room
- [x] DELETE /students/course/:courseId leave the course
- [x] POST /students/quiz/:quizId submit the quiz (**Important**)
- [x] POST /students/marks/:quizId/:courseId POST the results of the quiz to the backend from REACT
- [x] GET /students/class/overall/:courseId Gets overall marks of all attempted quizzes in till now

### TEACHERS

- [x] POST /teachers/course creates Course room
- [x] GET /teachers/course gets all created course
- [x] GET /teachers/students/:courseId Gets all student in the course
- [x] GET /teachers/student/overall/:userId/:CourseId Gets overall marks of the student
- [x] POST /teachers/createQuiz/:courseId creates a new quiz (**Important**)
- [x] POST /teachers/question creates a new Question
- [x] DELETE /teachers/:courseId Deletes the course for all student

## Client Side

- [x] Context
- [x] Authorization Services
- [x] Components
