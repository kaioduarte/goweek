const Tweet = require('../models/tweet')

module.exports = {
  getAll: async (req, res) => {
    const tweets = await Tweet.find({}).sort('-createdAt')
    res.json(tweets)
  },
  create: async (req, res) => {
    const tweet = await Tweet.create(req.body)

    req.io.emit('tweet', tweet)
    res.json(tweet)
  }
}
