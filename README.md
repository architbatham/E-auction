<h1>E-Auction Website</h1>
    <h2>Overview</h2>
    <p>The E-Auction Website is a platform where users can add their products for auction and other users can place bids on these products. It includes user registration with email verification, product browsing, bidding, and various admin functionalities.</p>

    <h2>Features</h2>

    <h3>User Features</h3>
    <ul>
        <li><strong>User Registration:</strong> Users must register and verify their email to access the site.</li>
        <li><strong>Email Verification:</strong> Users receive a verification email. Unverified users cannot log in.</li>
        <li><strong>View Products:</strong> Browse and search through available auction items.</li>
        <li><strong>Add Products:</strong> List items for auction by providing necessary details.</li>
        <li><strong>View Bid Products:</strong> Check the products you have bid on and monitor their status.</li>
    </ul>

    <h3>Admin Features</h3>
    <ul>
        <li><strong>Manage Users:</strong> View, edit, and remove users from the platform.</li>
        <li><strong>Edit Profile:</strong> Update profile information and change the password.</li>
        <li><strong>Manage Categories:</strong> Add, edit, and remove categories for auction items.</li>
    </ul>

    <h2>Installation and Setup</h2>

    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Git</li>
    </ul>

    <h3>Clone the Repository</h3>
    <pre><code>git clone https://github.com/yourusername/e-auction-website.git
cd e-auction-website
</code></pre>

    <h3>Backend Setup</h3>
    <ol>
        <li>Navigate to the <code>server</code> directory:
            <pre><code>cd server</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Create a <code>.env</code> file and add the following environment variables:
            <pre><code>MONGO_URI=&lt;your_mongodb_connection_string&gt;
JWT_SECRET=&lt;your_jwt_secret&gt;
EMAIL_USER=&lt;your_email_for_verification&gt;
EMAIL_PASS=&lt;your_email_password&gt;
</code></pre>
        </li>
        <li>Start the backend server:
            <pre><code>npm start</code></pre>
        </li>
    </ol>

    <h3>Frontend Setup</h3>
    <ol>
        <li>Navigate to the <code>client</code> directory:
            <pre><code>cd client</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the frontend development server:
            <pre><code>npm start</code></pre>
        </li>
    </ol>

    <h3>Running the Application</h3>
    <ol>
        <li>Ensure both the backend and frontend servers are running.</li>
        <li>Open your browser and navigate to <code>http://localhost:3000</code> to view the application.</li>
    </ol>

    <h2>Usage</h2>
    <ul>
        <li><strong>Register:</strong> Create an account and verify your email.</li>
        <li><strong>Login:</strong> Access the site by logging in with your credentials.</li>
        <li><strong>Browse Products:</strong> View and search for products available for auction.</li>
        <li><strong>Add Products:</strong> List your items for auction.</li>
        <li><strong>Bid on Products:</strong> Place bids on items you are interested in.</li>
        <li><strong>Admin Panel:</strong> If you are an admin, manage users and categories through the admin panel.</li>
    </ul>

    <h2>Contributing</h2>
    <p>We welcome contributions! Please fork the repository and submit a pull request for any improvements.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
