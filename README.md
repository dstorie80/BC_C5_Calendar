# BC_C5_Calendar_Appointments

Displays times for a single day and allows a user to input appointmentments.  There is also CSS to show the current time block (in red), past time blocks (in grey) and future time blocks (in green).

## Description

This project was created for allowing practice in manipulating the dom elements 

- This project allowed me to get a better understanding on how to look for ids/classes on the dom and then use js to edit or change them based on criteria.
- I was able to successfully update the index.html to include a 24 hour period each in 1 hour blocks.  Each block has its own <div> with its own class 
- I was able to successfully store the current time and date and display it as part of the header.  Then use that time/date to update the dom and set the class for each div with either a past/present/future to the class
- I was also able to practice saving data to the local store by class
- I was able to practice retrieving data from the local store and placing the data in the correct class.


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To pull the rep files:
1. Go to my git hub repo (https://github.com/dstorie80/BC_C5_Calendar)
2. Click on the code button and select SSH
3. navigate git bash to a designated folder of your chosing (CD <filepath/> [if a new folder needs to be created, you can use the mkdir command in git bash])
4. Pull the latest update from git using the clone command in git bash (git clone <repo url>)
5. Once the repo has been downloaded into the folder, you can use open vs code (code . in git bash) to open the files from the repo



## Usage

To access the website you will need to follow this published link - https://dstorie80.github.io/BC_C6_Forecast/

To access the latest repo you will need to follow this github rep link - (https://github.com/dstorie80/BC_C6_Forecast.git)

To start, you will be presented with only a 1 option.  To enter a city into text field. 





By clicking the submit button or hitting enter on the keyboard you will be presented with the 3-hour forecast.  Giving you the City name, Temprature, Wind Speed, and Humidity.



As the more cities are selected, the more a library of past cities will be entered into the area below the search



At any point the user can go back to one of the previously entered cities in the library, and select it to see if the weather has changed at all.












## Credits

The API used to get the data came from the project readme file:

https://api.openweathermap.org/data/2.5/forecast



## License

No license used 
