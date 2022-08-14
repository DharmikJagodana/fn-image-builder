import { config } from 'dotenv';
config();

export const image_builder = async (
  req: any,
  res: any
): Promise<void> => {
  const { method } = req;
  return res.status(200).send('OK');
};
