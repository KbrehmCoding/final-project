// Not sure where to put this file right now

init();
function init() {
    Paypal.configure(config.api);
}

//Require  the need modules.
var Paypal = require('paypal-rest-sdk');
var Moment = require('moment');
var _ = require('lodash');

exports.createPaymentAgreement = function(req,res) {

//Atrributs for creating the billing plan of  a user.
let billingPlanAttributes = {
    "description": " Add about subscription details.",
            "merchant_preferences": {
                "auto_bill_amount": "yes",
                "cancel_url": "http://localhost:3000/cancel",
                "initial_fail_amount_action": "continue",
                "max_fail_attempts": "1",
                "return_url": "http://localhost:3000/success",
                "setup_fee": {
                    "currency": "USD",
                    "value": "1"
                }
            },
            "name": "Paypal Agreement",
            "payment_definitions": [
                {
                    "amount": {
                        "currency": "USD",
                        "value": "25"
                    },
                    "charge_models": [],
                    "cycles": "0",
                    "frequency": "MONTH",
                    "frequency_interval": 1,
                    "name": "Regular Payments",
                    "type": "REGULAR"
                }
            ],
            "type": "INFINITE"
};

//Once a billing plan is created it must be updated with the following attributes.
let billingPlanUpdateAttributes = [
    {
        "op": "replace",
        "path": "/",
        "value": {
            "state": "ACTIVE"
        }
    }
];

//Attributes for creating the billing agreement.
//Start Date should be greater than current time and date.
let startDate = Moment(new Date()).add(10, 'minute').format('gggg-MM-DDTHH:mm:ss')+'Z';
let billingAgreementAttributes = {
    "name": "Name of Payment Agreement",
    "description": "Description of  your payment  agreement",
    "start_date": startDate,
    "plan": {
        "id": ""
    },
    "payer": {
        "payment_method": "paypal"
    }
};

//Creating the billing plan and agreement of payment.
//Step 6:
Paypal.billingPlan.create(billingPlanAttributes,  (error, billingPlan) => {
    if (error) {
        console.log(error);
    } else {
        //Step 7:
        Paypal.billingPlan.update(billingPlan.id, billingPlanUpdateAttributes,  (error, response) => {
            if (error) {
               console.log(error);
            } else {
               // update the billing agreement attributes before creating it.
               billingAgreementAttributes.plan.id = billingPlan.id;

               //Step 8:
               Paypal.billingAgreement.create(billingAgreementAttributes,(error, billingAgreement) => {
                    if (error) {
                        console.log(error);
                    } else {
                        _.forEach(billingAgreement.links, (agreement) => {
                            if (agreement.rel === 'approval_url') {
                                //Redirecting to paypal portal with approvalUrl.
                                let approvalUrl = agreement.href;
                                let token = approvalUrl.split('token=')[1];
                                console.log(approvalUrl,token);
                                res.redirect(approvalUrl);
                            }
                        });
                    }
                });
            }
        });
    }
 });
}