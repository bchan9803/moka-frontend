import express from 'express'


app.use(express.json());
// app.use(cors());

PORT = 3001;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

