var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index')
})

// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name': 'Foo' })
})

// Branching

router.get('/examples/over-18', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18

  if (over18 === 'false') {
    // redirect to the relevant page
    res.redirect('/examples/under-18')
  } else {
    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18')
  }
})

router.post('/v2/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/v2/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('v2/apply-5', { 'benefit': benefit })
  }
})

router.post('/v2-1/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/v2-1/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('v2-1/apply-4', { 'benefit': benefit })
})

router.get('/v2-1/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('v2-1/apply-5', { 'benefit': benefit })
  }
})

module.exports = router
