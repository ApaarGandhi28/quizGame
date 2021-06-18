var data = {
    "questions": [
        {
            "question": "What is the scientific name of a butterfly?",
            "answers": [
                "Apis",
                "Coleoptera",
                "Formicidae",
                "Rhopalocera"
            ],
            "correctIndex": 3
        },
        {
            "question": "How hot is the surface of the sun?",
            "answers": [
                "1,233 K",
                "5,778 K",
                "12,130 K",
                "101,300 K"
            ],
            "correctIndex": 1
        },
        {
            "question": "Who are the actors in The Internship?",
            "answers": [
                "Ben Stiller, Jonah Hill",
                "Courteney Cox, Matt LeBlanc",
                "Kaley Cuoco, Jim Parsons",
                "Vince Vaughn, Owen Wilson"
            ],
            "correctIndex": 3
        },
        {
            "question": "What is the capital of Spain?",
            "answers": [
                "Berlin",
                "Buenos Aires",
                "Madrid",
                "San Juan"
            ],
            "correctIndex": 2
        },
        {
            "question": "What are the school colors of the University of Texas at Austin?",
            "answers": [
                "Black, Red",
                "Blue, Orange",
                "White, Burnt Orange",
                "White, Old gold, Gold"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 70 degrees Fahrenheit in Celsius?",
            "answers": [
                "18.8889",
                "20",
                "21.1111",
                "158"
            ],
            "correctIndex": 2
        },
        {
            "question": "When was Mahatma Gandhi born?",
            "answers": [
                "October 2, 1869",
                "December 15, 1872",
                "July 18, 1918",
                "January 15, 1929"
            ],
            "correctIndex": 0
        },
        {
            "question": "How far is the moon from Earth?",
            "answers": [
                "7,918 miles (12,742 km)",
                "86,881 miles (139,822 km)",
                "238,400 miles (384,400 km)",
                "35,980,000 miles (57,910,000 km)"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 65 times 52?",
            "answers": [
                "117",
                "3120",
                "3380",
                "3520"
            ],
            "correctIndex": 2
        },
        {
            "question": "How tall is Mount Everest?",
            "answers": [
                "6,683 ft (2,037 m)",
                "7,918 ft (2,413 m)",
                "19,341 ft (5,895 m)",
                "29,029 ft (8,847 m)"
            ],
            "correctIndex": 3
        },
        {
            "question": "When did The Avengers come out?",
            "answers": [
                "May 2, 2008",
                "May 4, 2012",
                "May 3, 2013",
                "April 4, 2014"
            ],
            "correctIndex": 1
        },
        {
            "question": "What is 48,879 in hexidecimal?",
            "answers": [
                "0x18C1",
                "0xBEEF",
                "0xDEAD",
                "0x12D591"
            ],
            "correctIndex": 1
        }
    ]
}

let questionNo = 1;
let time_left = 10;
let correctQuestions = 0;



$("#opt-1 , #opt-2 , #opt-3 , #opt-4").click(function (e) {

    if (data["questions"][questionNo - 1]["correctIndex"] == $(this).attr("id").split("-")[1] - 1) {
        console.log("correct");
        correctQuestions++;
    }
    questionNo++;
    newQuestion(questionNo);
});

let timeOut;
let setTimer;

function timer(){
    time_left = 10;
    setTimer = setInterval ( () => {
        $(".time-left").text(time_left-1);
        time_left--;    
    },1000);
    
    timeOut =  setTimeout(() => {
        clearInterval(setTimer);
        questionNo++;
        newQuestion(questionNo);
    }, 10000);
       
}

function newQuestion(questionNo){
    if (questionNo > data["questions"].length) {
        alert(`${correctQuestions} questions correctly answered`);
        clearInterval(setTimer);
        clearTimeout(timeOut);
        return;
    }
    clearInterval(setTimer);
    clearTimeout(timeOut);
    $(".no").text(questionNo);
    $(".question").text(data["questions"][questionNo - 1]["question"]);
    $("#opt-1").text(data["questions"][questionNo - 1]["answers"][0]);
    $("#opt-2").text(data["questions"][questionNo - 1]["answers"][1]);
    $("#opt-3").text(data["questions"][questionNo - 1]["answers"][2]);
    $("#opt-4").text(data["questions"][questionNo - 1]["answers"][3]);
    $(".time-left").text(10);
    timer();

}

$("document").ready(function(e){
    newQuestion(questionNo);
});

$(".option").mouseenter(function(e){ 
   $(".option.selected").removeClass("selected");
   $(this).css("border-top","2px solid green");
   $(this).addClass("selected");
});

$(".option").mouseout(function(e){ 
    $(".option.selected").removeClass("selected");
    $(this).css("border-top","1px solid black");
 });