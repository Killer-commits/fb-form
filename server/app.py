import sqlite3, jwt, datetime, os, time, zipfile, requests
from sqlite3 import Error
from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from datetime import datetime
app = Flask(__name__)

import gspread
from oauth2client.service_account import ServiceAccountCredentials
scope = [
            "https://spreadsheets.google.com/feeds",
            'https://www.googleapis.com/auth/spreadsheets',
            "https://www.googleapis.com/auth/drive.file"
            ,"https://www.googleapis.com/auth/drive"
        ]
credential = ServiceAccountCredentials.from_json_keyfile_name("../ignore/credentials.json", scope)
client = gspread.authorize(credential)
gsheet1 = client.open("vol-fb-form").worksheet("Sheet1")
gsheet2 = client.open("vol-fb-form").worksheet("Sheet2")

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
                    rating6,rating7,rating8,rating9,rating10,rating11,rating12,induction,projectFlow,
                    experience,skillsAcquired,suggestions,feedback,insertedTimeStamp) 
values(? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?,?,?,?,?,?,?,?,? )
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
        print(request.json)
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
        rating9  = request.json["rating9"]
        rating10  = request.json["rating10"]
        rating11  = request.json["rating11"]
        rating12  = request.json["rating12"]
        induction  = request.json["induction"]
        projectFlow  = request.json["projectFlow"]
        experience  = request.json["experience"]
        skillsAcquired  = request.json["skillsAcquired"]
        suggestions  = request.json["suggestions"]
        feedback  = request.json["feedback"]
        insertedTimeStamp = datetime.now().strftime("%d-%m-%Y, %H:%M:%S.%f")

        row = [insertedTimeStamp,name,mobile,email,duration,project,rating1,rating2,rating3,rating4,rating5,rating6,rating7,rating8,rating9,rating10,rating11,rating12,induction,projectFlow,experience,skillsAcquired,suggestions,feedback]
        gsheet1.insert_row(row, 2) 

        conn = sqlite3.connect("./fbform.db")
        cur = conn.cursor()
        print(insert_form_query, (name,mobile,email,duration,project,classDuration,prepDuration,bondDuration,rating1,rating2,rating3,rating4,rating5,rating6,rating7,rating8,rating9,rating10,rating11,rating12,induction,projectFlow,experience,skillsAcquired,suggestions,feedback,insertedTimeStamp,))
        data = cur.execute(insert_form_query, (name,mobile,email,duration,project,classDuration,prepDuration,bondDuration,rating1,rating2,rating3,rating4,rating5,rating6,rating7,rating8,rating9,rating10,rating11,rating12,induction,projectFlow,experience,skillsAcquired,suggestions,feedback,insertedTimeStamp,))
        conn.commit()
        gsheet2.insert_row(row, 2) 
        return jsonify("Hello"), 200

    except Exception  as e:
        print(e)
        return jsonify(str(e)), 401
if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)