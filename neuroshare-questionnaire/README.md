# neuroshare-questionnaire
Sutter Health Neuroshare Questionnaire project

## api documentation by Netwoven
**host**: http://node8066-env-3391555.cloudjiffy.net

## get request qx
    url
        '/api/qx'
    url parameters
        id // This is pom-id. This is passed as url parameter at start of application.
            There is only one url parameter.
    output: json format
        {
            pom_id: 'xxx'
            , qx_id: num
            , appointment_date: 'date'
            , patient_first_name: ''
            , patient_last_name: ''
            , clinician_name: ''
            , qx_completed_at: 'date
            , edss_score: num
            , gender: 'male'
            , carry_bag: '{custom1: "a", custom2: "b"}'
            , status: 'started'
            , qx_name: 'sample name'
            , responses: '[json array]'
        }
    explaination
        gender: male / female
        carry_bag: A custom text field. We keep several name / value pairs in this field. This field simply needs to be persisted
            in database during post request. This field is returned back without any processing at get request.
        responses: This is a JSON array converted to text. This contains questions and their answers given by the user.
        status: Can have only two values 'started' / null
        All other fields are understandable from their names.
    Sample json
        {
            "pom_id": 1114,
            "qx_id": 4,
            "appointment_date": "2018-10-29 00:00:00",
            "patient_first_name": "Archima",
            "patient_last_name": "Argenilo",
            "clinician_name": "Federo Gomes",
            "qx_completed_at": null,
            "edss_score": 11,
            "gender": "male",
            "carry_bag": "{\"pages_visited\":[{\"pageName\":\"q1a\",\"isAnswered\":false},{\"pageName\":\"q4\",\"isAnswered\":false},{\"pageName\":\"q5\",\"isAnswered\":false},{\"pageName\":\"q6\",\"isAnswered\":false},{\"pageName\":\"q7\",\"isAnswered\":false},{\"pageName\":\"q8\",\"isAnswered\":false},{\"pageName\":\"q9\",\"isAnswered\":false},{\"pageName\":\"q10\",\"isAnswered\":false},{\"pageName\":\"q11\",\"isAnswered\":false},{\"pageName\":\"q21\",\"isAnswered\":false}]}",
            "status": "started",
            "qx_name": "neuroshare-qx",
            "responses": "[{\"qx_code\":\"Q1.1\",\"qx_text\":\"Which of the following best describes your ability to walk?\",\"answer_options\":[\"I can walk without any problem\",\"I have difficulties with walking\",\"I use a wheelchair for almost all activities\",\"I spend most of my time in bed\"],\"answer_options_score\":[0,1,2,3],\"answer_text_score\":\"\",\"qx_global_text\":\"\",\"edss\":\"Yes\"},{\"qx_code\":\"Q4.1\",\"qx_text\":\"Right hand or arm\",\"answer_options\":[\"My feeling is very good - No problems\",\"My feeling is mildly impaired\",\"My feeling is clearly impaired\",\"My feeling is very poor or completely gone\"],\"answer_options_score\":[0,1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q4.2\",\"qx_text\":\"Left hand or arm\",\"answer_options\":[\"My feeling is very good - No problems\",\"My feeling is mildly impaired\",\"My feeling is clearly impaired\",\"My feeling is very poor or completely gone\"],\"answer_options_score\":[0,1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q4.3\",\"qx_text\":\"Right foot or leg\",\"answer_options\":[\"My feeling is very good - No problems\",\"My feeling is mildly impaired\",\"My feeling is clearly impaired\",\"My feeling is very poor or completely gone\"],\"answer_options_score\":[0,1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q4.4\",\"qx_text\":\"Left foot or leg\",\"answer_options\":[\"My feeling is very good - No problems\",\"My feeling is mildly impaired\",\"My feeling is clearly impaired\",\"My feeling is very poor or completely gone\"],\"answer_options_score\":[0,1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q5.1\",\"qx_text\":\"Right Arm\",\"answer_options\":[\"I can easily raise it and keep it raised\",\"I can raise it, but have mild or occasional trouble with my full strength\",\"I have to make some effort to raise it\",\"I can barely raise it\",\"I can move my limb, but I cannot raise it\",\"I cannot move it at all \"],\"answer_options_score\":[0,1,2,3,4,5],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q5.2\",\"qx_text\":\"Left Arm\",\"answer_options\":[\"I can easily raise it and keep it raised\",\"I can raise it, but have mild or occasional trouble with my full strength\",\"I have to make some effort to raise it\",\"I can barely raise it\",\"I can move my limb, but I cannot raise it\",\"I cannot move it at all \"],\"answer_options_score\":[0,1,2,3,4,5],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q5.3\",\"qx_text\":\"Right Leg\",\"answer_options\":[\"I can easily raise it and keep it raised\",\"I can raise it, but have mild or occasional trouble with my full strength\",\"I have to make some effort to raise it\",\"I can barely raise it\",\"I can move my limb, but I cannot raise it\",\"I cannot move it at all \"],\"answer_options_score\":[0,1,2,3,4,5],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q5.4\",\"qx_text\":\"Left Leg\",\"answer_options\":[\"I can easily raise it and keep it raised\",\"I can raise it, but have mild or occasional trouble with my full strength\",\"I have to make some effort to raise it\",\"I can barely raise it\",\"I can move my limb, but I cannot raise it\",\"I cannot move it at all \"],\"answer_options_score\":[0,1,2,3,4,5],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q6.1\",\"qx_text\":\"Right Arm\",\"answer_options\":[\"I do not have stiffness or spasms\",\"Mild, do not make it hard for me to use\",\"Moderate stiffness, but with effort I can use\",\"Sometimes I cannot overcome the stiffness to use my arm or leg\",\"My arm or leg is so contracted that I cannot use it at all\"],\"answer_options_score\":[0,1,2,3,4],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q6.2\",\"qx_text\":\"Left Arm\",\"answer_options\":[\"I do not have stiffness or spasms\",\"Mild, do not make it hard for me to use\",\"Moderate stiffness, but with effort I can use\",\"Sometimes I cannot overcome the stiffness to use my arm or leg\",\"My arm or leg is so contracted that I cannot use it at all\"],\"answer_options_score\":[0,1,2,3,4],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q6.3\",\"qx_text\":\"Right Leg\",\"answer_options\":[\"I do not have stiffness or spasms\",\"Mild, do not make it hard for me to use\",\"Moderate stiffness, but with effort I can use\",\"Sometimes I cannot overcome the stiffness to use my arm or leg\",\"My arm or leg is so contracted that I cannot use it at all\"],\"answer_options_score\":[0,1,2,3,4],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q6.4\",\"qx_text\":\"Left Leg\",\"answer_options\":[\"I do not have stiffness or spasms\",\"Mild, do not make it hard for me to use\",\"Moderate stiffness, but with effort I can use\",\"Sometimes I cannot overcome the stiffness to use my arm or leg\",\"My arm or leg is so contracted that I cannot use it at all\"],\"answer_options_score\":[0,1,2,3,4],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q7.1\",\"qx_text\":\"In general, how is your balance when standing?\",\"answer_options\":[\"Very good. I never or rarely lose my balance\",\"Good. I sometimes lose my balance or sway when my eyes are closed\",\"Poor. I often lose my balance or sway, even when my eyes are open\",\"Very poor. I always or almost always lose my balance\"],\"answer_options_score\":[0,1,2,3],\"answer_text_score\":\"\",\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q7.2\",\"qx_text\":\"In general, how is your balance when walking a straight line?\",\"answer_options\":[\"I can easily walk a straight line\",\"I occasionally lose my balance\",\"I usually have to concentrate to keep my balance\",\"I lose my balance after a few steps\",\"I need help to hold my balance\"],\"answer_options_score\":[0,1,2,3,3],\"answer_text_score\":\"\",\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q7.3\",\"qx_text\":\"In general, how is your balance when sitting?\",\"answer_options\":[\"I am very steady when I sit\",\"I sway once in a while when I sit\",\"I sway constantly when I sit but I never need support\",\"I sometimes need support when I sit to keep from swaying\",\"I usually need support when I sit to keep from swaying\"],\"answer_options_score\":[0,1,2,3,4],\"answer_text_score\":\"\",\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q8.1\",\"qx_text\":\"Your arm(s)\",\"answer_options\":[\"I do not have tremors or coordination problems\",\"Rarely make it hard for me to use\",\"Sometimes make it hard for me to use\",\"Often make it hard for me to use\",\"Always make it hard for me to use\"],\"answer_options_score\":[0,\"N/A\",1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q8.2\",\"qx_text\":\"Your leg(s)\",\"answer_options\":[\"I do not have tremors or coordination problems\",\"Rarely make it hard for me to use\",\"Sometimes make it hard for me to use\",\"Often make it hard for me to use\",\"Always make it hard for me to use\"],\"answer_options_score\":[0,\"N/A\",1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q9.1\",\"qx_text\":\"Right side of your face\",\"answer_options\":[\"I do not have muscle weakness in my face\",\"A little, such as when I furrow my eyebrows or laugh\",\"A lot, such as trouble with drooling or when closing my eye(s)\",\"Total weakness or palsy, such as Bell's palsy\"],\"answer_options_score\":[0,1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q9.2\",\"qx_text\":\"Left side of your face\",\"answer_options\":[\"I do not have muscle weakness in my face\",\"A little, such as when I furrow my eyebrows or laugh\",\"A lot, such as trouble with drooling or when closing my eye(s)\",\"Total weakness or palsy, such as Bell's palsy\"],\"answer_options_score\":[0,1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q10.1\",\"qx_text\":\"Right side of your face\",\"answer_options\":[\"Feeling is very good. No numbness or pain\",\"Feeling is good. Some numbness\",\"Feeling is fair. Hard to tell sharp touch from dull touch\",\"Feeling is poor. Mild pain\",\"Feeling is very poor or gone. Moderate to severe pain\"],\"answer_options_score\":[0,1,2,3,4],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q10.2\",\"qx_text\":\"Left side of your face\",\"answer_options\":[\"Feeling is very good. No numbness or pain\",\"Feeling is good. Some numbness\",\"Feeling is fair. Hard to tell sharp touch from dull touch\",\"Feeling is poor. Mild pain\",\"Feeling is very poor or gone. Moderate to severe pain\"],\"answer_options_score\":[0,1,2,3,4],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"yes\"},{\"qx_code\":\"Q21.1\",\"qx_text\":\"On an average day, which of the following describes your fatigue?\",\"answer_options\":[\"I experience NO fatigue\",\"I experience mild fatigue.\\n I do feel the need to rest more often, but I can still complete all my daily tasks\",\"Due to my fatigue I have to rest unusually often. This affects less than half of my daily activities. I often cannot complete my daily routine without naps or significant rest\",\"I experience severe fatigue levels that have overtaken my life. I am unable to complete more than half of my daily tasks\"],\"answer_options_score\":[0,1,2,3],\"answer_text\":\"\",\"answer_text_score\":0,\"qx_global_text\":\"\",\"edss\":\"Yes\"},{\"qx_code\":\"Q21.2\",\"qx_text\":\"In general, how often do you wake up feeling rested in the morning?\",\"answer_options\":[\"All of the time\",\"Most of the time\",\"A good bit of the time\",\"Some of the time\",\"A little of the time\",\"None of the time\"],\"answer_options_score\":[0,1,2,3,3,3],\"answer_text\":\"Most of the time\",\"answer_text_score\":1,\"qx_global_text\":\"\",\"edss\":\"no\"}]"
        }

## post request qx
    url
        /api/qx
    post body: json
        {
            responses
            , carry_bag
            , status
            , pom_id
        }
    explaination
        Explaination of the fields of post qx request are same as those of get qx request.
    
    Sample Json of responses only
        [
            {
                "qx_code": "Q1.1",
                "qx_text": "Which of the following best describes your ability to walk?",
                "answer_options": [
                    "I can walk without any problem",
                    "I have difficulties with walking",
                    "I use a wheelchair for almost all activities",
                    "I spend most of my time in bed"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text_score": "",
                "qx_global_text": "",
                "edss": "Yes"
            },
            {
                "qx_code": "Q4.1",
                "qx_text": "Right hand or arm",
                "answer_options": [
                    "My feeling is very good - No problems",
                    "My feeling is mildly impaired",
                    "My feeling is clearly impaired",
                    "My feeling is very poor or completely gone"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q4.2",
                "qx_text": "Left hand or arm",
                "answer_options": [
                    "My feeling is very good - No problems",
                    "My feeling is mildly impaired",
                    "My feeling is clearly impaired",
                    "My feeling is very poor or completely gone"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q4.3",
                "qx_text": "Right foot or leg",
                "answer_options": [
                    "My feeling is very good - No problems",
                    "My feeling is mildly impaired",
                    "My feeling is clearly impaired",
                    "My feeling is very poor or completely gone"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q4.4",
                "qx_text": "Left foot or leg",
                "answer_options": [
                    "My feeling is very good - No problems",
                    "My feeling is mildly impaired",
                    "My feeling is clearly impaired",
                    "My feeling is very poor or completely gone"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q5.1",
                "qx_text": "Right Arm",
                "answer_options": [
                    "I can easily raise it and keep it raised",
                    "I can raise it, but have mild or occasional trouble with my full strength",
                    "I have to make some effort to raise it",
                    "I can barely raise it",
                    "I can move my limb, but I cannot raise it",
                    "I cannot move it at all "
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q5.2",
                "qx_text": "Left Arm",
                "answer_options": [
                    "I can easily raise it and keep it raised",
                    "I can raise it, but have mild or occasional trouble with my full strength",
                    "I have to make some effort to raise it",
                    "I can barely raise it",
                    "I can move my limb, but I cannot raise it",
                    "I cannot move it at all "
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q5.3",
                "qx_text": "Right Leg",
                "answer_options": [
                    "I can easily raise it and keep it raised",
                    "I can raise it, but have mild or occasional trouble with my full strength",
                    "I have to make some effort to raise it",
                    "I can barely raise it",
                    "I can move my limb, but I cannot raise it",
                    "I cannot move it at all "
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q5.4",
                "qx_text": "Left Leg",
                "answer_options": [
                    "I can easily raise it and keep it raised",
                    "I can raise it, but have mild or occasional trouble with my full strength",
                    "I have to make some effort to raise it",
                    "I can barely raise it",
                    "I can move my limb, but I cannot raise it",
                    "I cannot move it at all "
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q6.1",
                "qx_text": "Right Arm",
                "answer_options": [
                    "I do not have stiffness or spasms",
                    "Mild, do not make it hard for me to use",
                    "Moderate stiffness, but with effort I can use",
                    "Sometimes I cannot overcome the stiffness to use my arm or leg",
                    "My arm or leg is so contracted that I cannot use it at all"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q6.2",
                "qx_text": "Left Arm",
                "answer_options": [
                    "I do not have stiffness or spasms",
                    "Mild, do not make it hard for me to use",
                    "Moderate stiffness, but with effort I can use",
                    "Sometimes I cannot overcome the stiffness to use my arm or leg",
                    "My arm or leg is so contracted that I cannot use it at all"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q6.3",
                "qx_text": "Right Leg",
                "answer_options": [
                    "I do not have stiffness or spasms",
                    "Mild, do not make it hard for me to use",
                    "Moderate stiffness, but with effort I can use",
                    "Sometimes I cannot overcome the stiffness to use my arm or leg",
                    "My arm or leg is so contracted that I cannot use it at all"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q6.4",
                "qx_text": "Left Leg",
                "answer_options": [
                    "I do not have stiffness or spasms",
                    "Mild, do not make it hard for me to use",
                    "Moderate stiffness, but with effort I can use",
                    "Sometimes I cannot overcome the stiffness to use my arm or leg",
                    "My arm or leg is so contracted that I cannot use it at all"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q7.1",
                "qx_text": "In general, how is your balance when standing?",
                "answer_options": [
                    "Very good. I never or rarely lose my balance",
                    "Good. I sometimes lose my balance or sway when my eyes are closed",
                    "Poor. I often lose my balance or sway, even when my eyes are open",
                    "Very poor. I always or almost always lose my balance"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text_score": "",
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q7.2",
                "qx_text": "In general, how is your balance when walking a straight line?",
                "answer_options": [
                    "I can easily walk a straight line",
                    "I occasionally lose my balance",
                    "I usually have to concentrate to keep my balance",
                    "I lose my balance after a few steps",
                    "I need help to hold my balance"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    3
                ],
                "answer_text_score": "",
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q7.3",
                "qx_text": "In general, how is your balance when sitting?",
                "answer_options": [
                    "I am very steady when I sit",
                    "I sway once in a while when I sit",
                    "I sway constantly when I sit but I never need support",
                    "I sometimes need support when I sit to keep from swaying",
                    "I usually need support when I sit to keep from swaying"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4
                ],
                "answer_text_score": "",
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q8.1",
                "qx_text": "Your arm(s)",
                "answer_options": [
                    "I do not have tremors or coordination problems",
                    "Rarely make it hard for me to use",
                    "Sometimes make it hard for me to use",
                    "Often make it hard for me to use",
                    "Always make it hard for me to use"
                ],
                "answer_options_score": [
                    0,
                    "N/A",
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q8.2",
                "qx_text": "Your leg(s)",
                "answer_options": [
                    "I do not have tremors or coordination problems",
                    "Rarely make it hard for me to use",
                    "Sometimes make it hard for me to use",
                    "Often make it hard for me to use",
                    "Always make it hard for me to use"
                ],
                "answer_options_score": [
                    0,
                    "N/A",
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q9.1",
                "qx_text": "Right side of your face",
                "answer_options": [
                    "I do not have muscle weakness in my face",
                    "A little, such as when I furrow my eyebrows or laugh",
                    "A lot, such as trouble with drooling or when closing my eye(s)",
                    "Total weakness or palsy, such as Bell's palsy"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q9.2",
                "qx_text": "Left side of your face",
                "answer_options": [
                    "I do not have muscle weakness in my face",
                    "A little, such as when I furrow my eyebrows or laugh",
                    "A lot, such as trouble with drooling or when closing my eye(s)",
                    "Total weakness or palsy, such as Bell's palsy"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q10.1",
                "qx_text": "Right side of your face",
                "answer_options": [
                    "Feeling is very good. No numbness or pain",
                    "Feeling is good. Some numbness",
                    "Feeling is fair. Hard to tell sharp touch from dull touch",
                    "Feeling is poor. Mild pain",
                    "Feeling is very poor or gone. Moderate to severe pain"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q10.2",
                "qx_text": "Left side of your face",
                "answer_options": [
                    "Feeling is very good. No numbness or pain",
                    "Feeling is good. Some numbness",
                    "Feeling is fair. Hard to tell sharp touch from dull touch",
                    "Feeling is poor. Mild pain",
                    "Feeling is very poor or gone. Moderate to severe pain"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    4
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "yes"
            },
            {
                "qx_code": "Q21.1",
                "qx_text": "On an average day, which of the following describes your fatigue?",
                "answer_options": [
                    "I experience NO fatigue",
                    "I experience mild fatigue.\n I do feel the need to rest more often, but I can still complete all my daily tasks",
                    "Due to my fatigue I have to rest unusually often. This affects less than half of my daily activities. I often cannot complete my daily routine without naps or significant rest",
                    "I experience severe fatigue levels that have overtaken my life. I am unable to complete more than half of my daily tasks"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3
                ],
                "answer_text": "",
                "answer_text_score": 0,
                "qx_global_text": "",
                "edss": "Yes"
            },
            {
                "qx_code": "Q21.2",
                "qx_text": "In general, how often do you wake up feeling rested in the morning?",
                "answer_options": [
                    "All of the time",
                    "Most of the time",
                    "A good bit of the time",
                    "Some of the time",
                    "A little of the time",
                    "None of the time"
                ],
                "answer_options_score": [
                    0,
                    1,
                    2,
                    3,
                    3,
                    3
                ],
                "answer_text": "Most of the time",
                "answer_text_score": 1,
                "qx_global_text": "",
                "edss": "no"
            }
        ]

## post request complete
    url
        /api/qx/complete
    post body
        {
          pom_id: 'xxx'
        }
    explaination
        This request is used to mark a questionnaire complete. At server end the status against the pom_id is changed to 'completed' and qx_completed_at column of database is set with current date.

For testing / debugging purpose we have provided an another api

## get request reset
    url
        /api/reset
    url parameters
        id
            This is pom id
        status
            this can be 'started' or 'completed'
        completedOn
            this is completion date
    explaination
        The get reset request sets the fields against a pom_id as provided in the url parameters. In addition this request
        resets following fields to null:
            responses
            carry_bag

## post request unsubscribe
    url
        /api/unsubscribe
    body json
        {
            pom_id: 'xxx'
        }
    explaination
        The post request unsubscribes the patient at server
