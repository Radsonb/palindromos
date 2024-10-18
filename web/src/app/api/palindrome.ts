import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { start, end } = req.query;

  try {
    const response = await fetch(
      `http://localhost:5000/palindrome?start=${start}&end=${end}`,
    );

    if (!response.ok) {
      return res.status(response.status).json({ message: 'Erro na requisição' });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
