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

router.post('/alpha/v2/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/alpha/v2/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v2/apply-5', { 'benefit': benefit })
  }
})

//version 2.1 start

router.post('/alpha/v2-1/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/alpha/v2-1/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v2-1/apply-4', { 'benefit': benefit })
})

router.get('/alpha/v2-1/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v2-1/apply-5', { 'benefit': benefit })
  }
})

// version 2.2 start

router.post('/alpha/v2-2/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/alpha/v2-2/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v2-2/apply-4', { 'benefit': benefit })
})

router.get('/alpha/v2-2/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v2-3/apply-5', { 'benefit': benefit })
  }
})

// version 2.3 start

router.post('/alpha/v2-3/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/alpha/v2-3/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v2-3/apply-4', { 'benefit': benefit })
})

router.get('/alpha/v2-3/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v2-3/apply-5', { 'benefit': benefit })
  }
})


router.post('/alpha/v2-3/login', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('login')
  } else {
    res.redirect('apply-1')
  }
})

// version 2.4 start

router.post('/alpha/v2-4/apply-2', function (req, res) {
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


router.post('/alpha/v2-4/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/alpha/v2-4/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version 2.5 start

router.post('/alpha/v2-5/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/alpha/v2-5/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v2-5/apply-4', { 'benefit': benefit })
})

router.get('/alpha/v2-5/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v2-5/apply-5', { 'benefit': benefit })
  }
})


router.post('/alpha/v2-5/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/alpha/v2-5/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})


// version 2.6 start

router.post('/alpha/v2-6/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/alpha/v2-6/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v2-6/apply-4', { 'benefit': benefit })
})

router.get('/alpha/v2-6/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v2-6/apply-5', { 'benefit': benefit })
  }
})


router.post('/alpha/v2-6/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/alpha/v2-6/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version 3.0 start

router.post('/alpha/v3/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('alpha/v3/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v3/apply-4', { 'benefit': benefit })
})

router.get('alpha/v3/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v3/apply-5', { 'benefit': benefit })
  }
})


router.post('/alpha/v3/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/alpha/v3/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version 3.1 start

router.post('/alpha/v3-1/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('alpha/v3-1/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v3-1/apply-4', { 'benefit': benefit })
})

router.get('alpha/v3-1/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v3-1/apply-5', { 'benefit': benefit })
  }
})


router.post('/alpha/v3-1/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/alpha/v3-1/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version 3.2 start

router.post('/alpha/v3-2/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('alpha/v3-2/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v3-2/apply-4', { 'benefit': benefit })
})

router.get('alpha/v3-2/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v3-2/apply-5', { 'benefit': benefit })
  }
})


router.post('/alpha/v3-2/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/alpha/v3-2/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version 3.3 start

router.post('/alpha/v3-3/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('alpha/v3-3/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('alpha/v3-3/apply-4', { 'benefit': benefit })
})

router.get('alpha/v3-3/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('alpha/v3-3/apply-5', { 'benefit': benefit })
  }
})


router.post('/alpha/v3-3/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/alpha/v3-3/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version BETA V1 start

router.post('/beta/v1/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-22')
  }
})

router.get('/beta/v1/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v1/apply-4', { 'benefit': benefit })
})

router.get('/beta/v1/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v1/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v1/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v1/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})


// version BETA V1.1 start

router.post('/beta/v1-1/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-3')
  }
})

router.get('/beta/v1-1/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v1/apply-4', { 'benefit': benefit })
})

router.get('/beta/v1-1/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v1-1/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v1-1/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v1-1/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version BETA V2.0 start

router.post('/beta/v2/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-3')
  }
})

router.get('/beta/v2/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v2/apply-4', { 'benefit': benefit })
})

router.get('/beta/v2/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v2/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v2/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v2/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version BETA V2.1 start

router.post('/beta/v2-1/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-3')
  }
})

router.get('/beta/v2-1/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v2-1/apply-4', { 'benefit': benefit })
})

router.get('/beta/v2-1/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v2-1/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v2-1/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v2-1/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version BETA V2.2 start

router.post('/beta/v2-2/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-3')
  }
})

router.get('/beta/v2-2/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v2-2/apply-4', { 'benefit': benefit })
})

router.get('/beta/v2-2/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v2-2/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v2-2/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v2-2/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// version BETA V2.3 start

router.post('/beta/v2-3/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-3')
  }
})

router.get('/beta/v2-3/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v2-3/apply-4', { 'benefit': benefit })
})

router.get('/beta/v2-3/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v2-3/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v2-3/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v2-3/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// route to child journey adding

router.get('/beta/v2-3/apply-99', function (req, res) {
  var eligibilityChildren = req.query.eligibilityChildren

  if (eligibilityChildren === 'true') {
    res.redirect('/beta/v2-3/apply-99-child')
  } else {
    res.render('beta/v2-3/apply-99')
  }
})

router.get('/beta/v2-3/apply-add-info-taxi.html', function (req, res) {
  var childJourney = req.query.childJourney

  if (childJourney === 'true') {
    res.redirect('/beta/v2-3/apply-add-info-train-child.html')
  } else {
    res.render('beta/v2-3/apply-add-info-taxi.html')
  }
})

// version BETA V3 start

router.post('/beta/v3/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-3')
  }
})

router.get('/beta/v3/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v3/apply-4', { 'benefit': benefit })
})

router.get('/beta/v3/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v3/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v3/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v3/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// route to child journey adding

router.get('/beta/v3/apply-99', function (req, res) {
  var eligibilityChildren = req.query.eligibilityChildren

  if (eligibilityChildren === 'true') {
    res.redirect('/beta/v3/apply-99-child')
  } else {
    res.render('beta/v3/apply-99')
  }
})

router.get('/beta/v3/apply-add-info-taxi.html', function (req, res) {
  var childJourney = req.query.childJourney

  if (childJourney === 'true') {
    res.redirect('/beta/v3/apply-add-info-train-child.html')
  } else {
    res.render('beta/v3/apply-add-info-taxi.html')
  }
})

// version BETA V3 alt-start code start

router.post('/beta/v3-alt-start/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-3')
  }
})

router.get('/beta/v3-alt-start/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v3-alt-start/apply-4', { 'benefit': benefit })
})

router.get('/beta/v3-alt-start/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v3-alt-start/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v3-alt-start/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v3-alt-start/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// route to child journey adding

router.get('/beta/v3-alt-start/apply-99', function (req, res) {
  var eligibilityChildren = req.query.eligibilityChildren

  if (eligibilityChildren === 'true') {
    res.redirect('/beta/v3-alt-start/apply-99-child')
  } else {
    res.render('beta/v3-alt-start/apply-99')
  }
})

router.get('/beta/v3-alt-start/apply-add-info-taxi.html', function (req, res) {
  var childJourney = req.query.childJourney

  if (childJourney === 'true') {
    res.redirect('/beta/v3-alt-start/apply-add-info-train-child.html')
  } else {
    res.render('beta/v3-alt-start/apply-add-info-taxi.html')
  }
})

router.get('/beta/v3-alt-start/returning.html', function (req, res) {
  var returningUser = req.query.returningUser

  if (returningUser === 'no') {
    res.redirect('/beta/v3-alt-start/apply-1.html')
  } else {
    res.render('beta/v3-alt-start/returning.html')
  }
})

// version BETA V4 start

router.post('/beta/v4/apply-2', function (req, res) {
  var relationship = req.body.relationship

  if (relationship === 'Other') {
    res.redirect('apply-3')
  } else {
    // close relative, partner or sole visitor
    res.redirect('apply-3')
  }
})

router.get('/beta/v4/apply-4', function (req, res) {
  var benefit = req.query.benefit

  res.render('beta/v4/apply-4', { 'benefit': benefit })
})

router.get('/beta/v4/apply-5', function (req, res) {
  var benefit = req.query.benefit

  if (benefit === '' | 'None of the above') {
    res.redirect('el-no')
  } else {
    res.render('beta/v4/apply-5', { 'benefit': benefit })
  }
})


router.post('/beta/v4/apply-1', function (req, res) {
  var returningUser = req.body.returningUser

  if (returningUser=== 'Yes') {
    res.redirect('apply-1')
  } else {
    res.redirect('login')
  }
})

router.post('/beta/v4/apply-10', function (req, res) {
  var eligibilityNo = req.body.eligibilityNo

  if (eligibilityNo=== 'Yes') {
    res.redirect('apply-10')
  } else {
    res.redirect('apply-1')
  }
})

// route to child journey adding

router.get('/beta/v4/apply-99', function (req, res) {
  var eligibilityChildren = req.query.eligibilityChildren

  if (eligibilityChildren === 'true') {
    res.redirect('/beta/v4/apply-99-child')
  } else {
    res.render('beta/v4/apply-99')
  }
})

router.get('/beta/v4/apply-add-info-taxi.html', function (req, res) {
  var childJourney = req.query.childJourney

  if (childJourney === 'true') {
    res.redirect('/beta/v4/apply-add-info-train-child.html')
  } else {
    res.render('beta/v4/apply-add-info-taxi.html')
  }
})

router.get('/beta/v4/returning.html', function (req, res) {
  var returningUser = req.query.returningUser

  if (returningUser === 'no') {
    res.redirect('/beta/v4/apply-1.html')
  } else {
    res.render('beta/v4/returning.html')
  }
})

module.exports = router
