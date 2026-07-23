USE golf_charity_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    membership ENUM('Free','Premium') DEFAULT 'Free',
    role ENUM('user','admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    plan_name ENUM('Monthly','Quarterly','Yearly') NOT NULL,

    amount DECIMAL(10,2) NOT NULL,

    status ENUM('Pending','Active','Expired') DEFAULT 'Pending',

    start_date DATE,

    end_date DATE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

