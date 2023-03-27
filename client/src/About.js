import React from "react";
import profpic from "./Photos/ProfilePic.jpg"

function About() {
    return (
        <>
            <h1 className="headline">About</h1>
            <img src={profpic} className="profPic"/>
            <p className="aboutPara">Harrison is a Software Engineer and recent graduate of the Flatiron School. He comes from a career in television, and is using his newly developed skills to forge a path in Software Development. In just a few short months, he developed proficiencies in React, Ruby on Rails, Javascript, and Python applications. He is also independently learning Java and C++ in order to stay up to date with the latest and most utilized languages in the industry.</p>
            <p className="aboutPara">--</p>
            <p className="aboutPara">In addition to his career in Software Development, Harrison has a variety of interests that he is passionate about, including biking, coffee, pop culture, and politics. He has a podcast called Star Weebs, where he and his co-host discuss and review various pieces of Star Wars and anime media. He spent a year between his career in TV and Software Development working as a barista, where he developed a love of coffee brewing. He loves discussing flavor profiles, brewing techniques, and his favorite pieces of equipment to use in his coffee rituals. Harrison also enjoys staying active, and uses his free time to ride across all the bike paths of Brooklyn and Manhattan, getting some of the best views of the city in the process.</p>
            <p className="aboutPara">--</p>
            <p className="aboutPara">He and his partner, Julia, currently live in Brooklyn with their two cats, Boba and Jango.</p>
        </>
    )
}
 export default About;