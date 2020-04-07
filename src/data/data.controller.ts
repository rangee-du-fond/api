import { db } from '../core/db';

export const getAllData = () => {
  return db.query('SELECT * FROM data;').then(res => res.rows);
};
