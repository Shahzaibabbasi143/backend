const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors()); // Allow frontend to access API
app.use(express.json()); // Parse incoming JSON

// ✅ Routes
app.use('/api', contactRoutes); // /api/contact

// ✅ Test Route (Manual Check)
app.get('/api/ping', (req, res) => {
  res.send('✅ Backend is alive!');
});

// ✅ Root Route (Optional)
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
