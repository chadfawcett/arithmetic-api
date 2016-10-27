/*
 * Provides some test buttons on the home page of our app
 */

import express from 'express'

const router = express.Router()
router.get('/', get)
export default router

function get(req, res, next) {
  res.send('<a href="/add?a=1&b=2">1 + 2</a><br/><a href="/subtract?a=3&b=2">3 - 2</a>')
}
