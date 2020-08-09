import sqlite3, jwt, datetime, os, time, zipfile, requests
from sqlite3 import Error
from flask import Flask, jsonify, request, send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
login_query = 'select * from users where email = ?'
employee_for_manager_query = 'select * from users where manager = ?'
create_test_query = 'insert into tests(user_id, name) values(?,?)'
update_test_result = 'update tests set result_file = ? where id = ?'
update_test_screenshot = 'update tests set screenshot = ? where id = ?'
username_for_id = 'select name from users where id=?'
get_guac_query = 'select * from guac_status where external_ip_port = ? '
update_guac_token_query = 'update guac_status set access_token = ? , datasource = ? where external_ip_port = ?'
req_timeout = 10 
ext_ip_col = 1 
user_col=4
pass_col=5
tok_col=6
datasrc_col = 7


insert_form_query = ''' 
insert into `fb_form` (name,mobile,email,duration,project,classDuration,prepDuration,
                    bondDuration,rating1,rating2,rating3,rating4,rating5,
                    rating6,rating7,rating8,induction,projectFlow,
                    experience,skillsAcquired,suggestions,feedback) 
values(? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?,?,?,? )
'''

# name
# mobile
# email
# duration
# project
# rating1
# rating2
# rating3
# rating4
# rating5
# rating6
# rating7
# rating8
# induction
# projectFlow
# experience
# skillsAcquired
# suggestions
# feedback



@app.route('/')
def hello_world():
    return jsonify('Nothing here!')


@app.route('/api/post/form', methods=['POST'])
def getUsers():
    try : 
        name  = request.json["name"]
        mobile  = request.json["mobile"]
        email  = request.json["email"]
        duration  = request.json["duration"]
        classDuration = request.json["classDuration"]
        prepDuration = request.json["prepDuration"]
        bondDuration = request.json["bondDuration"]
        project  = request.json["project"]
        rating1  = request.json["rating1"]
        rating2  = request.json["rating2"]
        rating3  = request.json["rating3"]
        rating4  = request.json["rating4"]
        rating5  = request.json["rating5"]
        rating6  = request.json["rating6"]
        rating7  = request.json["rating7"]
        rating8  = request.json["rating8"]
        induction  = request.json["induction"]
        projectFlow  = request.json["projectFlow"]
        experience  = request.json["experience"]
        skillsAcquired  = request.json["skillsAcquired"]
        suggestions  = request.json["suggestions"]
        feedback  = request.json["feedback"]

        conn = sqlite3.connect("./fbform.db")
        cur = conn.cursor()
        print(insert_form_query, (name,mobile,email,duration,project,classDuration,prepDuration,bondDuration,rating1,rating2,rating3,rating4,rating5,rating6,rating7,rating8,induction,projectFlow,experience,skillsAcquired,suggestions,feedback,))
        data = cur.execute(insert_form_query, (name,mobile,email,duration,project,classDuration,prepDuration,bondDuration,rating1,rating2,rating3,rating4,rating5,rating6,rating7,rating8,induction,projectFlow,experience,skillsAcquired,suggestions,feedback,))
        print (data)
        conn.commit()
        return jsonify("Hello"), 200

    except Exception  as e:
        print(e)
        return jsonify(str(e)), 401
if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)