import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9Mdeo4S4YXDOaI4Xm53DaaHVlccVG_j7Yg&s",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Senior Software Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1-rUuRFvy3mZ29s_BxzGfMqk76z-KtnsA&s",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$90/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$110/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
      companyName: "Netflix",
      datePosted: "2 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Remote",
      salary: "$130/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZGzTL011iyJZUnzy9T278kjLQmk9W0DMug&s",
      companyName: "Spotify",
      datePosted: "6 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      salary: "$70/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://cdn.creazilla.com/icons/3204955/logo-apple-icon-lg.png",
      companyName: "Apple",
      datePosted: "1 day ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$125/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Meta",
      datePosted: "4 days ago",
      post: "React Developer",
      tag1: "Contract",
      tag2: "Remote",
      salary: "$100/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3e758QD9Swe-iCeaVcaTv4BBaSJCEU_XXg&s",
      companyName: "Uber",
      datePosted: "1 week ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Entry Level",
      salary: "$60/hr",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://images.seeklogo.com/logo-png/40/1/airbnb-logo-png_seeklogo-408555.png",
      companyName: "Airbnb",
      datePosted: "3 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Remote",
      salary: "$105/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968936.png",
      companyName: "Salesforce",
      datePosted: "2 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$115/hr",
      location: "Chennai, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              brandLogo={elem.brandLogo}
              companyName={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              salary={elem.salary}
              location={elem.location}
            />
          </div>
        ); 
      })}
    </div>
  );
};

export default App;
