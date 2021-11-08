$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    createListAll();
    setDropTargets();
  
    //createListAvailable();
  });
  
  // taken - has the student taken the course - true/false
  // PRMet - Are the pre-requisites met - true/false
  // required - Is completion of course required for graduation true/false
  // semester - indicates semester course is taken -1 for previous, 1-6 for planned
  // program - Is the course  part of the program 48 hours
  // offered - Text of proposed semester offerings
  // details - Details of the course - displays on hover
  
  var courselist = [{
    "Course": "ENC1101",
    "Name": "Introduction to Composition",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": false,
    "offered": "Spring, Fall, Summer",
    "details": "Students must take this to fulfill Communication Core"
  }, {
    "Course": "ENC1102",
    "Name": "Writing with Research",
    "PreReq": ["ENC1101"],
    "PRMet": false,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": false,
    "offered": "Spring, Fall, Summer",
    "details": "Students must take this to fulfill Communication Core"
  }, {
    "Course": "MAC1105",
    "Name": "College Algebra",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": false,
    "offered": "Spring, Fall, Summer",
    "details": "Students must take this to fulfill Mathematics Core"
  }, {
    "Course": "PHI2010",
    "Name": "Introduction to Philosophy",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": false,
    "offered": "Spring, Fall, Summer",
    "details": "Students must take to fill Humanities core. Can also choose ARH1000, HUM2020, LIT2000, MUL1010, THE1000"
  }, {
    "Course": "PSY1012",
    "Name": "General Psychology",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": false,
    "offered": "Spring, Fall, Summer",
    "details": "Students must take to fill Social Sciences core. Can also choose AMH2020, ANT2000, ECO2013, POS2041, SYG2000"
  }, {
    "Course": "MUM1610",
    "Name": "Survey of Recording Technology",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Introduction to the program. CoReq: MUM1622, MUM1634. Should be taken with this course"
  }, {
    "Course": "MUM1622",
    "Name": "Sound Reinforcement",
    "CoReq": ["MUM1610"],
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Co-req for MUM1610. Should be taken in same semester"
  }, {
    "Course": "MUM1634",
    "Name": "The Digital Audio Workstation",
    "CoReq": ["MUM1610"],
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Co-req for MUM1610. Should be taken in same semester"
  }, {
    "Course": "MUM2600",
    "Name": "Audio Engineering I",
    "PreReq": ["MUM1610"],
    "PRMet": false,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Study of equipment used in the modern recording studio. CoReq: MUM2600L. Should be taken with this course"
  }, {
    "Course": "MUM2600L",
    "Name": "Audio Engineering I Lab",
    "CoReq": ["MUM2600"],
    "PreReq": ["MUM2600"],
    "PRMet": "false",
    "taken": false,
    "semester": 0,
    "hours": 2,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "CoReq for MUM2600. Should be taken in same semester"
  }, {
    "Course": "MUM2601",
    "Name": "Audio Engineering II",
    "PreReq": ["MUM2600"],
    "PRMet": false,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Continuation of MUM2600"
  }, {
    "Course": "MUM2601L",
    "Name": "Audio Engineering II Lab",
    "PreReq": ["MUM2601"],
    "PRMet": false,
    "taken": false,
    "semester": 0,
    "hours": 2,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "CoReq for MUM2600. Should be taken in same semester"
  }, {
    "Course": "MUM2603",
    "Name": "Studio Maintenance",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Focuses on troubleshooting techniques and electronic circuitry"
  }, {
    "Course": "MUM2607",
    "Name": "Soundtrack Development",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Project oriented class that shows how to develop soundtracks. CoReq: MUM2640. Should be taken with this course."
  }, {
    "Course": "MUM2640",
    "Name": "Post Production Sound",
    "PreReq": ["MUM2609"],
    "CoReq": ["MUM2607"],
    "PRMet": false,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "CoReq for MUM2640. Should be taken in same semester"
  }, {
    "Course": "MUM2609",
    "Name": "Studio Production",
    "PreReq": ["MUM2600"],
    "PRMet": false,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Detailed study of the role of the music producer and recording engineer"
  }, {
    "Course": "MUM2700",
    "Name": "Survey of Music Business",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "An overall examination of the major areas of the music industry"
  }, {
    "Course": "MUS2360",
    "Name": "Learning Basic Music Using the Computer",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall",
    "details": "Introduces the student to basic music applications on the computer"
  }, {
    "Course": "MUC2301",
    "Name": "Introduction to Electronic Music Production",
    "PRMet": true,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall, Summer",
    "details": "Program specific elective. Must have three classes"
  }, {
    "Course": "MUM2611",
    "Name": "Live Recording Techniques",
    "PreReq": ["MUM1622"],
    "PRMet": false,
    "semester": 0,
    "taken": false,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall, Summer",
    "details": "Program specific elective. Must have three classes"
  }, {
    "Course": "MUM2677",
    "Name": "Sound Reinforcement II",
    "PreReq": ["MUM1610","MUM1622"],
    "PRMet": false,
    "taken": false,
    "semester": 0,
    "hours": 3,
    "required": true,
    "program": true,
    "offered": "Spring, Fall, Summer",
    "details": "Program specific elective. Must have three classes"
  }]; 
  
  var startDrag;
  
  // These are array of classes taken for a given semester 
  // A better design would be to add semester to the original courselist array
  // 0 = Not taken, -1 = taken previous term, number indicating term = taken with term
  // #eaglin - need this modification to implement Undo feature
  
  var semesterHours = [0, 0, 0, 0, 0, 0]; // Total number of hours taken each semester
  var semesters = [
    [],  // semesters[0] - previously taken courses
    [],  // semesters[1] - index of courses taken semester 1 
    [],  // semesters[2] - same for semester 2
    [],
    [],
    []
  ]; // Array of array of courses taken for each semester
  
  var undolist = [];
  
  var programHours = 0;
  var coursesTaken = ""; // String - used for printing
  var coursesEnrolled = ""; // String - used for printing
  //var coursesNeededArray = [];
  
  function createListAll() {
    // Primary function to build interface - goes through data - courselist array
    // and builds List of courses to take
    // Courses with pre-requisites met are green and draggable
    // Courses with pre-requistes not met are yellow
  
    for (var i = 0; i < courselist.length; i++) {
      addCourseToList(i);
    }
  }
  
  function addCourseToList(i) {
    if (prerequisitesMet(i)) {
      addCoursePrequistesMet(i);
    } else // Pre-requisites are not met for course
    {
      addCoursePrerequisitesNotMet(i);
    }
  }
  
  function addCoursePrequistesMet(i) {
  // Creates a div container for the course with ID to match the array index of the courselist
  // appends the div to the center div list of all courses and makes it draggable
    var a = $('<div />', {
      id: i.toString(),
      class: 'classAvailable',
      html: courselist[i].Course + " " + courselist[i].Name + String.fromCharCode(10) + " <br/> " + courselist[i].offered + "<span class='tooltiptext'>" + courselist[i].details + "</span>",
  
    });
    $("#all").append(a);
  
    // Mak div draggable
    $('#' + i).draggable({
      start: function() {
        startDrag = $(this).position();
      }
    });
  }
  
  function addCoursePrerequisitesNotMet(i) {
  // Creates a div container for the course with ID to match the array index of the courselist
  // appends the div to the center div list of all courses - not made draggable
  
  var a = $('<div />', {
      id: i.toString(),
      class: 'classNotAvailable',
      html: courselist[i].Course + " " + courselist[i].Name + String.fromCharCode(10) + " <br/> " + courselist[i].offered + "<span class='tooltiptext'>" + courselist[i].details + "</span>",
    });
  
    $("#all").append(a);
  
  }
  
  function setDropTargets() {
  
    // Sets the droppable and defines the function that is called when a 
    // course is dropped into any one of the droppable slots - semesters or 
    // courses already taken
  
    $('#semester1').droppable({
      drop: function(event, ui) { dropInSemester(ui,1); }
    });
  
    $('#semester2').droppable({
      drop: function(event, ui) { dropInSemester(ui,2); }
    });
  
    $('#semester3').droppable({
      drop: function(event, ui) { dropInSemester(ui,3); }
    });
  
    // Course is dropped into the completed
  
    $('#completed').droppable({
      drop: function(event, ui) {
        var cid = ui.draggable.attr('id');
        courselist[parseInt(cid)].taken = true;
  
  // semesters[0] is integer ID of all taken course
        semesters[0].push(cid);
        undolist.push({course: cid, semester: 0});
  
  // Fills in div on page of completed classes and hides dragged div
        $('#completedclasses').html(semesterPrint(0));
        $('#' + cid).hide();
  
        
        semesterHours[0] += courselist[cid].hours; // Add to total hours taken
        if (courselist[cid].program) programHours += courselist[cid].hours;
  
        checkPrerequisites(cid, 0);
        $("#CompletedHours").html("Hours Completed: " + semesterHours[0]);
        $("#ProgramHours").html("Program Hours (48 required): " + programHours);
  
      }
    });
  }
  function dropInSemester(ui,sid){
  // The User Interface actions with call to logic for dropping a class 
  // in a semester
  
        var id = ui.draggable.attr('id');
        if (!dropSemester(id, sid)) {
          ui.draggable.animate({
            top: 0,
            left: 0
          }, "slow");
        }
  
  }
  function dropSemester(cid, sid) {
    // Performs actions when student drops a course into a semester
    // cid = course ID
    // sid = semester ID
    var icid = parseInt(cid); // Integer Course ID
    var isid = parseInt(sid); // Integer Semester ID
    var target = "#semester" + sid;
    
    if (okToTake(icid, isid)) {
  
  // The course being taken is tracked both in semesters and courselist
  // semesters[i] - array of integer id's of courses taken
  // courselist - array of courses
      courselist[icid].taken = true; // designate course as having been taken 
      courselist[icid].semester = isid; // designate the semester the course is being taken
      semesters[isid].push(icid); // Puts the course into semester taken 
      undolist.push({course: cid, semester: sid});
      
      // Adds to div (drop target)  as a string and hides dropped div
      // removes semesters offered before dropping text
      $("#semesterclasses" + sid).html(semesterPrint(sid));
      $('#' + cid).hide(); // Hide original draggable DIV
  
      // recheck pre-requistes and turn on draggable
      checkPrerequisites();
  
      // Update the number of hours in semester   
      semesterHours[sid] += courselist[cid].hours;
      $('#semester' + sid + "hours").html("Semester Hours: " + semesterHours[sid])
      return true;
    } else {
      return false; // course is rejected due to no pre-requisites
    }
  
  }
  
  function checkPrerequisites() {
    // Determines if pre-requisites are met and if so - makes div draggable
    // for new courses 
  
    for (var i = 0; i < courselist.length; i++) {
      if (prerequisitesMet(i)) {
        $('#' + i.toString()).css("background-color", "lightgreen");
        $('#' + i.toString()).draggable();
      }
    }
  }
  
  function okToTake(courseId, semesterId) {
    // Cannot take courses in same semester as pre-requisites
    // Answers true or false dependent on if pre-requisites are met
    var preReqArray = courselist[courseId].PreReq;
    if (preReqArray == null) return true;
  
    preReqArray = getAllPrerequisites(courseId, preReqArray); // Gets all preRequistes for Course
    var _courses = semesterCourses(semesterId); // Gets all courses taken in given semester - numeric array
  
    var checked = true;
    // Check against Prerequisite list for every pre-requisite
    // check to see if thepre-requisute is being taken in the semester
    // where the course is being dropped.
    for (var i = 0; i < preReqArray.length; i++) {
      for (var j = 0; j < _courses.length; j++) {
        if (preReqArray[i] == courselist[_courses[j]].Course) {
          checked = false;
        }
      }
    }
  
    return checked;
  }
  
  
  
  function semesterCourses(sid) {
    // Answers an integer array of the courses being taken in any given semester
    var _courses = [];
    for (var i = 0; i < courselist.length; i++) {
      if (courselist[i].semester == sid) _courses.push(i);
    }
  
    return _courses;
  }
  
  function getAllPrerequisites(courseId, preReqArray) {
    //Recursively gets all pre-requisites for a course and returns array
    var coursePreReq = courselist[courseId].PreReq;
    if (coursePreReq == null) return [];
  
    for (var i = 0; i < coursePreReq.length; i++) {
      var id = getIdFromCourseName(coursePreReq[i]);
  
      if (courselist[id].PreReq == null) return preReqArray;
  
      preReqArray = mergeArrays(preReqArray, getAllPrerequisites(id, courselist[id].PreReq));
    }
  
    return preReqArray;
  }
  
  function mergeArrays(a1, a2) {
    for (var i = 0; i < a2.length; i++) {
      if (!a1.includes(a2[i])) a1.push(a2[i]);
    }
    return a1;
  }
  
  function getIdFromCourseName(courseName) {
    for (var i = 0; i < courselist.length; i++) {
      if (courselist[i].Course == courseName) return i;
    }
    return 0;
  }
  
  function prerequisitesMet(courseId) {
    // Looks at a course and determines if the pre-requisites are met
  
    var preReqArray = courselist[parseInt(courseId)].PreReq;
  
    if (preReqArray == null) {
      return true;
    }
  
    var checked = true;
    for (var i = 0; i < preReqArray.length; i++) {
      if (!isTaken(preReqArray[i])) {
        checked = false;
      }
    }
  
    return checked;
  }
  
  
  function isTaken(prereq) {
    // determines if a course 
    var taken = false;
    for (var i = 0; i < courselist.length; i++) {
      if ((courselist[i].Course == prereq) && (courselist[i].taken == true)) {
        return true;
      }
    }
    return false;
  }
  
  function whatCanITake() {
    // Answers a string of all courses that can be taken - response to the 
    // What Can I Take button
  
    var cna = [];
    var str_req = "";
    var str_elec = "";
    for (var i = 0; i < courselist.length; i++) {
      cna[i] = courselist[i].Course + " " + courselist[i].Name;
      if (prerequisitesMet(i)) {
        if (courselist[i].taken != true) {
          if (courselist[i].required)
            str_req += cna[i] + "<br/>";
          else
            str_elec += cna[i] + "<br/>";
        }
      }
    }
    var str = "<b>Available Required Courses</b> </br><br/>" + str_req;
    str += "<br/><b>Available Elective Courses</b><br/><br/>" + str_elec;
    return str;
  }
  
  function semestersPrint() {
    var str = "";
    str += semesterHeaderPrint(1) + semesterPrint(1) + "<br/>";
    str += semesterHeaderPrint(2) +semesterPrint(2) + "<br/>";
    str += semesterHeaderPrint(3) +semesterPrint(3) + "<br/>";
  
    return str;
  }
  
  function semesterPrint(sid) {
    var s = "";
    for (var i = 0; i < semesters[sid].length; i++) {
       var cid = semesters[sid][i];
       s += coursePrint(cid) + "<br/>";
    }
    return s;
  }
  
  function semesterHeaderPrint(sid) {
    var  s = "<br/><b>Semester " + sid + " ";
    s += "Total hours: " + semesterHoursCount(sid) + "</b><br/><br/>";
    return s;
  }
  
  function coursePrint(cid) {
    return courselist[cid].Course + " " + courselist[cid].Name;
  }
  
  function semesterHoursCount(sid) {
    var tot = 0;
    for (var i = 0; i < semesters[sid].length; i++) {
       var cid =  semesters[sid][i];
       tot += courselist[cid].hours;
    }
    return tot;
  }
  
  $("#undo").click(function() {executeUndo();});
  
  function executeUndo() {
    if (undolist.length == 0) return;
      var a = undolist.pop();
    var cid = a.course; var sid = a.semester;
    semesters[a.semester].pop();
    courselist[a.course].taken = false;
    $('#' + cid).show(); // Hide original draggable DIV
    $('#' + cid).position({
    my: "right bottom",
    at: "right bottom",
    of: "#all"
  });
  
      // recheck pre-requistes and turn on draggable
      checkPrerequisites();
  
      // Update the number of hours in semester   
      semesterHours[sid] -= courselist[cid].hours;
      $('#semester' + sid + "hours").html("Semester Hours: " + semesterHours[sid]);
      if (sid == 0){$("#completedclasses").html(semesterPrint(sid));} else {$("#semesterclasses" + sid).html(semesterPrint(sid));}
  }
  
  // Shows the what can I take dialog
  $("#allAvailable").click(function() {
    $('#dialog').html(whatCanITake());
  
    $('#dialog').dialog({
      modal: true,
      buttons: {
        "Print": function() {
          print();
        },
        "Close": function() {
          $(this).dialog("close")
        }
      }
    });
  });
  
  
  
  function print() {
    var str = "<h2>Program of Study - BSIT</h2>";
    str += "<table><tr><td>";
    str += "<b>Summary of Completed Hours</b></br>"
    str += $('#completedclasses').html();
    str += "<br/>";
    str += whatCanITake();
    str += "</td><td><b>Semester Course Plan</b><br/>";
    str += semestersPrint();
    str += "</td></tr></table>";
    var aWindow = window.open("data:text/html;charset=utf-8," + str, "", "_blank");
    aWindow.print();
  }
  