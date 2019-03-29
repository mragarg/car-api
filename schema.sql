create table cars {
    id serial primary key,
    year integer,   -- Year of the car
    make varchar(100), -- Make/Manufacturer of the car
    model varchar(200), -- Specific Model of the car
    class varchar(100) -- Class of the car (i.e. Coupe, Truck, Sedan, Van, Convertible, etc.)
}