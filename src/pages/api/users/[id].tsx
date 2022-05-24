import { NextApiRequest, NextApiResponse } from 'next'

// Params
// [...params].tsx

export default (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query
}