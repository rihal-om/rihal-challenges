# Job Requirements (Data Scientists)
We are looking for data scientists and machine learning engineers who enjoy analyzing data, exercise critical thinking and know how to link between business requirements and the corresponding technical requirements when building a machine learning project. The ideal candidate will already have a programming foundation establised by learning topics such as data structures, algorithms, and have already worked on programming projects, whether software or data science projects. 

# Rihal Data Science Challenge

## Overview
You are a data scientist given datasets collected from used cars advertisements. Your task is to build and evaluate machine learning algorithms that will predict the price of used cars. 

The datasets are divided into training and testing sets. Your models must train on the training dataset, and use the testing dataset for testing and evaluation purposes **only**.

Compare the test dataset's price USD with your predictions using **Mean Absolute Error** as the main evaluation metric. You can use additional metrics and evalutions methods, but you have to use Mean Absoluate Error as part of your model's evaluation. 

You are allowed to use any technique in exploring, loading, and transforming the data. Additionally, feel free to engineer more features from the given data. Build any model, and use any parameters. In summary, you are free to use any method and technique in getting the best model possible with the lowest error rate.

We encourage you to explore as many methods and techniques as possible in exploring the data, detecting analyzing the trends and patters you find, engineering more features, transforming the data, and ofcourse, creating, training, testing and evaluating models. Keep in mind, that code readability and notebook organization is very important as well. 

Please make sure you document your notebook thoroughly. When explaining your choice of methods, please use markdown cells to write your explanations in the notebook, and when commenting on code use code comments instead. 

Goodluck!


## Data 
1. manufacturer_name: the name of the car manufacturer
2. transmission: type of car transmission
3. color: the car's body color
4. odometer_value: how many kilometers are recorded on the car
5. year_produced: the year the car has been produced
6. engine_fuel: car engine's fuel type
7. engine_type: car engine's type
8. engine_capacity: the capacity of the engine in liters
9. body_type: car body's type
10. has_warranty: does the car have warranty?
11. ownership: new/owned/emergency. emergency means the car has been damaged previously severly. 
12. type_of_drive: front/rear/all type of drive
13. is_exchangeable: if True, the owner of the car is willing to exchange the car with other cars
14. number_of_photos: the number of photos the car's advertisement contains
15. number_of_maintenance: the number of times the car has been repaired or serviced
16. duration_listed: the number of days the car's advertisement is listed
17. price_usd: the price of the car in the advertisement. The **label** to predict
