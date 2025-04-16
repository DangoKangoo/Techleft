export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body); // Replace with email service or DB logic
      res.status(200).json({ message: 'Preorder submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }