export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.status(200).json({ message: 'Fetched data' });

    case 'POST':
      // Create logic here
      return res.status(201).json({ message: 'Created successfully' });

    case 'PUT':
      // Replace resource logic
      return res.status(200).json({ message: 'Updated fully' });

    case 'PATCH':
      // Partial update logic
      return res.status(200).json({ message: 'Updated partially' });

    case 'DELETE':
      // Delete logic
      return res.status(204).end(); // No content

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
      return res.status(405).json({ error: `Method ${method} not allowed` });
  }
}
