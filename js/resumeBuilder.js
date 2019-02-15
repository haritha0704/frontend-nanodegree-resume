/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Haritha Rayakota",
    "role": "Front end Developer",
    "contacts": {
        "mobile": ": 402-507-9464",
        "email": ": haritha.rayakota@gmail.com",
        "github": ": haritha0704",
        "location": ": Omaha",

    },

    "skills": ["HTML", "CSS", "Javascript", "Jquery", "Bootstrap", "AngularJS", "JAVA", "Responsive Design"],
    "biopic": "images/profile_pic.JPG",
    "welcomeMessage": "Seeking a Creative and challenging position"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedJob = HTMLheaderRole.replace("%data%", bio.role);


    var formattedNameRole = (formattedName + formattedJob);
    $("#header").prepend(formattedNameRole);


    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    if (bio.skills.length > 0) {
        var len = bio.skills.length;
        // Append all the skills, and the skills title
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);

        }
    }


    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

};


var education = {
    "schools": [{
        "name": "Oklahoma State University",
        "location": ": Stillwater,OK,US",
        "degree": "Masters",
        "majors": ["Electrical "],
        "dates": "2010-2012",
        "url": "http://okstate.edu"
    }, {
        "name": "JNTUH",
        "location": ": Hyderabad,India",
        "degree": "BTECH",
        "majors": ["Electronics & Communication"],
        "dates": "2006-2010",
        "url": "http://www.jntuh.ac.in"
    }],
    "onlineCourses": [{
        "title": "Front-End Web developer Nanodegree",
        "school": "Udacity",
        "dates": "Jan 2017-Jun 2017",
        "url": "http://www.udacity.com"
    }]
};
education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);


            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for (var j = 0; j < education.onlineCourses.length; j++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
};




var work = {
    "jobs": [{
        "employer": "Fraunhofer CSE",
            "title": "Graduate Technical Intern",
            "location": "Boston,MA",
            "dates": "Sept 2012-Apr 2013"
    },
             {
            "employer": "BI Labs",
            "title": "Technical Intern",
            "location": "Iselin,NJ",
            "dates": "Apr 2013-Sept 2013"
             },
                
     
          
          
             {"employer": "Ecloud Labs",
            "title": "Software Developer",
            "location": "Iselin,NJ",
            "dates": "Sept 2013-Sept 2014",
            "description": "Designed webpages using HTML, CSS and JavaScript as a part of an agile team for various clients.Troubleshooted production issues, fix the bugs for sustaining the application."
        }
             

    ]
};
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};



var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "url":"https://haritha0704.github.io/portfolio/index.html",
        "dates": "Jan 2017",

        "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers. ",
        "images": ["images/portfolio.png"]
    },
    {
        "title":"Arcade Game",
         "url":"https://github.com/haritha0704/frontend-nanodegree-arcade-game",
        "dates":"Apr 2017",
        "description":"This web page was the third project for Udacity's Front-End Nanodegree. The project was built on Google App Engine, and the project was focused on using JavaScript and Canvas to make a classic arcade game on web page.",
        "images":["images/arcade-game_small.jpg"]
    },
    {
        "title":"Website Optimization",
        "url":"https://github.com/haritha0704/frontend-nanodegree-mobile-portfolio",
        "dates":"Mar 2017" ,
         "description":"The purpose of this project is to take a site that loads very poorly and optimize it to over 60 frames per second.",
         "images": ["images/website-optimization_pizza_small.jpg"]  
    },
    {  "title":"NeighbourHood Map",
         "url":"https://github.com/haritha0704/neighbourhood-map",
        "dates":"May 2017",
         "description":"A single-page application using Google Maps API, Instagram API, knockout.js, and MVVM patterns. Explore restaurantsin Omaha,NE. Restaurants are filterable. Selecting a restaurant from the list will display pertinent information and the latest Instagram ratings.",
         "images":["images/neighborhood-map_small.jpg"]
          },
         {
              "title":"FeedReader Testing",
        "url":"https://github.com/haritha0704/frontend-nanodegree-feedreader",
        "dates":"Feb 2017",
         "description":"The main goal of this project is to write a test script based on Jasmine for a feedreader.This goal was achieved by writing the following tests. We loved with a love that was more than love.",
         "images": ["images/feedreader-testing_small.jpg"]
         }
    ]
};
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
         formattedTitle = formattedTitle.replace("%url%", projects.projects[i].url);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[i].images.length > 0) {
            var len = projects.projects[i].images.length;
            for (var j = 0; j < len; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);

            }
        }

        //}
    }
};
bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
