import os
import boto3

from flask import Flask
from flask_cors import CORS
from flask_restx import Api
from flask_restx import Namespace, Resource, fields, marshal
from flask import request


app = Flask(__name__)
CORS(app)

app_settings = os.getenv(
    'APP_SETTINGS',
    'app.config.DevelopmentConfig'
)
app.config.from_object(app_settings)

api = Api(app, version='1.0', title='Survey Service API',
               description='Survey Service', prefix='/Survey')

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Survey')


insert_model = api.model('Survey Insert Method', {
    'name': fields.String(required=True,
                             description='name'),
    'mobile': fields.String(required=True,
                             description='mobile'),
    'email': fields.String(required=True,
                             description='email'),
    'exp_vol': fields.String(required=True,
                             description='exp_vol'),
    'project': fields.String(required=True,
                             description='project'),
    'lead_rating_a': fields.String(required=True,
                             description='lead_rating_a'),
    'lead_rating_b': fields.String(required=True,
                             description='lead_rating_b'),
    'lead_rating_c': fields.String(required=True,
                             description='lead_rating_c'),
    'lead_rating_d': fields.String(required=True,
                             description='lead_rating_d'),
    'lead_rating_e': fields.String(required=True,
                             description='lead_rating_e'),
    'opp_rating_a': fields.String(required=True,
                             description='oppurtunity rating_a'),
    'opp_rating_b': fields.String(required=True,
                             description='oppurtunity rating_b'),
    'induction': fields.String(required=True,
                             description='induction'),
    'project_flow': fields.String(required=True,
                             description='project flow'),
    'think_a': fields.String(required=True,
                             description='think_a'),
    'think_b': fields.String(required=True,
                             description='think_b'),
    'think_c': fields.String(required=True,
                             description='think_c'),
    'think_d': fields.String(required=True,
                             description='think_d'),
    'enjoy': fields.String(required=True,
                             description='enjoy'),
    'skill': fields.String(required=True,
                             description='skill'),
    'fruit': fields.String(required=True,
                             description='fruit'),
    'anything': fields.String(required=True,
                             description='anything')                                     
})

success_model = api.model('Login Success Method', {
    'status': fields.Raw,
    'message': fields.Raw
})

check_model = api.model('Fetch Request Method',{
    'passkey': fields.String(required=True,
                             description='Secret Key')
})

@api.route('/Insert')
class InsertLog(Resource):
    @api.expect(insert_model)
    @api.marshal_with(success_model, 200)
    def post(self):
        try:
            name = request.json['name']
            mobile = request.json['mobile']
            email = request.json['email']
            exp_vol = request.json['exp_vol']
            project = request.json['project']
            lead_rating_a = request.json['lead_rating_a']
            lead_rating_b = request.json['lead_rating_b']
            lead_rating_c = request.json['lead_rating_c']
            lead_rating_d = request.json['lead_rating_d']
            lead_rating_e = request.json['lead_rating_e']
            opp_rating_a = request.json['opp_rating_a']
            opp_rating_b = request.json['opp_rating_b']
            project_flow = request.json['project_flow']
            induction = request.json['induction']
            think_a = request.json['think_a']
            think_b = request.json['think_b']
            think_c = request.json['think_c']
            think_d = request.json['think_d']
            enjoy = request.json['enjoy']
            skill = request.json['skill']
            fruit = request.json['fruit']
            anything = request.json['anything']

        except Exception as e:
            responseObject = {
                'status': 'fail',
                'message': 'Required details are missing'
            }
            print(e)
            return responseObject, 400
    
        form={
            'name' : str(name),
            'mobile' : str(mobile),
            'email' : str(email),
            'exp_vol' : str(exp_vol),
            'project' : str(project),
            'lead_rating_a' : str(lead_rating_a),
            'lead_rating_b' : str(lead_rating_b),
            'lead_rating_c' : str(lead_rating_c),
            'lead_rating_d' : str(lead_rating_d),
            'lead_rating_e' : str(lead_rating_e),
            'opp_rating_a' : str(opp_rating_a),
            'opp_rating_b' : str(opp_rating_b),
            'project_flow' : str(project_flow),
            'induction' : str(induction),
            'think_a' : str(think_a),
            'think_b' : str(think_b),
            'think_c' : str(think_c),
            'think_d' : str(think_d),
            'enjoy' : str(enjoy),
            'skill' : str(skill),
            'fruit' : str(fruit),
            'anything' : str(anything)
        }

        try:
            table.put_item(Item=form)
            responseObject = {
                'status': 'success',
                'message': 'Inserted Successfully'
            }
            return responseObject, 200
        except:
            responseObject = {
                'status': 'fail',
                'message': 'Failed'
            }
            return responseObject, 400


@api.route('/Check')
class CheckLog(Resource):
    @api.expect(check_model)
    @api.marshal_with(success_model, 200)
    def post(self):
        try:
            passkey = request.json['passkey']
        except Exception as e:
            responseObject = {
                'status': 'fail',
                'message': 'Required details are missing'
            }
            print(e)
            return responseObject, 400
        if passkey == "9940697831":
            responseObject = {
                    'status': 'success',
                    'message': str(len(table.scan()['Items']))
                }
            return responseObject, 200
        else:
            responseObject = {
                    'status': 'fail',
                    'message': 'Invalid Key'
                }
            return responseObject, 200


            