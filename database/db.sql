create database Appointments;

use  Appointments;


-- patients

use Appointments;
create table patients (
patients_id int primary key auto_increment,
full_name varchar(250),
email varchar(250),
phone int ,
password_hash varchar(250),
data_of_brith date ,
gender varchar(250),
medical_history longtext,
created_at date
);




-- doctors 
create table doctors (
doctor_id int primary key auto_increment,
full_name varchar(250),
specialization varchar(250),
email varchar(250),
phone int ,
bio longtext ,
work_hours time,
created_at date

);

-- Appointment

create table Appointment(
Appointment_id int primary key auto_increment,
patients_id int ,
doctor_id int ,
Appointment_date date ,
Appointment_time time ,
Appointment_status varchar(250),
notes longtext,
creates_at date,

foreign key(patients_id) references patients(patients_id),
foreign key(doctor_id) references doctors(doctor_id)
);

-- services 
create table services (
services_id int primary key auto_increment,
services_name varchar(250),
services_decscription longtext ,
price int 
);


-- doctors_services
create table doctors_service(
id int primary key auto_increment,
doctor_id int,
services_id int,
foreign key(doctor_id) references doctors(doctor_id),
foreign key(services_id) references services(services_id)
)



