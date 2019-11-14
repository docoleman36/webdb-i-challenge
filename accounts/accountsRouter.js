const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('accounts')
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(err => {
      res.status(500).json({ message: 'problem with the database' });
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.select('*').from('accounts').where({ id })
    .then(accounts => {
      if (accounts[0]) {
        res.status(200).json(accounts);
      } else {
        res.status(404).json({ message: 'invalid id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'db problem' });
    })
})

router.post('/', async (req, res) => {
  const postData = req.body;

  try {
    const post = await db.insert(postData).into('accounts');
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'db problem', error: err });
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('accounts').where({ id }).update(changes)
    .then(count => {
      if (count) {
        res.status(200).json({ updated: count });
      } else {
        res.status(404).json({ message: 'invalid id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'db problem' });
    });
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const count = await db.del().from('accounts').where({ id });
    count ? res.status(200).json({ deleted: count })
      : res.status(404).json({ message: 'invalid id' });
  } catch (err) {
    res.status(500).json({ message: 'database error', error: err });
  }
})


module.exports = router;