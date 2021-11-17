import express from "express";

export const get404 = (req: express.Request, res: express.Response) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
