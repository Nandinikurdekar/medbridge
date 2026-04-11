# 🩺 MedBridge – Multilingual Patient Intake System

## 📌 Overview

MedBridge is a web-based patient intake system designed to simplify medical data collection. It allows users to enter symptoms in multiple languages, processes the input, and generates a structured patient report while storing the data in a database.

---

## 🚀 Features

* 🌍 **Multilingual Support** (English, Hindi, Kannada, Tamil, Telugu, Bengali, Konkani)
* 🧾 **Patient Intake Form** (Body part, symptoms, pain level, duration, notes)
* 🎤 **Voice Input** for notes
* 📄 **File Translation Support**
* 💾 **Database Storage** using MySQL
* 📊 **View Patient Records Dashboard**
* 📱 **Responsive Design (Mobile-Friendly)**
* 🖨️ **Downloadable Medical Report**

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** PHP
* **Database:** MySQL
* **Server:** XAMPP

---

## 🧠 How It Works

1. User selects language and fills the patient form
2. Data is processed using JavaScript (dynamic dropdowns & translations)
3. Form is submitted to PHP backend
4. Data is stored in MySQL database
5. Patient summary report is generated
6. Records can be viewed from the dashboard

---

## 📂 Project Structure

```
medbridge/
│
├── index.html        # Landing page (language selection)
├── form.html         # Patient input form
├── summary.php       # Generates patient report + saves data
├── view.php          # Displays all patient records
├── db.php            # Database connection
├── script.js         # Frontend logic
├── style.css         # Styling
├── translations.json # Multilingual data
└── README.md
```

---

## ⚙️ Setup Instructions

1. Install **XAMPP**
2. Move project folder to:

   ```
   C:\xampp\htdocs\
   ```
3. Start **Apache** and **MySQL** from XAMPP
4. Open phpMyAdmin:

   ```
   http://localhost/phpmyadmin
   ```
5. Create database:

   ```
   medbridge
   ```
6. Run this SQL to create table:

```sql
CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    body VARCHAR(50),
    symptom VARCHAR(50),
    pain INT,
    duration VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

7. Open project:

   ```
   http://localhost/medbridge/index.html
   ```

---

## 📸 Screenshots

Home Page
<img width="1918" height="946" alt="image" src="https://github.com/user-attachments/assets/623eb163-7477-4216-9e71-32d7f693cc9c" />

Patient Form
<img width="1915" height="880" alt="image" src="https://github.com/user-attachments/assets/748fb7d7-6022-455b-89ee-938a67ccc259" />
<img width="1912" height="940" alt="image" src="https://github.com/user-attachments/assets/20d0d4d3-83c0-4095-8251-7fa6296da18f" />
<img width="1918" height="954" alt="image" src="https://github.com/user-attachments/assets/8ce662c7-d86f-4e73-99fc-8c992471063b" />

Report Generator
<img width="1905" height="880" alt="image" src="https://github.com/user-attachments/assets/c6673187-df63-45ff-a407-bdf146a2e724" />

Patient Record Viewer
<img width="1905" height="888" alt="image" src="https://github.com/user-attachments/assets/e1a96330-bb39-4cb6-a79d-e03dd9d5c5a0" />

---

## 🎯 Future Enhancements

* Patient record deletion & editing
* Search & filter functionality
* Authentication system
* Mobile app integration

---

## 👩‍💻 Author

**Nandini Kurdekar**

---

## 📜 License

This project is for educational purposes.
