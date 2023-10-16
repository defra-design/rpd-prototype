//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
module.exports = router;

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/remove-AP-route', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var confrimRemove = req.session.data['confirmRemove']
  
    // Check whether the variable matches a condition
    if (confrimRemove == "Yes"){
      // Send user to next page
      res.redirect('/regulator-service/nominated-new-AP')
    } else {
      // Send user to ineligible page
      res.redirect('/regulator-service/organisation-details')
    }
  
  })

  router.post('/confirm-invite-route', function (req, res) {
    var confirmInvite = req.session.data['confirmInvite']
    if (confirmInvite == "Someone else"){
        res.redirect('/regulator-service/email-input')
    } else {
        res.redirect('/regulator-service/check-answers')
    }
  
})

router.post('/confirm-Nominate-route', function (req, res) {
    var confirmNominate = req.session.data['confirmNominate']
    if (confirmNominate == "Yes"){
        res.redirect('/regulator-service/invite-confirmation')
    } else {
        res.redirect('/regulator-service/check-answers-removed')
    }
  
})