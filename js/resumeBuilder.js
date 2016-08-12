/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append("Scott");
 var awesomeThoughts = "I am Scott and I am AWESOME!"
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

 $("#main").append(funThoughts);*/


var bio = {
  "name": "Scott Schoolcraft",
  "role": "Area Manager",
  "contacts": {
    "mobile": "555-555-1212",
    "email": "xxyyyy@att.com",
    "github": "ss1773",
    "location": "Conyers GA"},
  "welcomeMessage": "I look forward to talking with you.",
  "skills": ["Team Building, ", "Drives Change through Innovation, ",
              "Communication"],
  "biopic": "images/me.jpg"};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedNameRole = formattedName + formattedRole;
  $("#header").append(formattedNameRole);
  var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedwelcomeMsg);
  var formattedEmail = HTMLemail.replace("%data%", bio.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
  var formattedGithub = HTMLgithub.replace("%data%", bio.github);
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedContacts = formattedEmail + formattedMobile + formattedGithub;
  $("#header").append(formattedContacts);
  $("#contacts").append(HTMLcontactGeneric);
  $("#header").append(formattedbioPic);
}
bio.display();

var work = {"jobs":
            [{"employer": "ATT",
            "title": "Area Manager",
            "location": "Conyers, GA",
            "dates": "2011-present",
            "description": "Leads a 20 member organization in the support of provisioning the Core Backbone Network"},
            {"employer": "ATT",
            "title": "Sr. Network Process and Quality Manager",
            "location": "Knoxville, TN",
            "dates": "2008-2011",
            "description": "Part of a 5 member team responsible for implementing and supporting MSOC (Management Systems and Operating Control) for national Network Centers."},
            {"employer": "ATT",
            "title": "Manager East TN Network Dispatch Center",
            "location": "Knoxville, TN",
            "dates": "2004-2018",
            "description": "Provided analyzed recommendations to Area Managers for daily installation and maintenance loads in region specific areas."}]
          }

work.display = function() {
  for (var job = 0; job < work.jobs.length; job++ ) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    }
   }
work.display();

var education = {
    "schools": [{
    "name": "Berry College",
    "location": "Rome, GA, US",
    "degree": "Bachlor of Science",
    "major": "Business Management",
    "dates": "1988-1993",
    "url": "http://www.berry.edu/"
  }],
    "onlineCourses": [{
    "title": "Intro to Programming Nanodegree",
    "school": "Udacity",
    "dates": "May-August 2016",
    "url": "https://www.udacity.com"
  }]
};
education.display = function() {
  for (var school = 0; school < education.schools.length; school++ ) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }
  for (onlineCourse in education.onlineCourses) {
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    var formattedSchoolTitle = formattedSchool + formattedTitle;
    $(".education-entry:last").append(formattedSchoolTitle);
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedURL);
    $("#education").append(HTMLonlineClasses);
  }
}
education.display();
var projects = {"projects":
      [{"title": "First Web Page",
      "dates": "May 18th",
      "description": "Web Page created using code for first time",
      "image": "images/Website.PNG"},
      {"title": "My Quiz",
      "dates": "June 29th",
      "description": "Disney quiz with Python",
      "image": "images/Quiz.PNG"},
      {"title": "Favorite Movies Webpage",
      "dates": "July 17th",
      "description": "My Families Favorite Movies",
      "image": "images/Movies.PNG"}]
  }
projects.display = function() {
  for (var project = 0; project < projects.projects.length; project++ ) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if (projects.projects[project].image) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
projects.display();
  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
  }


  $(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);  });

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " "+ name[1];
}
$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
