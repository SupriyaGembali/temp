# Mentorsoft-engage22

![language](https://img.shields.io/badge/-Microsoft%20Engage%2022-bluevoilet)

This project is being developed for Microsoft Engage 2022 mentorship program. This is a Website for Face Recognition.





##  🚩 Technologies used:
#### Programming Languages : <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/><img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/><img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/><img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"/>  
#### Version Control : <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>  
####  Frameworks/Libraries : Express , Ejs ,face api.js
#### Authentication : passportjs

## 🚩Installation/Environment Setup 

  #### 1. Clone the Website
  
  * Make a new folder and open the terminal there.
  * Write the following command and press enter.
  
  ```
    $ git clone gh repo clone SupriyaGembali/Face-Recognition
  ```
    
 #### 2. Install node packages
  * Write the following command and press enter to download all required node modules.
 
   ```
   $ npm install 
   
   $ npm i --save express express-session passport passport-google-oauth2
  ```
  
#### 3. Run Locally

 * While you are still inside the cloned folder, write the following command to run the website locally. 
 
 ```
   $ nodemon app
 ```
  
 ###### NOTE: The port by default will be ```http://localhost:3000/```


## Features:
  - Home page to access different sections of the website
  - Google authntication to ensure safety
  - once signed in you can upload n number of images one by one to crosscheck with previous police records
  - If found in recorde it retrieves the data regarding the image uploaded like name,criminal history 
  - It face uploaded is unknown it retrieves the data accordingly 
  - It can be used by police for faster access of their records 
  

## Restrictions:
  - It cannot be used for a group photo
  - This website works only for some set of images which are labeled earlier.
  - Please use test images provided in git repo for testing my website so as to check results for known faces 
  

NOTE: Use pc for best experience

## Local Setup
  1. Clone the repository

     ```
     git clone https://github.com/SupriyaGembali/Face-Recognition
     
     ```

  2. Install all dependencies

     ```
     npm install 
     
     npm i --save express express-session passport passport-google-oauth2
     
     ```
  
  3. Start the server
  
     ```
     nodemon app 
     
     ``` 
  3. Run server
  
     ```
     http://localhost:3000/
     
     ``` 


#### If you like it please give it a star!! ⭐



