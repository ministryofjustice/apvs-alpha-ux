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

//version 2.0

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

//version 2.1 start

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

// version 2.2 start

router.post('/v2-2/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/v2-2/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('v2-2/apply-4', { 'benefit': benefit })
})

router.get('/v2-2/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('v2-3/apply-5', { 'benefit': benefit })
  }
})

// version 2.3 start

router.post('/v2-3/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/v2-3/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('v2-3/apply-4', { 'benefit': benefit })
})

router.get('/v2-3/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('v2-3/apply-5', { 'benefit': benefit })
  }
})


router.post('/v2-3/login', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('login')
  } else {
    res.redirect('apply-1')
  }
})

// version 2.4 start

router.post('/v2-4/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

// router.get('/v2-4/apply-4', function (req, res) {
//   var benefit = req.query.benefit

//   res.render('v2-4/apply-4', { 'benefit': benefit })
// })

// router.get('/v2-4/apply-5', function (req, res) {
//   var benefit = req.query.benefit

//   if (benefit === '' | 'None of the above') {
//     res.redirect('el-no')
//   } else {
//     res.render('v2-4/apply-5', { 'benefit': benefit })
//   }
// })


router.post('/v2-4/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/v2-4/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version 2.5 start

router.post('/v2-5/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/v2-5/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('v2-5/apply-4', { 'benefit': benefit })
})

router.get('/v2-5/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('v2-5/apply-5', { 'benefit': benefit })
  }
})


router.post('/v2-5/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/v2-5/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})


// version 2.6 start

router.post('/v2-6/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/v2-6/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('v2-6/apply-4', { 'benefit': benefit })
})

router.get('/v2-6/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('v2-6/apply-5', { 'benefit': benefit })
  }
})


router.post('/v2-6/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/v2-6/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version 3.0 start

router.post('/v3/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/v3/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('v3/apply-4', { 'benefit': benefit })
})

router.get('/v3/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('v3/apply-5', { 'benefit': benefit })
  }
})


router.post('/v3/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/v3/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version 3.0 start

router.post('/v3-1/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/v3-1/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('v3-1/apply-4', { 'benefit': benefit })
})

router.get('/v3-1/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('v3-1/apply-5', { 'benefit': benefit })
  }
})


router.post('/v3-1/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/v3-1/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

module.exports = router
