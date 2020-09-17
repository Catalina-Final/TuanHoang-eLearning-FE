App name : E-learning platform
Technical : Mongo, Expresss, ReactJs, NodeJs
Brief : Education Sharing Platform

User : Guest, Student, Teacher, Admin
Structure:

UX :
A/ Guest :
Begin: user will see <landing page> include : info, advertise, courses offered.. etc
Usage: - user will be able to click in to single Course to see <Course Detail page>
this Detail Page will <Display> -> Course.Title, Course.Description, Course.Author, TotalUnit Number - There would be a <Button> to <Sign-in page> -> Sign-in will send request to sever, and receive data including <ROLES> which decide what to show in <DashBoard> - There would be a <Button> to <Enrol> that guest could be redirect to a <form>
this <registration form> will send all data to backend to create newuser

B/ All login :
Begin: After login, with <role admin> - users will be redirected to <DashBoard>
this <DashBoard> would have <Profile Section>, <MainFeeds Section>,.. + <Profile> display current user info and roles + <MainFeeds> display detail according to current user roles - Also, as login, users would be able to see list of unit of course and it detail - User able to logout
C/ Roles login
Begin: After attain current user Roles
1/ Student:
able to see list of units per course <enrol>
able to interact with <show course / unit detail pages>
able to use <submission link> that redirect to a form to submit assignment
able to see total accumulated grade on profike
able to see units grade
2/ Teacher:
inherit Student
also able to create,edit Course,Units, submission link
able to see <list of submission to grade> in <Teacher mainfeed dashboard>
able to change Unit and Course relationship
3/ Admin
able to have all access
able to delete User
able to accept registration via <registration to approve> in <Admin mainfeed>
able to edit user roles

Progress:
. Basic Backend done CRUD for user,student,teacher,admin,course,unit
. Inntialize Front End

====Temporary end of Draft UX =====

Progress

upcoming

current

done
setup stateless components and basic layout
INDEX combined redux.reducers.(constants,actions,reducers)
COURSE getAllCourse redux.reducers.(constants,actions,reducers)
fetching getAllCourse in Homepage.js
rendered cards in homepage
connect to get all course
set up redux
