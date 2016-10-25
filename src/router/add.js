/*
 * Add router
 *
 * Get request
 *  a = 1
 *  b = 1
 *
 * Response
 *  2
 */

import express from 'express'
import add from '../operation/add'

const router = express.Router()
router.get('/', get)
export default router

function get(req, res, next) {
  const a = parseInt(req.query.a) || 0
  const b = parseInt(req.query.b) || 0

  res.send(add(a, b).toString())
}
