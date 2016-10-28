/*
 * Subtract router
 *
 * Get request
 *  a = 5
 *  b = 3
 *
 * Response
 *  2
 */

import express from 'express'
import subtract from '../operation/subtract'

const router = express.Router()
router.get('/', get)
export default router

function get(req, res, next) {
  const a = parseInt(req.query.a) || 0
  const b = parseInt(req.query.b) || 0

  res.send(subtract(a, b).toString())
}
